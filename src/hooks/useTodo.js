// TODOの状態を管理するカスタムフック
import { useState, useEffect } from "react";

// 一意なidを生成するulidをimport
import { ulid } from "ulid";

// todos.jsで宣言した関数をtodoDataオブジェクトとしてまとめてimport
import * as todoData from "../apis/todos";

export const useTodo = () => {
  // todoListは現在のTODOの状態、初期値に空配列をセット
  const [todoList, setTodoList] = useState([]);

  // useEffectでコンポーネントのマウント前後に処理を実行
  // モックサーバからTODOデータを取得するgetAllTodosDataを実行
  useEffect(() => {
    todoData.getAllTodosData.then((todo) => {
      // todoListの状態を更新
      setTodoList(todo);
    });
  }, []);

  // todoListItemのdoneを反転させ、更新する関数を宣言
  const toggleTodoListItemStatus = (item, id) => {
    // findメソッドでdoneを反転させたいtodoListItemのidを見つけ、条件に一致するtodoItemを返す
    const todoItem = todoList.find((item) => item.id === id);

    // 条件に一致したtodoItemのdoneを反転させる
    const newTodoItem = { ...todoItem, done: !done };

    // 指定されたidのTODOをupdateTodoDataで更新したら、todoListの状態も更新
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      // 新しい配列を作成
      const newTodoList = todoList.map((updatedTodo) => {
        // idが異なる場合、todoListから取り出したitemをそのまま返す
        // idが同じ場合、doneを反転させたupdatedTodoを返す
        return item.id !== updatedTodo.id ? item : updatedTodo;
      });

      // todoListの現在の状態を更新
      setTodoList(newTodoList);
    });
  };

  // 新規TODOを追加する関数を宣言
  const addTodoListItem = (todoContent) => {
    const newTodoItem = {
      content: todoContent,
      id: ulid(),
      done: false,
    };

    // addTodoListを利用してTODOを更新したら、todoListの状態も更新
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };

  // TODOを削除する関数を宣言
  const deleteTodoListItem = () => {
    // deleteTodoListを利用して指定したidのTODOを削除したら、todoListの状態も更新
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        // 削除したTODOとidが一致しないTODOをフィルタリングして新しい配列を返す
        (item) => item.id !== deleteListItemId
      );

      // todoListの状態を、指定されたidのTODOが削除された状態に更新
      setTodoList(newTodoList);
    });
  };

  // 作成した関数を返す
  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
