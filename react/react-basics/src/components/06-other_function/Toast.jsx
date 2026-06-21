// Toast: 画面右下に通知を表示するコンポーネント
// props:
//   message  … 表示するメッセージ
//   onClose  … ×ボタンを押したときに呼ぶ関数
const Toast = ({ message, onClose}) => {
  return (
    <div className="toast">
      {/* TODO: messageを表示する */}
      <p>{message}</p>
      {/* TODO: ×ボタンを設置し、クリックでonCloseを呼ぶ */}
      <button className="toast-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
}
export default Toast;
