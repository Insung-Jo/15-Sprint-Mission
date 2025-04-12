import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoImg}></img>
    </Link>
  );
};

export default Logo;
