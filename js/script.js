let disPlayresult = document.querySelector('.disPlayresult');
let ac = document.querySelector('.ac');
let backspace = document.querySelector('.backspace');
let decimal = document.querySelector('.decimal');

let num_button = document.querySelectorAll('.num_button');
let operatorBtn = document.querySelectorAll('.operatorBtn');
let pendingVal; //存運算按鈕前數字
let evalStrAry = []; //運算區變數
let displayVal = '0'; //預設顯示數字


let updateDisplayVal = (e) =>{
    let btnText = e.target.innerText;
    if(displayVal === '0'){
        displayVal ='';
    }
    displayVal += btnText;
    disPlayresult.innerText = displayVal;

}

for(let i = 0; i<num_button.length; i++){
    num_button[i].addEventListener('click',updateDisplayVal)
}

ac.addEventListener('click', ()=>{
    pendingVal = undefined;
    evalStrAry = [];
    displayVal = '0';
    disPlayresult.innerText = displayVal;
})


backspace.addEventListener('click', ()=>{
    let displayVal_length = displayVal.length;
    displayVal = displayVal.slice(0, displayVal_length-1);
    if(displayVal === ''){
        displayVal = '0'
    }
    disPlayresult.innerText = displayVal;
} )

decimal.addEventListener('click', ()=> {
    if(!displayVal.includes('.')){
        displayVal += '.';
    }
    disPlayresult.innerText = displayVal;
})

let exrcuteOperator = (e) => {
    let operator = e.target.innerText;
    switch(operator) {
        case '+' :
            pendingVal = displayVal;
            displayVal ='0';
            disPlayresult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('+');
            break;

        case '-' :
            pendingVal = displayVal;
            displayVal ='0';
            disPlayresult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('-');
            break;

        case '×' :
            pendingVal = displayVal;
            displayVal ='0';
            disPlayresult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('*');
            break;

        case '÷' :
            pendingVal = displayVal;
            displayVal ='0';
            disPlayresult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('/');
            break;

        case '=' :
            evalStrAry.push(displayVal);
            let evaluation = eval(evalStrAry.join('')) //元素變字串
            disPlayresult.innerText = evaluation;
            displayVal = '0'
            evalStrAry = [];
            break;

        default:
            break;
    }
}

for(let i = 0; i<operatorBtn.length; i++){
    operatorBtn[i].addEventListener('click',exrcuteOperator)
}

// console.log(btnText)

