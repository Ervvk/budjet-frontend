import moment from "moment";
export const transactionsRows = [
  {
    title: "Data",
    dataIndex: "dateTime",
    sorter: (a, b) => moment(a.dateTime).unix() - moment(b.dateTime).unix(),
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
    dataIndex: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
];
export const usersRows = [
  {
    title: "Login",
    dataIndex: "login",
    sorter: (a, b) => a.login.localeCompare(b.login),
  },
  {
    title: "Imię",
    dataIndex: "userName",
  },
  {
    title: "Nazwisko",
    dataIndex: "surname",
    sorter: (a, b) => a.surname.localeCompare(b.surname),
  },
  {
    title: "Adres e-mail",
    dataIndex: "email",
  },

  {
    title: "Typ użytkownika",
    dataIndex: "permission",
  },
];
