import React, { useEffect, useState } from "react";
import { getTrendingItems } from "../request/imageRequest";
import { Flex, Pagination } from "antd";
import ImageCard from "./imageCard";

const Trending = ({ type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [fetchedData, setFetchedData] = useState();
  const [loading, setloading] = useState(false);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const onShowSizeChange = (current, pageSize) => {
    setCurrentPage(current);
    setPageSize(pageSize);
  };

  useEffect(() => {
    setloading(true);
    getTrendingItems(
      { limit: pageSize, offset: (currentPage - 1) * pageSize },
      type
    )
      .then((res) => {
        setFetchedData(res);
      })
      .finally(() => {
        setloading(false);
      });
  }, [currentPage, pageSize]);

  return (
    <>
      <Flex justify="center" vertical align="center" gap="10px">
        {loading ? (
          <>loading....</>
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

export default Trending;
