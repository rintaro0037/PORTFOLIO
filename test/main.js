var ctx = document.getElementById('mychart-pie');
let Yes = document.getElementById('Yes');
let No = document.getElementById('No');
let pasword = document.getElementById('pas');
let textForm = document.getElementById('textForm');
let dummy = document.getElementById('dummy');
let myChart;

let url = new URL(window.location.href)
let params = url.searchParams
Deus = params.get('Deus')

//ページ読み込み時の処理
window.addEventListener("load", () => {
    // 表の表示
    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['ある', 'ない'],
            datasets: [{
                data: [`${localStorage.getItem('storage1')}`, `${localStorage.getItem('storage2')}`],
                backgroundColor: ['#f33', '#0cf',],
                weight: 100,
            }],
        },
    });
    Yes.disabled = false;
    No.disabled = false;
    if (Deus == 'exist') {
        dummy.disabled = false;
    };
});

// 値をcount upしてグラフを更新する処理
function countUp(storageKey, index) {
    let count = Number(localStorage.getItem(storageKey)) + 1

    // countをjsonの書き方に変換
    jsonCount = JSON.stringify(count);
    //Local Storageに値を保存
    localStorage.setItem(storageKey, jsonCount);
    // myChartのデータを書き換え
    myChart.data.datasets[0].data[index] = `${localStorage.getItem(storageKey)}`;
    // myChartを更新
    myChart.update();

    // 管理者モード(ボタンが押し放題)
    if (Deus == 'exist') {
        Yes.disabled = false;
        No.disabled = false;
    } else {
        Yes.disabled = true;
        No.disabled = true;
    }
    dummy.disabled = false;
};

// Yesボタン
Yes.addEventListener('click', () => {
    // countUp()で定義した変数に値を代入して実行
    countUp('storage1', 0);
});

// Noボタン
No.addEventListener('click', () => {
    countUp('storage2', 1);
});

// リセット処理
function reset() {
    localStorage.clear();
    myChart.data.datasets[0].data[0] = `${localStorage.getItem('storage1')}`;
    myChart.data.datasets[0].data[1] = `${localStorage.getItem('storage2')}`;
    myChart.update();
    Yes.disabled = false;
    No.disabled = false;
    dummy.disabled = true;
}

// ダミーボタン
dummy.addEventListener("click", () => {
    let dummyBox = confirm("リセットしますか？");
    if (Deus == 'exist' && dummyBox == true) {
        reset();
    } else if (dummyBox == true) {
        alert("させませ～ん笑");
    }
})

// リセット
textForm.addEventListener("submit", (event) => {
    if (pasword.value == 'pas') {
        reset();
    }
    // 管理者モードへ移行
    else if (pasword.value == 'god') {
        location.href = `./Chart_test.html?Deus=exist`;
    }
    // 通常の処理を防ぐ　今回はsubmitの処理
    event.preventDefault();
});