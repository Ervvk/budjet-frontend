import "./App.less";
import "./App.module.less";
import { Layout } from "antd";
import Header from "./components/layout/Header";
import Routes from "./pages/routes";

function App() {
  const { Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header></Header>
      <Content>{<Routes />}</Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default App;
