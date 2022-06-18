'use strict'

const payment = document.getElementById('payment');
const custom = document.getElementById('custom');
const tipValue = document.getElementById('tipValue');
const people = document.getElementById('people');
const total = document.getElementById('total');
const reset = document.getElementById('reset');
const tip = document.querySelectorAll('.tip');


for(let i = 0; i < tip.length; i++){
    tip[i].addEventListener('click', function(){
        let x = Number(tip[i].getAttribute('data-value'));
        calcTotal(x);
    })
}

//Event to reset page after clicking the reset button
reset.addEventListener('click', () => location.reload());

//cutom tip listen to the enter key and return values
custom.addEventListener('keypress', (e) => {
    (e.target === 'Enter') 
    let x = Number(custom.value);
    calcTotal(x)    
})

//Method takes bill, tip percentage and number of people
// it return tip per person and total per person
function calcTotal(x) {
        let pay = Number(payment.value);
        let ppl = Number(people.value); 
        let tip = ((x / 100) * pay) / ppl;
        let perP = (pay / ppl);
        let totall = (tip + perP);
        custom.style.backgroundColor = "#F4FAFA";
        custom.style.color = "#757575";
        custom.style.border = "2px solid #26C0AB";
        reset.style.backgroundColor = "#26C0AB";
        reset.style.color = "#00494D";
        total.innerHTML = `$ ${totall.toFixed(2)}`;
        tipValue.innerHTML = `$ ${tip.toFixed(2)}`;

}
