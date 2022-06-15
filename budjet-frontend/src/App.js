import "./App.less";
import "./App.module.less";
import { Layout } from "antd";
import Header from "./components/layout/Header";
import Routes from "./pages/routes";
import TransactionsProvider from "./state/TransactionsProvider";

function App() {
  const { Content, Footer } = Layout;
  return (
    <TransactionsProvider>
      <Layout className="layout">
        <Header></Header>

        <Content>{<Routes />}</Content>

        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>{" "}
    </TransactionsProvider>
  );
}

export default App;
