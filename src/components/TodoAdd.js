// TODOを新規追加するコンポーネント

import { Textarea, Button } from "@chakra-ui/react";

// 親コンポーネントからinputEl,handleAddTodoListItemをpropsとして受け取る
export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem,
}) => {
  return (
    <>
      {/* useRefで作成したRefオブジェクトをref属性に指定し、DOMを参照*/}
      <Textarea
        placeholder={placeholder}
        bgcolor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      {/* ボタンをクリックするとhandleAddTodoListItem関数を実行*/}
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  );
};
