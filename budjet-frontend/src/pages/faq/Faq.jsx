import React from "react";
import "./Faq.less";
import { Button, Collapse } from "antd";
import { useNavigate } from "react-router-dom";
const { Panel } = Collapse;

const Faq = () => {
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate("/login");
  };
  return (
    <div className="faq-wrapper">
      {" "}
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Co to jest BudJet?" key="1">
          <p>BudJet to prosta aplikacja do zarządzania budżetem domowym.</p>
        </Panel>
        <Panel header="Kto może korzystać z BudJet?" key="2">
          <p>Z BudJet może korzystać każdy! Wystarczy się zarejestrować.</p>
        </Panel>
        <Panel header="Czy korzystanie z konta jest płatne?" key="3">
          <p>Nie, BudJet to całkowicie darmowa aplikacja.</p>
        </Panel>
        <Panel header="Jak zmienić dane konta?" key="4">
          <p>Skontaktuj się z naszym supportem budjetappsupp@gmail.com.</p>
        </Panel>
        <Panel header="Co mogę robić w BudJet jako user" key="5">
          <p>
            Możesz dodawać, edytować, usuwać i przeglądać swoje transakcje.
            Widzisz stan swojego portfela i statystykę z ostatniego miesiąca.
          </p>
        </Panel>
        <Panel header="Co może robić w aplikacji Admin?" key="6">
          <p>
            Admin może zarządzać transakcjami, użytkownikami oraz kategoriami.
          </p>
        </Panel>
        <Panel
          header="Chciałbym abyście dodali nową kategorię. Co zrobić?"
          key="7"
        >
          <p>
            Skontaktuj się z naszym supportem (albo zdobądź prawa admina -
            wniosek na nasz mail).
          </p>
        </Panel>
        <Panel header="Czemu nie mogę dodać kolejnego wydatku?" key="8">
          <p>
            Przekorczyłeś/aś swój limit. Bądź bardziej oszczędny albo więcej
            zarabiaj.
          </p>
        </Panel>
      </Collapse>
      <Button className="faq-btn" type="primary" onClick={handleLoginRedirect}>
        Powrót do logowania
      </Button>
    </div>
  );
};

export default Faq;
