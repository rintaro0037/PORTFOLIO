var ctx = document.getElementById('mychart-pie');
var output = document.getElementById('output');
let ARU = document.getElementById('ARU');

// URLから情報をパクる
let url = new URL(window.location.href)
let params = url.searchParams
let aru = params.get('aru')

// const ARU = 1
const NAI = 2

let Ynum = 0
let Nnum = 0

//ページ読み込み時の処理
window.addEventListener("load",()=>{
    //Local Storageの値を読み込み
     var jsonCount = localStorage.getItem('storage'); //【※1】
     aru = JSON.parse(jsonCount) //【※2】
 
 });

 ARU.addEventListener('click', ()=> {
    aru++;
   //Local Storageに値を保存
    jsonCount = JSON.stringify(aru); //【※3】
    localStorage.setItem('storage',jsonCount); //【※4】
    
    console.log(jsonCount)
});


// function answer(ans) {
//     switch (ans) {
//         case ARU:
//             Ynum++
//             console.log(Ynum)
//             break;

//         case NAI:
//             Nnum++
//             console.log(Nnum)
//             break;
//     }
//     }

    let N = Nnum

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['ある', 'ない'],
        datasets: [{
            data: [`${aru}`, `${N}`],
            backgroundColor: ['#f88', '#484',],
            weight: 100,
        }],
    },
});





