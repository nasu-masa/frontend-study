import "./EventTypes.css";
const EventTypes = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>

      {/* 問題① */}
      <div>
        <button
          onClick={() => console.log("ダブルクリックされました")}
          // TODO: ボタンをダブルクリックしたら
          // 「ダブルクリックされました」と表示する
        >
          ダブルクリックしてね
        </button>
      </div>

      {/* 問題② */}
      <div>
        <label>
          名前：
          <input
            type="text"
            onFocus={() => console.log("入力開始")}
            // TODO: 入力欄にフォーカスしたら
            // 「入力開始」と表示する
          />
        </label>
      </div>

      {/* 問題③ */}
      <div>
        <label>
          メールアドレス：
          <input
            type="email"
            onBlur={() => console.log("入力終了")}
            // TODO: 入力欄からフォーカスが外れたら
            // 「入力終了」と表示する
          />
        </label>
      </div>

      {/* 問題④ */}
      <div>
        <label>
          好きな食べ物：
          <input
            type="text"
            onChange={(e) => console.log(e.target.value)}
            // TODO: 入力された値をコンソールに表示する
          />
        </label>
      </div>

      {/* 問題⑤ */}
      <div
        className="hover-box"
        onMouseEnter={() => console.log("いらっしゃいませ")}
        onMouseLeave={() => console.log("また来てね！")}
        // TODO: マウスが入ったら
        // 「いらっしゃいませ！」と表示する

        // TODO: マウスが出たら
        // 「また来てね！」と表示する
      >
        マウスを乗せてみよう
      </div>
    </div>
  );
};

export default EventTypes;
