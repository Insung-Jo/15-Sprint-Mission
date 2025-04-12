import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="border">자유게시판</NavLink>
        </li>
        <li>
          <NavLink to="items">중고마켓</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
