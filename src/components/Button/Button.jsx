import { Link } from "react-router";
import ButtonStyle from "./Button.styles";

const Button = ({ link, children }) => {
  return (
    <Link css={ButtonStyle} to={link}>
      {children}
    </Link>
  );
};

export default Button;
