import React from "react";
import { fakeUsers } from "../../state/fakeData";
import { usersRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";

const Users = () => {
  return (
    <div className="transactions">
      <h1>Lista użytkowników aplikacji</h1>
      <div className="transactions-table-wrap"></div>
      <CustomTable tableColumns={usersRows} tableData={fakeUsers} />
    </div>
  );
};

export default Users;
