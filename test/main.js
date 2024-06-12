var ctx = document.getElementById('mychart-pie');
let ARU = document.getElementById('ARU');
let NAI = document.getElementById('NAI');
let pasword = document.getElementById('pas');
let reset = document.getElementById('reset');



// window.addEventListener("load", () => {
    
// });


//ページ読み込み時の処理
window.addEventListener("load", () => {
    // Local Storageから値の取り出し
    var count1 = localStorage.getItem('storage1');
    var count2 = localStorage.getItem('storage2');
    // jsonの値をjsの値に変換
    aruCount = JSON.parse(count1)
    naiCount = JSON.parse(count2)

    if (`${localStorage.getItem('btnClick')}` == true) {
        // buttonを使用不可に
        document.getElementById('ARU').type = 'hidden';
        document.getElementById('NAI').type = 'hidden';
    }
});

// Yesボタン
ARU.addEventListener('click', () => {
    aruCount++;
    // aruCountをjsonの書き方に変換
    count1 = JSON.stringify(aruCount);
    //Local Storageに値を保存
    localStorage.setItem('storage1', count1);
    localStorage.setItem('btnClick', true);
    location.href = './Chart_test.html'
});

// Noボタン
NAI.addEventListener('click', () => {
    naiCount++;
    // naiCountをjsonの書き方に変換
    count2 = JSON.stringify(naiCount);
    //Local Storageに値を保存
    localStorage.setItem('storage2', count2);
    localStorage.setItem('btnClick', true);
    location.href = './Chart_test.html'
});


// 表の表示
var myChart = new Chart(ctx, {
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


pasword.addEventListener("change", () => {
    if (pasword.value == 'pas') {
        reset.disabled = false
    }
    else {
        reset.disabled = true
    }
})

reset.addEventListener("click", () => {
    localStorage.clear();
    location.href = './Chart_test.html'
})

