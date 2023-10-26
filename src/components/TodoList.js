// TODOをリスト化するコンポーネント

import { List } from "@chakra-ui/react";

import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";

// 親コンポーネントからtodoListをpropsとして受け取る
export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
  fontSize,
}) => {
  return (
    <>
      {/* todoListの配列の中身が空の場合、見出しとTODOリストの両方を表示させない */}
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} mt="12" fontSize={fontSize} />
          <List w="full">
            {todoList.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  toggleTodoListItemStatus={toggleTodoListItemStatus}
                  deleteTodoListItem={deleteTodoListItem}
                />
              );
            })}
          </List>
        </>
      )}
    </>
  );
};
