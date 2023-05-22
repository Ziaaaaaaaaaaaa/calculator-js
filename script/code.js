let naught = 0;
let operator = "";

//  document.querySelector('#DE') .addEventListener('click',()=>){
//      let 
//  }

// let result= document.querySelector('#screen-out');
// function display(value) {result.value
//     +=value;
// }
// function remover() {result.value
//     ='';}
//     function del()  {
//         let tempArray = result.value.split('');
//         tempArray.pop();
//         result.value = tempArray.join('');
//         ``
//     }
//     function add() {result.value +=value
//         ='+'; }
//         function minus() {result.value +=value
//             ='-';
//         }
//         function times() {result.value +=value
//             ='*'; }
//             function dev() {result.value +=value
//                 ='/'; }
// function calculate(){
//     result.value = eval(result.value)
// }


// // empty array
// let calculation = []
// // created variable
// let theCalculation
// function calculate(button){
//      const value = button.textContent
//     if(value == 'clear'){
//         calculation = []
//         screenDisplay.textContent = '0'
//     } else if ( value == '='){
//         screenDisplay.textContent = eval(theCalculation)
//     } else {calculation.push(value)
//         theCalculation = calculation.join('')
//         screenDisplay.textContent = theCalculation
//     }
//     }

let displayElement = document.querySelector('#display');

function del() {
    let tempArray = displayElement.value.split('')
    tempArray.pop();
    displayElement.value = tempArray.join('');
    
}

let result= document.querySelector('#screen-out');
function display(value) {result.value
    +=value;
}

function remover() {result.value
    ='';}

    function add() {result.value +=value
        ='+'; }
        function minus() {result.value +=value
            ='-';
        }
       
        function times() {result.value +=value
            ='*'; }
            function dev() {result.value +=value
                ='/'; }
// function calculate(){
//     result.value = eval(result.value)
// }

document.querySelector("#calculate").
addEventListener("click", ()=>{
    result.value = eval(result.value).toFixed(2);
})


