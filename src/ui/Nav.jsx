import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const account = useSelector((store) => store.account);

  return (
    <div>
      <ul
        style={{ display: "flex", listStyleType: "none", paddingLeft: "0px" }}
      >
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        {account.isAuth ? (
          <>
            <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
              <NavLink to="/bank">Bank</NavLink>
            </li>
          </>
        ) : (
          <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
