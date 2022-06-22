import moment from "moment";
export const transactionsRows = [
  {
    title: "User",
    dataIndex: "userId",
    sorter: (a, b) => a.userId - b.userId,
  },
  {
    title: "Data",
    dataIndex: "date",
    sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
  },
  {
    title: "Źródło",
    dataIndex: "source",
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
    dataIndex: "type",
  },
  {
    sort: true,
    title: "Kwota",
    dataIndex: "amount",
    sorter: (a, b) => a?.amount - b?.amount,
    render: (a) => a.toFixed(2),
  },
];
export const categoriesRows = [
  {
    title: "Id",
    dataIndex: "id",
    sorter: (a, b) => a.id.localeCompare(b.id),
  },
  {
    title: "Nazwa",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
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
    dataIndex: "name",
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
    dataIndex: "userType",
  },
];
