import { Flex } from "antd";
import React from "react";

const ImageCard = ({ items }) => {
  return (
    <Flex wrap="wrap" justify="center" gap={5} style={{ maxWidth: 1530 }}>
      {items?.map((item, key) => (
        <div
          key={key}
          style={{
            width: "300px",
            height: "300px",
            overflow:'hidden',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1,
            borderColor:'gray',
            borderStyle:'solid'
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={item.images.downsized.url}
          />
        </div>
      ))}
    </Flex>
  );
};

export default ImageCard;
