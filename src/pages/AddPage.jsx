import { useRef, useState } from 'react';
import * as S from './addPage.styles';
import { titleStyle } from '../styles/common';
import plusImg from '../assets/icons/ic_plus.png';

const AddPage = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const isFormValid =
    imagePreview &&
    tags.length > 0 &&
    name.trim() !== '' &&
    description.trim() !== '' &&
    price.trim() !== '';

  const handleImageClick = () => {
    if (imagePreview) {
      setErrorMessage('*이미지 등록은 최대 1개까지 가능합니다.');
      return;
    }
    setErrorMessage('');
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setErrorMessage('');
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmed = tagInput.trim();
      if (!trimmed || tags.includes(trimmed)) return;
      setTags([...tags, trimmed]);
      setTagInput('');
    }
  };

  const handleTagRemove = (removeIndex) => {
    setTags(tags.filter((_, index) => index !== removeIndex));
  };

  return (
    <>
      <form css={S.formStyle}>
        <div css={S.formHeaderStyle}>
          <h1 css={titleStyle}>상품 등록하기</h1>
          <button
            css={S.submitButtonStyle}
            type="submit"
            disabled={!isFormValid}
          >
            등록
          </button>
        </div>

        <div css={S.formMainStyle}>
          <label>상품 이미지</label>
          <div css={S.imageContainerStyle}>
            <div css={S.formImageBoxStyle} onClick={handleImageClick}>
              <img src={plusImg} alt="plus" />
              <p>이미지 등록</p>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>

            {imagePreview && (
              <div css={S.itemPreviewContainerStyle}>
                <img
                  src={imagePreview}
                  alt="preview"
                  css={S.previewImageStyle}
                />
                <button
                  onClick={handleImageRemove}
                  type="button"
                  css={S.imageCloseButtonStyle}
                />
              </div>
            )}
          </div>

          {errorMessage && (
            <p css={S.errorMessageStyle}>{errorMessage}</p>
          )}

          <label>상품명</label>
          <input
            css={S.inputStyle}
            placeholder="상품명을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>상품 소개</label>
          <textarea
            css={S.areaStyle}
            placeholder="상품명을 입력해주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>판매 가격</label>
          <input
            type="number"
            css={S.inputStyle}
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label>태그</label>
          <input
            css={S.inputStyle}
            placeholder="태그를 입력해주세요."
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyDown={handleTagKeyDown}
          />

          <div css={S.tagListContainerStyle}>
            {tags.map((tag, index) => (
              <div key={index} css={S.tagItemStyle}>
                {`#${tag}`}
                <button
                  type="button"
                  onClick={() => handleTagRemove(index)}
                  css={S.tagButtonStyle}
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPage;
