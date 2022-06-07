import React from "react";
import { fakeCategories } from "../../state/fakeData";
import { categoriesRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";

const Categories = () => {
  return (
    <div className="transactions">
      <h1>Lista kategorii dostępnych dla użytkowników</h1>
      <div className="transactions-table-wrap"></div>
      <CustomTable tableColumns={categoriesRows} tableData={fakeCategories} />
    </div>
  );
};

export default Categories;
