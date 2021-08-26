const payment = document.getElementById('payment');
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fift = document.getElementById('fift');
const tf = document.getElementById('tf');
const fifty = document.getElementById('fifty');
const custom = document.getElementById('custom');
const tipValue = document.getElementById('tipValue');
const customInp = document.getElementById('customInp');
const submit = document.getElementById('Submit');
const clos = document.getElementById('close');
const modall = document.getElementById('mo');
const people = document.getElementById('people');
const total = document.getElementById('total');
const reset = document.getElementById('reset');

//disable reset button

//Event Listeners
five.addEventListener('click', fiveP)
ten.addEventListener('click', tenP)
fift.addEventListener('click', fiftP)
tf.addEventListener('click', tfP)
fifty.addEventListener('click', fiftyP)
custom.addEventListener('click', displayModal)
clos.addEventListener('click', closeM)
submit.addEventListener('click', submitM)
reset.addEventListener('click', resetPage)


// method to calculate five %
function fiveP() {
    if (payment.value > 0 && people.value > 0) {
        let tip = ((5 / 100) * payment.value);
        let perP = (payment.value / people.value);
        let totall = (tip + perP).toFixed(2);
        five.style.color = "#00494D";
        five.style.backgroundColor = "#26C0AB";
        reset.style.backgroundColor = "#26C0AB"
        reset.style.color = "#00494D";
        total.innerHTML = "$ " + totall.toFixed(2);
        tipValue.innerHTML = "$ " + tip.toFixed(2);
    } else {
        alert("Input approprate values")
    }
}

// method to calculate ten %
function tenP() {
    if (payment.value > 0 && people.value > 0) {
        let tip = ((10 / 100) * payment.value);
        let perP = (payment.value / people.value);
        let totall = (tip + perP);
        ten.style.color = "#00494D";
        ten.style.backgroundColor = "#26C0AB";
        reset.style.backgroundColor = "#26C0AB"
        reset.style.color = "#00494D";
        total.innerHTML = "$ " + totall.toFixed(2);
        tipValue.innerHTML = "$ " + tip.toFixed(2);
    } else {
        alert("Input approprate values")
    }
}
// method to calculate ten %
function fiftP() {
    if (payment.value > 0 && people.value > 0) {
        let tip = ((15 / 100) * payment.value);
        let perP = (payment.value / people.value);
        let totall = (tip + perP);
        fift.style.color = "#00494D";
        fift.style.backgroundColor = "#26C0AB";
        reset.style.backgroundColor = "#26C0AB"
        reset.style.color = "#00494D";
        total.innerHTML = "$ " + totall.toFixed(2);
        tipValue.innerHTML = "$ " + tip.toFixed(2);
    } else {
        alert("Input approprate values")
    }
}
// method to calculate ten %
function tfP() {
    if (payment.value > 0 && people.value > 0) {
        let tip = ((25 / 100) * payment.value);
        let perP = (payment.value / people.value);
        let totall = (tip + perP);
        tf.style.color = "#00494D";
        tf.style.backgroundColor = "#26C0AB";
        reset.style.backgroundColor = "#26C0AB"
        reset.style.color = "#00494D";
        total.innerHTML = "$ " + totall.toFixed(2);
        tipValue.innerHTML = "$ " + tip.toFixed(2);
    } else {
        alert("Input approprate values")
    }
}
// method to calculate ten %
function fiftyP() {
    if (payment.value > 0 && people.value > 0) {
        let tip = ((50 / 100) * payment.value);
        let perP = (payment.value / people.value);
        let totall = (tip + perP);
        fifty.style.color = "#00494D";
        fifty.style.backgroundColor = "#26C0AB";
        reset.style.backgroundColor = "#26C0AB"
        reset.style.color = "#00494D";
        total.innerHTML = "$ " + totall.toFixed(2);
        tipValue.innerHTML = "$ " + tip.toFixed(2);

    } else {
        alert("Input approprate values");
    }
}
//cutom tip

function displayModal() {
    modall.style.display = 'block';
}

function closeM() {
    modall.style.display = 'none';
}

function submitM() {
    if (payment.value > 0 && customInp.value > 0 && people.value > 0) {
        let tip = ((customInp.value / 100) * payment.value);
        let perP = (payment.value / people.value);
        let totall = (tip + perP);
        custom.style.backgroundColor = "#F4FAFA";
        custom.style.color = "#757575";
        custom.style.border = "2px solid #26C0AB "
        reset.style.backgroundColor = "#26C0AB"
        reset.style.color = "#00494D";
        total.innerHTML = "$ " + totall.toFixed(2);
        tipValue.innerHTML = "$ " + tip.toFixed(2);
        modall.style.display = 'none';

    } else {
        modall.style.display = 'none';
        alert("Input approprate values");
    }

}

function resetPage() {
    location.reload();
}