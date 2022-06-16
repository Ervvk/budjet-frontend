import React, { useContext } from "react";
import "./Home.less";
import { AuthContext } from "../../state/auth/authContext";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const loggedUser = authCtx.loggedUser;

  return (
    <div>
      <h1>Welcome, {loggedUser.name}!</h1>
      <h2>
        Have a nice day as the BudJet-app <b>{loggedUser.role}</b>
      </h2>
    </div>
  );
};

export default Home;
