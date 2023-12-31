import React, { useRef } from "react";

import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useTodo } from "../hooks/useTodo";

import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

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

  // filterで「TODOの状態が完了」の要素を持つ新しい配列を作成
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth={"3xl"}>
      <TodoTitle
        title="TODO進捗管理"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
      />
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoList
        title="未完了TODOリスト"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
      <TodoList
        title="完了TODOリスト"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </Container>
  );
}

export default App;
