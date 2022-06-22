import React, { useContext } from "react";
import "./Home.less";
import { AuthContext } from "../../state/auth/authContext";
import { ReactComponent as MyLogo } from "../../assets/swinia.svg";
const Home = () => {
  const authCtx = useContext(AuthContext);
  const loggedUser = authCtx.loggedUser;

  return (
    <div>
      <h1>Witaj, {loggedUser.name}!</h1>
      <MyLogo />
    </div>
  );
};

export default Home;
