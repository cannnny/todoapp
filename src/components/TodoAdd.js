// TODOを新規追加するコンポーネント
// 親コンポーネントからinputEl,handleAddTodoListItemをpropsとして受け取る
export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }) => {
  return (
    <>
      {/* useRefで作成したRefオブジェクトをref属性に指定し、DOMを参照*/}
      <textarea ref={inputEl} />
      {/* ボタンをクリックするとhandleAddTodoListItem関数を実行*/}
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};
