import { titleStyle } from "../../styles/common";
import Button from "../Button/Button";
import * as S from './TooBar.styles';

function Toolbar() {
  return (
    <div css={S.toolbarStyle}>
      <h2 css={titleStyle}>전체 상품</h2>
      <div>
        <input placeholder="검색할 상품을 입력해주세요" />
        <Button link="/additem">상품 검색하기</Button>
        <select>
          <option value="recent">최신 순</option>
          <option value="favorite">좋아요 순</option>
        </select>
      </div>  
    </div>
  );
}

export default Toolbar;
