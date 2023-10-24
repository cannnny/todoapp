// コンポーネントなどをまとめる
import React, { useState, useEffect } from "react";

// モックサーバとの通信のためaxiosをimport
import axios from "axios";

// ローカルに準備したモックサーバのURL
const todoDataUrl = "http://localhost:3100/todos";

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
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>TODOを追加</button>
      <h2>未完了TODOリスト</h2>
      <ul>
        {inCompletedList.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.content}
              <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
              <button>削除</button>
            </li>
          );
        })}
      </ul>
      <h2>完了TODOリスト</h2>
      <ul>
        {completedList.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.content}
              <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
              <button>削除</button>
            </li>
          );
        })}
      </ul>
      {/* <h2>TODOリスト</h2>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.content}({todo.done ? "完了" : "未完了"})
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default App;
