// TODO単体用のコンポーネント
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
  return (
    <li>
      {/* TODOの内容 */}
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};
