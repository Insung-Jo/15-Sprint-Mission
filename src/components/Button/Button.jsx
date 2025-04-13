import { Link } from "react-router";
import ButtonStyle from "./Button.styles";

/** @jsxImportSource @emotion/react */
const Button = ({ link, children }) => {
  return (
    <Link css={ButtonStyle} to={link}>
      {children}
    </Link>
  );
};

export default Button;
