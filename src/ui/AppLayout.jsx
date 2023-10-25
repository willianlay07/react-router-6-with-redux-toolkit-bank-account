import { Outlet, useNavigation } from "react-router-dom";

import Loading from "./Loading";
import Nav from "./Nav";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default AppLayout;
