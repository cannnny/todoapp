// コンポーネントなどをまとめる
import React, { useState, useEffect } from "react";

// モックサーバとの通信のためaxiosをimport
import axios from "axios";

// ローカルに準備したモックサーバのURL
const todoDataUrl = "http://localhost:3100/todos";

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
// 親コンポーネントからtodoをpropsとして受け取る
const TodoItem = ({ todo }) => {
  return (
    <li>
      {/* TODOの内容 */}
      {todo.content}
      <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button>削除</button>
    </li>
  );
};

// TodoListコンポーネント
// 親コンポーネントからtodoListをpropsとして受け取る
const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

function App() {
  // todoListは現在のTODOの状態、初期値に空配列をセット
  const [todoList, setTodoList] = useState([]);

  // useEffectでコンポーネントのマウント後に処理を実行
  // async、awaitにより非同期処理
  useEffect(() => {
    const fetchData = async () => {
      // getは外部から情報を取得
      // getの引数にURLを入れると、URLに対してGETリクエストを送信する
      // リクエスト後に戻ってくる値は全てresponseに保存
      const response = await axios.get(todoDataUrl);

      // 戻された値に対してuseStateを利用
      setTodoList(response.data);
    };
    fetchData();
  }, []);

  console.log("TODOリスト:", todoList);

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
      <textarea />
      <button>TODOを追加</button>
      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} />
      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
