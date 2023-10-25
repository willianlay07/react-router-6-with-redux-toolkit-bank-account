import { useSelector } from "react-redux";

const Home = () => {
  const account = useSelector((store) => store.account);

  console.log(account);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
