import { Link, Outlet } from "react-router-dom";
import Profile from "../Profile/Profile";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">판다마켓</Link>
        <Nav />
        <Profile />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
