import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AccountOperation from "./AccountOperation";

const Bank = () => {
  const account = useSelector((store) => store.account);
  const navigate = useNavigate();

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
      <h3>Welcome : {account.user.name}</h3>
      <div className="balance">{formatCurrency(account.balance)}</div>
      <AccountOperation />
    </div>
  );
};

export default Bank;

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
