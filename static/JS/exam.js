/**
 * if文
 */

/*
 * 変数「score」の値が
 * 「81~100」の時はコンソールに「大変よくできました」を出力、
 * 「51~80」の時はコンソールに「よくできました」を出力、
 * 「0~50」の時はコンソールに「もう少し頑張りましょう」を出力するコードを書いてみましょう！
 */

const score = 75;

if (score >= 81 && score <= 100) {
    console.log("大変よくできました");
} else if (score >= 51 && score <= 80) {
    console.log("よくできました");
} else if (score >= 0 && score <= 50) {
    console.log("もう少し頑張りましょう");
}

/**
 * switch文
 */

/**
 * 問題
 * 変数「season」に季節を表す文字列（例: "春", "夏", "秋", "冬"）が格納されています。
 * 季節に応じて以下のようなメッセージをコンソールに出力するコードを書いてみましょう！
 * "春"の場合は、「花見に行きましょう！」と出力、
 * "夏"の場合は、「プールに行きましょう！」と出力、
 * "秋"の場合は、「散歩に行きましょう！」と出力、
 * "冬"の場合は、「スキーに行きましょう！」と出力、
 * 上記のいずれにも該当しない場合は、「正しい季節を入力してください。」と出力する。
 */

const season = "春";

switch (season) {
    case "春":
        console.log("花見に行きましょう！");
        break;
    case "夏":
        console.log("プールに行きましょう！");
        break;
    case "秋":
        console.log("散歩に行きましょう！");
        break;
    case "冬":
        console.log("スキーに行きましょう！");
        break;
    default:
        console.log("正しい季節を入力してください。");
        break;
}

/**
 * for文
 */

/**
 * 1から50までの数字の中から、偶数のみをコンソールに出力してください。
 * （for文とif文を使って解いてみましょう）
 */
for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}


/**
 * while文
 */

/**
 * 10から1までの数字を逆順にコンソールに出力してください。
 */

// この下にコードを書いてください
let num = 10;

while (num >= 1) {
    console.log(num);
    num--;
}


/**
 * アロー関数
 */

/**
 * 問題１
 * 引数として受け取った数値を2倍にして返す関数をアロー関数で書いてみましょう。
 * その後、「5」を引数で渡して関数を実行してみてください。
 */
const doubleNumber = (num) => num * 2;

doubleNumber(5);


/**
 * 問題2
 * 引数として受け取った文字列を逆順にして返す関数をアロー関数で書いてみましょう。
 * その後、「今日はいい天気」を引数で渡して関数を実行してみてください。
 */
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

reverseString('今日はいい天気');


/**
 * addEventListenerを使って処理を書いてみよう
 */

/**
 * 問題１
 * 下のボタンをクリックすると、コンソールにメッセージを表示するプログラムを作成してください。
 */
const clickButton = () => {
    const button1 = document.querySelector("#triggerButton1");
    if (button1 === null) return;

    button1.addEventListener("click", function() {
        console.log("Button clicked!");
    });
}

clickButton();


/**
 * 問題2
 * マウスが要素の上に乗った時に、要素の背景色を変えるプログラムを作成してください。
 * また、マウスが要素から離れた時には元の背景色に戻るようにしてください。
 */
const changeColor = () => {
    const element = document.querySelector("#triggerButton2");
    if(element === null) return;

    element.addEventListener("mouseenter", function() {
        element.classList.add('js-change');
    });

    element.addEventListener("mouseleave", function() {
        element.classList.remove('js-change');
    });
};

changeColor();