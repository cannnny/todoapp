import React, { useRef } from "react";

import { useTodo } from "../hooks/useTodo";

// TodoTitleコンポーネント
// 見出しタグがh1,h2の場合の条件分岐を作成
// 親コンポーネントからtitle,asをpropsとして受け取る
const TodoTitle = ({ title, as }) => {
  if (as === "h1") {
    return <h1>{title}</h1>;
  } else if (as === "h2") {
    return <h2>{title}</h2>;
  } else {
    return <p>{title}</p>;
  }
};

// TodoItemコンポーネント
// 親コンポーネントからtodo, toggleTodoListItemStatus, deleteTodoListItemをpropsとして受け取る
const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
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

// TodoListコンポーネント
// 親コンポーネントからtodoListをpropsとして受け取る
const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  return (
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
  );
};

// TodoAddコンポーネント
// 親コンポーネントからinputEl,handleAddTodoListItemをpropsとして受け取る
const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      {/* useRefで作成したRefオブジェクトをref属性に指定し、DOMを参照*/}
      <textarea ref={inputEl} />
      {/* ボタンをクリックするとhandleAddTodoListItem関数を実行*/}
      <button onClick={handleAddTodoListItem}>TODOを追加</button>
    </>
  );
};

function App() {
  // カスタムフックで作成したtodoList,addTodoListItem,toggleTodoListItemStatus,deleteTodoListItemを利用
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  // useRefでrefオブジェクトを作成(TODO入力フォームで利用)
  const inputEl = useRef(null);

  // TODO入力フォームで入力された文字列を新しいTODOに登録するための関数を宣言
  const handleAddTodoListItem = () => {
    // 何も入力されていない場合にクリックしても何も返さない
    if (inputEl.current.value === "") return;

    // テキストエリアに入力された文字列を新規TODOとして取得
    // 追加したらテキストエリアを空にする
    // 新規TODOを追加するaddTodoListItem関数をボタンクリックで実行
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  // filterで「TODOの状態が未完了」の要素を持つ新しい配列を作成
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log("未完了TODOリスト:", inCompletedList);

  // filterで「TODOの状態が完了」の要素を持つ新しい配列を作成
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  console.log("完了TODOリスト:", completedList);

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  );
}

export default App;
