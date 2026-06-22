import { useRef } from "react";
import Modal from "./Modal";
import "./modal.css";

// 課題: 親コンポーネントからref経由でModalを開閉する
// useRef → forwardRef → useImperativeHandle の流れを意識しよう

const ModalExample = () => {
  // TODO: Modalを操作するためのrefを定義する
  const modalRef = useRef();

  // TODO: ref経由でモーダルを開く処理を実装する
  // ヒント: modalRef.current.???()
  function handleOpen() {
    modalRef.current.open();
  }

  return (
    <div className="modal-example">
      <h1>Modal 練習</h1>
      <p>ボタンを押してモーダルを開いてみよう</p>

      {/* TODO: クリックでhandleOpenを呼ぶ */}
      <button className="open-button" onClick={handleOpen}>モーダルを開く</button>

      {/* TODO: refをModalに渡す（このままでは動かない。なぜ？） */}
      <Modal ref={modalRef} title="確認ダイアログ" />
    </div>
  );
}
export default ModalExample;
