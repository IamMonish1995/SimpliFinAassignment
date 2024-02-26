import React, { useEffect, useState } from "react";
import MainTabs from "./Main";
const App = () => {
  const [activeKey, setActiveKey] = useState(1);

  const getActiveKey = () => {
    let key = localStorage.getItem("activeKey");
    setActiveKey(parseInt(key));
  };
  useEffect(() => {
    getActiveKey();
  }, []);
  return <MainTabs activeKey={activeKey} setActiveKey={setActiveKey} />;
};
export default App;
