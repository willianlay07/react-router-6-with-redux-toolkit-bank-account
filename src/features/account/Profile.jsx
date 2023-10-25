import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./accountSlice";

const Profile = () => {
  const account = useSelector((store) => store.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  useEffect(() => {
    if (!account.isAuth) {
      navigate("/login", {
        replace: true,
      });
    }
  }, [account.isAuth, navigate]);

  if (!account.isAuth) return null;

  return (
    <div>
      <h3>Welcome: {account.user.name}</h3>
      <p style={{ marginTop: "-10px" }}>Email: {account.user.email}</p>
      <img src={`${account.user.avatar}`} style={{ borderRadius: "10px" }} />
      <br />
      <br />
      <button onClick={() => handleLogout()}>Log Out</button>
    </div>
  );
};

export default Profile;
