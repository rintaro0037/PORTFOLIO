var ctx = document.getElementById('mychart-pie');
let Yes = document.getElementById('Yes');
let No = document.getElementById('No');
let resetbtn = document.getElementById('reset');
let myChart;

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
}

// リセットボタン
resetbtn.addEventListener("click", () => {
    reset();
})