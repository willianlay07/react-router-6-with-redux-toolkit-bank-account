import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h3 style={{ color: "#990000" }}>Something went wrong!</h3>
      <p>{error.data || error.message}</p>
    </div>
  );
};

export default Error;
