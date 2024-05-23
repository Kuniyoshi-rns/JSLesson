'use strict';

function calc(){
    let jap = parseInt(document.getElementById('jap').value);
    let math = parseInt(document.getElementById('math').value);
    let eng = parseInt(document.getElementById('eng').value);

    let calcSum = jap+math+eng;
    let calcAve = calcSum/3;

    sum.textContent = '合計：'+calcSum;
    ave.textContent = '平均：'+calcAve;
}

function clear(){
    document.getElementById('jap').value = '0';
    document.getElementById('math').value = '0';
    document.getElementById('eng').value = '0';

    sum.textContent = '合計：';
    ave.textContent = '平均：';

}

let sum = document.getElementById('sum');
let ave = document.getElementById('ave');

document.getElementById('calcBtn').addEventListener('click',() =>calc());
document.getElementById('clrBtn').addEventListener('click',() => clear());