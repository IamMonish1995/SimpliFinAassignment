import React from "react";
import Trending from "./components/trending";
import SearchItems from "./components/search";
import { Tabs } from "antd";

const MainTabs = ({ activeKey, setActiveKey }) => {
  let items = [
    {
      label: `Gifs `,
      key: 1,
      children: <Trending type="gifs" />,
    },
    {
      label: `Stickers `,
      key: 2,
      children: <Trending type="stickers" />,
    },
    {
      label: `Search`,
      key: 3,
      children: <SearchItems type="gifs" />,
    },
  ];
  const handleOnChange = (Key) => {
    localStorage.setItem("activeKey", Key);
    setActiveKey(Key);
  };

  return (
    <Tabs
      centered
      items={items}
      onChange={handleOnChange}
      activeKey={activeKey || 1}
    />
  );
};

export default MainTabs;
