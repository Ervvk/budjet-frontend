import React from "react";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";
import { fakeCategories } from "../../state/fakeData";
import { categoriesRows } from "../../components/tablesSchemas";

const Categories = () => {
  return (
    <div className="transactions">
      <h1>Lista kategorii dostępnych dla użytkowników</h1>
      <div className="transactions-table-wrap"></div>
      <TransactionsTable
        tableColumns={categoriesRows}
        tableData={fakeCategories}
      />
    </div>
  );
};

export default Categories;
