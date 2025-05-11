import { css } from "@emotion/react";
import { closeButtonStyle } from '../styles/common';

export const formStyle = css`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;


export const formMainStyle = css`
  display: flex;
  flex-direction: column;

  label {
    margin-block: 3.2rem 1.6rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #1F2937;
  }

  input,
  textarea {
    background: #F3F4F6;
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
    border-radius: 1.2rem;
    padding: 1.6rem 2.4rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9CA3AF;
  }
`;

export const inputStyle = css`
  height: 5.6rem;
`;

export const areaStyle = css`
  height: 28.2rem;
`;

export const tagListContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const tagItemStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #f2f2f2;
  padding: 0.6rem 1.2rem;
  border-radius: 26px;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const tagButtonStyle = css`
  ${closeButtonStyle};
  width: 2rem;
  height: 2rem;
`;
