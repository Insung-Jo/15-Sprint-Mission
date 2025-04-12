import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>헤더 입니다.</div>
      <Outlet />
    </>
  );
};

export default Header;
