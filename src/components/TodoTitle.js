// タイトルコンポーネント

import React from "react";

import { Heading } from "@chakra-ui/react";

// 見出しタグがh1,h2の場合の条件分岐を作成
// 親コンポーネントからtitle,asをpropsとして受け取る
export const TodoTitle = ({ title, as, fontSize, mt }) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
};
