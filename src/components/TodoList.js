// TODOをリスト化するコンポーネント
import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";

// 親コンポーネントからtodoListをpropsとして受け取る
export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
}) => {
  return (
    <>
      {/* todoListの配列の中身が空の場合、見出しとTODOリストの両方を表示させない */}
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
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
          </ul>
        </>
      )}
    </>
  );
};
