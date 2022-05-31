import React from "react";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";
import { fakeUsers } from "../../state/fakeData";
import { usersRows } from "../../components/tablesSchemas";
const Users = () => {
  return (
    <div className="transactions">
      <h1>Lista użytkowników aplikacji</h1>
      <div className="transactions-table-wrap"></div>
      <TransactionsTable tableColumns={usersRows} tableData={fakeUsers} />
    </div>
  );
};

export default Users;
