// モックサーバとの通信用ファイル
// モックサーバとの通信のためaxiosをimport
import axios from "axios";

// ローカルに準備したモックサーバのURL
const todoDataUrl = "http://localhost:3100/todos";

// 取得 get(URL, [params:queries])
// サーバ上のすべてのTODOを取得する関数を宣言し、他ファイルでも利用できるようエクスポート
export const getAllTodosData = async () => {
  // 戻される値はすべてresponseに保存
  const response = await axios.get(todoDataUrl);

  // 通信後、レスポンスデータを返す
  return response.data;
};

// 追加 post(URL,newData)
// TODOを追加する関数を宣言し、他ファイルでも利用できるようエクスポート
export const addTodoData = async (todo) => {
  // 送信したい値を第二引数に指定してPOST送信
  // サーバに転送することで新規データを追加
  const response = await axios.post(todoDataUrl, todo);

  // 通信後、レスポンスデータを返す
  return response.data;
};

// 削除 delete(URL/id)
// idが一致したTODOを削除する関数を宣言し、他ファイルでも利用できるようエクスポート
export const deleteTodoData = async (id) => {
  await axios.delete(`${todoDataUrl}/${id}`);

  // 通信後、削除したTODOのidを返す
  return id;
};

// 更新 put(URL/id, modifyData)
// idが一致したTODOを更新する関数を宣言し、他ファイルでも利用できるようエクスポート
export const updateTodoData = async (id, todo) => {
  // 第二引数に更新したいデータを渡す
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);

  // 通信後、レスポンスデータを返す
  return response.data;
};
