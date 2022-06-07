export const transactionsRows = [
  {
    title: "Data",
    dataIndex: "dateTime",
  },
  {
    title: "Źródło",
    dataIndex: "partner",
  },
  {
    title: "Tytuł",
    dataIndex: "title",
  },
  {
    title: "Kategoria",
    dataIndex: "category",
  },
  {
    title: "Rodzaj",
    dataIndex: "sign",
  },
  {
    sort: true,
    title: "Kwota",
    dataIndex: "value",
    sorter: (a, b) => a.value - b.value,
  },
];
export const categoriesRows = [
  {
    title: "Nazwa",
    dataIndex: "name",
  },
];
export const usersRows = [
  {
    title: "Login",
    dataIndex: "login",
  },
  {
    title: "Imię",
    dataIndex: "name",
  },
  {
    title: "Nazwisko",
    dataIndex: "surname",
  },

  {
    title: "Typ użytkownika",
    dataIndex: "permission",
  },
];
