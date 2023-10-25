import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

const AccountOperation = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [reqLoan, setReqLoan] = useState("");
  const [reqLoanPurpose, setReqLoanPurpose] = useState("");

  const { isLoading, loan, loanPurpose, balance } = useSelector(
    (store) => store.account
  );

  const dispatch = useDispatch();

  function handleDeposit() {
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    if (balance >= withdrawalAmount) {
      dispatch(withdraw(withdrawalAmount));
      setWithdrawalAmount("");
    } else {
      alert("No enough to withdraw!");
    }
  }

  function handlePayLoan() {
    if (balance >= loan) {
      dispatch(payLoan());
    } else {
      alert("Please top up the balance to clear Loan!");
    }
  }

  function handleRequestLoan() {
    dispatch(
      requestLoan({
        amount: reqLoan,
        purpose: reqLoanPurpose,
      })
    );
    reqLoan("");
    reqLoanPurpose("");
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="SGD">SGD Dollar</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        {loan > 0 ? (
          <div>
            <span>
              Pay back ${loan} ({loanPurpose})
            </span>
            {` `}
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        ) : (
          <div>
            <label>Request loan</label>
            <input
              type="number"
              value={reqLoan}
              onChange={(e) => setReqLoan(+e.target.value)}
              placeholder="Loan amount"
            />
            <input
              value={reqLoanPurpose}
              onChange={(e) => setReqLoanPurpose(e.target.value)}
              placeholder="Loan purpose"
            />
            <button onClick={handleRequestLoan}>Request loan</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOperation;
