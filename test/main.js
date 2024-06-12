var ctx = document.getElementById('mychart-pie');
let ARU = document.getElementById('ARU');
let NAI = document.getElementById('NAI');
let pasword = document.getElementById('pas');
let reset = document.getElementById('reset');
let myChart;

//ページ読み込み時の処理
window.addEventListener("load", () => {
    // Local Storageから値の取り出し
    var count1 = localStorage.getItem('storage1');
    var count2 = localStorage.getItem('storage2');
    // jsonの値をjsの値に変換
    aruCount = JSON.parse(count1)
    naiCount = JSON.parse(count2)

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

    ARU.disabled = false
    NAI.disabled = false
});

// 
function countUp(storageKey, index) {
    count = Number(localStorage.getItem(storageKey)) + 1

    // aruCountをjsonの書き方に変換
    count1 = JSON.stringify(count);
    //Local Storageに値を保存
    localStorage.setItem(storageKey, count1);
    localStorage.setItem('btnClick', true);

    myChart.data.datasets[0].data[index] = `${localStorage.getItem(storageKey)}`;
    myChart.update();

    ARU.disabled = true
    NAI.disabled = true
}

// Yesボタン
ARU.addEventListener('click', () => {
    countUp('storage1', 0)
});

// Noボタン
NAI.addEventListener('click', () => {
    countUp('storage2', 1)
});

// リセット
reset.addEventListener("submit", (event) => {
    if (pasword.value == 'pas') {
        localStorage.clear();
        myChart.data.datasets[0].data[0] = `${localStorage.getItem('storage1')}`;
        myChart.data.datasets[0].data[1] = `${localStorage.getItem('storage2')}`;
        myChart.update();
        ARU.disabled = false
        NAI.disabled = false
    }
    // 通常の処理を防ぐ　今回はsubmitの処理
    event.preventDefault();
})