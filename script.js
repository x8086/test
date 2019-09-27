var number, exNumber, vndOrUSD;
vndOrUSD = 0;
number = '';


document.getElementById('vnd').style = 'text-align: right;background-color: powderblue;';

document.querySelector('.btn7').addEventListener('click', function () {
    input('7');
});

document.querySelector('.btn4').addEventListener('click', function () {
    input('4');
});

document.querySelector('.btn1').addEventListener('click', function () {
    input('1');
});

document.querySelector('.btnDot').addEventListener('click', function () {
    input('.');
});

document.querySelector('.btn8').addEventListener('click', function () {
    input('8');
});

document.querySelector('.btn5').addEventListener('click', function () {
    input('5');
});


document.querySelector('.btn2').addEventListener('click', function () {
    input('2');
});


document.querySelector('.btn0').addEventListener('click', function () {
    input('0');
});


document.querySelector('.btn9').addEventListener('click', function () {
    input('9');
});


document.querySelector('.btn6').addEventListener('click', function () {
    input('6');
});


document.querySelector('.btn3').addEventListener('click', function () {
    input('3');
});

document.querySelector('.btnC').addEventListener('click', function () {
    number = '';
    exNumber = 0;
    document.getElementById('vnd').value = number;
    document.getElementById('usd').value = '';
});

document.querySelector('.btnK').addEventListener('click', function () {
    toggleTens(this);
});

document.querySelector('.btnTr').addEventListener('click', function () {
    toggleTens(this);
});

document.querySelector('.btnTy').addEventListener('click', function () {
    toggleTens(this);
});

document.querySelector('.btnH').addEventListener('click', function () {
    toggleTens(this);
});

function vndFocus() {
    vndOrUSD = 0;
    number = '';
    exNumber = 0;
    document.getElementById('vnd').value = number;
    document.getElementById('usd').value = '';
    document.getElementById('vnd').style = 'text-align: right;background-color: powderblue;';
    document.getElementById('usd').style = 'text-align: right;background-color: none;';
    document.getElementById('mm').style = 'text-align: right;background-color: none;';
    document.getElementById('ft').style = 'text-align: right;background-color: none;';

}

function mmFocus() {
    vndOrUSD = 0;
    number = '';
    exNumber = 0;
    document.getElementById('vnd').value = number;
    document.getElementById('usd').value = '';
    document.getElementById('mm').style = 'text-align: right;background-color: powderblue;';
    document.getElementById('ft').style = 'text-align: right;background-color: none;';
    document.getElementById('usd').style = 'text-align: right;background-color: none;';
    document.getElementById('vnd').style = 'text-align: right;background-color: none;';
    

}

function usdFocus() {
    vndOrUSD = 1;
    number = '';
    exNumber = 0;
    document.getElementById('vnd').value = number;
    document.getElementById('usd').value = '';
    document.getElementById('usd').style = 'text-align: right;background-color: powderblue;';
    document.getElementById('vnd').style = 'text-align: right;background-color: none;';
    document.getElementById('mm').style = 'text-align: right;background-color: none;';
    document.getElementById('ft').style = 'text-align: right;background-color: none;';
}

function ftFocus() {
    vndOrUSD = 1;
    number = '';
    exNumber = 0;
    document.getElementById('vnd').value = number;
    document.getElementById('usd').value = '';
    document.getElementById('ft').style = 'text-align: right;background-color: powderblue;';
    document.getElementById('usd').style = 'text-align: right;background-color: none;';
    document.getElementById('mm').style = 'text-align: right;background-color: none;';
    document.getElementById('vnd').style = 'text-align: right;background-color: none;';
}


function input(num) {
    if (document.querySelector("#height").checked != true) {
        number = number + num;
        var roundExNumber;
        //console.log('current number is ' + number);
        if (vndOrUSD == 0) {
            if (document.getElementById('thousand').checked) {

                exNumber = number / 23;
                roundExNumber = Math.round(exNumber * 100) / 100;
            } else if (document.getElementById('million').checked) {
                document.getElementById('million').checked.toggle;
                exNumber = number / .023;
                roundExNumber = Math.round(exNumber * 100) / 100;
            } else if (document.getElementById('billion').checked) {

                exNumber = number / .000023;
                roundExNumber = Math.round(exNumber * 100) / 100;
            } else {
                exNumber = number / 23000;
                roundExNumber = Math.round(exNumber * 100) / 100;
            }

            //console.log(exNumber);
            document.getElementById('vnd').value = number;
            document.getElementById('usd').value = roundExNumber.toLocaleString();
        } else {
            var usdToVND = number * 23000;

            document.getElementById('usd').value = number;
            document.getElementById('vnd').value = usdToVND.toLocaleString();

        }
    }
}
//lets the buttons trigger a toggle on the radio buttons
function toggleTens(event) {
    if (event.innerHTML === "K") {
        //checks one of the radio buttons
        document.getElementById('thousand').checked = true;
        //adds a highlight to the button that was pressed so user knows which one is currently toggled
        document.querySelector(".btnK").classList.add("highlight");
        if (document.querySelector(".btnTr").classList.contains("highlight")) {
            document.querySelector(".btnTr").classList.remove("highlight");
        } else if (document.querySelector(".btnTy").classList.contains("highlight")) {
            document.querySelector(".btnTy").classList.remove("highlight");

        } else if (document.querySelector(".btnH").classList.contains("highlight")) {
            document.querySelector(".btnH").classList.remove("highlight");
        }

    } else if (event.innerHTML === "Tr") {
        document.getElementById('million').checked = true;
        document.querySelector(".btnTr").classList.add("highlight");
        if (document.querySelector(".btnK").classList.contains("highlight")) {
            document.querySelector(".btnK").classList.remove("highlight");
        } else if (document.querySelector(".btnTy").classList.contains("highlight")) {
            document.querySelector(".btnTy").classList.remove("highlight");
        } else if (document.querySelector(".btnH").classList.contains("highlight")) {
            document.querySelector(".btnH").classList.remove("highlight");
        }
    } else if (event.innerHTML === "Ty") {
        document.getElementById('billion').checked = true;
        document.querySelector(".btnTy").classList.add("highlight");
        if (document.querySelector(".btnTr").classList.contains("highlight")) {
            document.querySelector(".btnTr").classList.remove("highlight");
        } else if (document.querySelector(".btnK").classList.contains("highlight")) {
            document.querySelector(".btnK").classList.remove("highlight");
        } else if (document.querySelector(".btnH").classList.contains("highlight")) {
            document.querySelector(".btnH").classList.remove("highlight");
        }
    } else if (event.innerHTML === "H") {
        document.getElementById('height').checked = true;
        document.querySelector(".btnH").classList.add("highlight");
        if (document.querySelector(".btnTr").classList.contains("highlight")) {
            document.querySelector(".btnTr").classList.remove("highlight");
        } else if (document.querySelector(".btnK").classList.contains("highlight")) {
            document.querySelector(".btnK").classList.remove("highlight");
        } else if (document.querySelector(".btnTy").classList.contains("highlight")) {
            document.querySelector(".btnTy").classList.remove("highlight");
        }
    }

}

//important lessons

//1. if you want to pass an event into another function with a mouse click, you need to put (this) as the argument to pass the event through. examples in the Tens buttons.
