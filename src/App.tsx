import React from "react";
import "./App.css";
import Paragraph from "components/Paragraph";
import Collapse from "components/Collapse";

const App = () => {
  return (
    <>
      <div className="row">
        <Collapse
          collapsedLabel="Подробнее"
          expandedLabel="Скрыть"
          isExpanded={false}
        >
          <Paragraph>1 параграф</Paragraph>
        </Collapse>

        <Collapse
          collapsedLabel="Открыть"
          expandedLabel="Скрыть"
          isExpanded={false}
        >
          <Paragraph>2 параграф</Paragraph>
        </Collapse>
        <Collapse collapsedLabel="show" expandedLabel="hide" isExpanded={false}>
          <Paragraph>3 параграф</Paragraph>
        </Collapse>
        <Collapse collapsedLabel="show" expandedLabel="hide" isExpanded={true}>
          <Paragraph>4 параграф текст ....</Paragraph>
        </Collapse>
      </div>
    </>
  );
};

export default App;
