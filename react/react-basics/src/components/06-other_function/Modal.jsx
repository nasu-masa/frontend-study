import { useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

// TODO: forwardRefでModalを包む
// なぜforwardRefが必要か？→ 親からrefを受け取るため
// 書き方: const Modal = forwardRef(function Modal({ title }, ref) { ... })
const Modal = forwardRef(({ title }, ref) => {
  // TODO: モーダルの開閉状態を管理するstateを定義する
  const [isOpen, setIsOpen] = useState(false);

  // TODO: useImperativeHandleで親に公開するAPIを定義する
  // open() と close() の2つを公開する
  useImperativeHandle(ref, () => ({
    // TODO: open を実装する
    open() {
      setIsOpen(true);
    },
    // TODO: close を実装する
    close() {
      setIsOpen(false);
    },
  }));

  // TODO: isOpenがfalseのときはnullを返して描画をスキップする
  if (!isOpen) {
    return null;
  }

  // TODO: createPortalでdocument.bodyに描画する
  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          {/* TODO: titleを表示する */}
          <h2>{title }</h2>
          {/* TODO: ×ボタンでモーダルを閉じる */}
          <button className="modal-close" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="modal-body">
          <p>モーダルの中身をここに書く</p>
        </div>
      </div>
    </div>,
    document.body
  );
});

export default Modal;
