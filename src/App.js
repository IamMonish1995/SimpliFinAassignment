import React, { useEffect, useState } from "react";
import {  Tabs } from "antd";
import Trending from "./components/trending";
import SearchItems from "./components/search";
const App = () => {

  const [activeKey,setActiveKey] = useState(1)
  let items = [
    {
      label: `Gifs `,
      key: 1,
      children: <Trending type='gifs'/>,
    },
    {
      label: `Stickers `,
      key: 2,
      children: <Trending type='stickers'/>,
    },
    {
      label: `Search`,
      key: 3,
      children: <SearchItems type='gifs'/>,
    },
  ];
const handleOnChange = (activeKey)=>{
  localStorage.setItem("activeKey",activeKey)
  setActiveKey(activeKey)
}
const getActiveKey =  ()=>{
  let key =  localStorage.getItem("activeKey")
  setActiveKey(key)

}
useEffect(()=>{
  getActiveKey()
},[])
  return (
    <Tabs
      defaultActiveKey={ activeKey || 1}
      centered
      items={items}
      onChange={handleOnChange}
    />
  );
};
export default App;
