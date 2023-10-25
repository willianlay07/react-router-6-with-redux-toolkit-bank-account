import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./accountSlice";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const dispatch = useDispatch();
  const account = useSelector((store) => store.account);
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    dispatch(login(email, password));
    navigate("/profile", {
      replace: true,
    });
  }

  useEffect(() => {
    if (account.isAuth) {
      navigate("/profile", {
        replace: true,
      });
    }
  }, [account.isAuth, navigate]);

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleForm}>
        <label>Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
