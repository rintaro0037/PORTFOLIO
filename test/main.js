var ctx = document.getElementById('mychart-pie');
let ARU = document.getElementById('ARU');
let NAI = document.getElementById('NAI');


window.addEventListener("load", () => {
    document.getElementById('ARU').disabled = false;
    document.getElementById('NAI').disabled = false;

}, { once: true });


//ページ読み込み時の処理
window.addEventListener("load", () => {
    // Local Storageから値の取り出し
    var jsonCount1 = localStorage.getItem('storage1');
    var jsonCount2 = localStorage.getItem('storage2');

    aru = JSON.parse(jsonCount1) //【※2】
    nai = JSON.parse(jsonCount2) //【※2】


});

// Yesボタン
ARU.addEventListener('click', () => {
    document.getElementById('ARU').disabled = true;
    document.getElementById('NAI').disabled = true;

    aru++;
    //Local Storageに値を保存
    // countの値をJSON形式に変換
    jsonCount1 = JSON.stringify(aru); //【※3】
    // Local Storageに保存
    localStorage.setItem('storage1', jsonCount1); //【※4】
    // URL変更
    altURL = `https://rintaro0037.github.io/PORTFOLIO/test/index.html?aru=${aru}&nai=${nai}`;
    location.href = altURL


});

// Noボタン
NAI.addEventListener('click', () => {
    document.getElementById('ARU').disabled = true;
    document.getElementById('NAI').disabled = true;
    
    nai++;
    //Local Storageに値を保存
    jsonCount2 = JSON.stringify(nai); //【※3】
    // Local Storageに保存
    localStorage.setItem('storage2', jsonCount2); //【※4】
    // URL変更
    altURL = `https://rintaro0037.github.io/PORTFOLIO/test/index.html?aru=${aru}&nai=${nai}`;
    location.href = altURL


});

// URLから情報をパクる
let url = new URL(window.location.href)
let params = url.searchParams
let aru = params.get('aru')
let nai = params.get('nai')


var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['ある', 'ない'],
        datasets: [{
            data: [`${aru}`, `${nai}`],
            backgroundColor: ['#f33', '#0cf',],
            weight: 100,
        }],
    },
});





