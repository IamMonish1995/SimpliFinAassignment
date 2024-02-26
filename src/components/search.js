import React, { useEffect, useState } from "react";
import { getSearchItemsItems } from "../request/imageRequest";
import { Flex, Pagination } from "antd";
import ImageCard from "./imageCard";
import { Input } from "antd";

const SearchItems = ({ type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [fetchedData, setFetchedData] = useState();
  const [loading, setloading] = useState(false);
  const [searchText, setSearchText] = useState("cheeseburgers");

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onShowSizeChange = (current, pageSize) => {
    setCurrentPage(current);
    setPageSize(pageSize);
  };

  useEffect(() => {
    setloading(true);
    getSearchItemsItems(
      { limit: pageSize, offset: (currentPage - 1) * pageSize,q:searchText },
      type
    )
      .then((res) => {
        setFetchedData(res);
      })
      .finally(() => {
        setloading(false);
      });
  }, [currentPage, pageSize,searchText]);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Flex justify="center" vertical align="center" gap="10px">
        <Input
          placeholder="input search text"
          style={{
            width: 304,
          }}
          allowClear
          onChange={onChange}
        />
        {loading ? (
          <>loading...</>
        ) : (
          <>
            <ImageCard items={fetchedData?.data} />
            <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              total={fetchedData?.pagination.total_count}
              current={currentPage}
              onChange={onPageChange}
            />
          </>
        )}
      </Flex>
    </>
  );
};

export default SearchItems;
