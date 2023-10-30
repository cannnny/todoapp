// TODO単体用のコンポーネント

import { List, Text, Flex, Button, IconButton } from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

// 親コンポーネントからtodo, toggleTodoListItemStatus, deleteTodoListItemをpropsとして受け取る
export const TodoItem = ({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  // toggleTodoListItemStatusを実行する関数を宣言
  const handleToggleTodoListItemStatus = () => {
    toggleTodoListItemStatus(todo.id, todo.done);
  };

  // deleteTodoListItemを実行する関数を宣言
  const handleDeleteTodoListItem = () => {
    deleteTodoListItem(todo.id);
  };

  const label = todo.done ? "未完了リストへ" : "完了リストへ";
  const setColorScheme = todo.done ? "pink" : "blue";

  return (
    <List
      borderWidth="1px"
      p="4"
      mt="4"
      bg="white"
      borderRadius="md"
      borderColor="gray.300"
    >
      <Text mb="6">{todo.content}</Text>
      <Flex align="center" justify="flex-end">
        <Button
          colorScheme={setColorScheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>
        <IconButton
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </List>
    // <li>
    //   {/* TODOの内容 */}
    //   {todo.content}
    //   <button onClick={handleToggleTodoListItemStatus}>
    //     {todo.done ? "未完了リストへ" : "完了リストへ"}
    //   </button>
    //   <button onClick={handleDeleteTodoListItem}>削除</button>
    // </li>
  );
};
