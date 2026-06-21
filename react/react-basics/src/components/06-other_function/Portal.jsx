import { createPortal } from "react-dom";

// Portal: 子要素をbody直下に描画するコンポーネント
// props: children（表示したいコンポーネント）
const Portal = ({ children }) => {
  // TODO: createPortalを使って、childrenをdocument.bodyに描画する
  // ヒント: createPortal(描画したいJSX, 描画先のDOM要素)
  const target = document.body;
  return createPortal(children, target);
}
export default Portal;