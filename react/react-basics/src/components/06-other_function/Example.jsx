import { useState } from "react";
import Portal from "./Portal";
import Toast from "./Toast";
import "./toast.css";

const Example = () => {
  // TODO: Toastの表示/非表示を管理するstateを定義する
  const [isVisible, setIsVisible] = useState(false);

  // TODO: Toastを表示する関数を実装する
  function handleShow() {
    setIsVisible(true)
  }

  // TODO: Toastを閉じる関数を実装する
  function handleClose() {
    setIsVisible(false)
  }

  return (
    <div className="example">
      <h1>createPortal 練習</h1>
      <p>ボタンを押してToastを表示してみよう</p>

      {/* TODO: ボタンにクリックイベントを設定する */}
      <button className="show-button" onClick={handleShow}>
        Toastを表示する
      </button>

      {/* TODO: isVisibleがtrueのときだけPortalを表示する */}
      {isVisible && (
        <Portal>
          <Toast message="It's SHOW TIME !!" onClose={handleClose} />
        </Portal>
      )}
    </div>
  );
}
export default Example;
