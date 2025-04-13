import { css } from "@emotion/react";

const ulContainerStyle = css`
  display: flex;
  gap: 0.8rem;
`;

const navTitleStyle = css`
  font-size: 1.6rem;
  font-weight: 700;
  color: #4b5563;

  &.active {
    color: #3692ff;
  }
`;

export { ulContainerStyle, navTitleStyle };
