"use strict";
let buttons = document.querySelectorAll('button');
// display Input
let input = document.getElementById("displayInput");
// display output
var output = document.getElementById('output_display');
// memory array 
const memory = [];
const pI = Math.PI;
const e = Math.E;
// display memory div 
const memorySection = document.getElementById("memory-show");
let memoryShown = false;
let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (parseFloat(input.value).toString()[0] == '*' || parseFloat(input.value).toString()[0] == '/' || parseFloat(input.value).toString()[0] == '+' || parseFloat(input.value).toString()[0] == '=' || parseFloat(input.value).toString()[0] == '%') {
            input.innerHTML = `<p style="color:red;">Invalid!</p>`;
            input.style.opacity = (1).toString();
            input.style.top = (0).toString();
            input.value = "";
        }
        else if (e.target.value == '=') {
            try {
                output.value = input.value;
                string = eval(input.value);
                input.value = string;
            }
            catch (error) {
                output.innerHTML = "<p style='color:red'>Syntax error!</p>";
            }
            let str = input.value;
            const fun = str.split(" ");
            let a = fun[0];
            let b = fun[2];
            // Calculate yroot 
            if (fun[1] == 'yroot') {
                output.value = input.value;
                input.value = Math.pow(a, 1 / b).toString();
            }
            // Calculate y log base x 
            else if (fun[1] == 'log') {
                let c = fun[3];
                output.value = input.value;
                input.value = (Math.log(a) / Math.log(c)).toString();
            }
        }
        // Clear all 
        else if (e.target.value == 'C') {
            if (input.value) {
                input.value = "";
            }
            else if (output.value) {
                output.value = "";
            }
        }
        // Single delete 
        else if (e.target.value == 'DE') {
            input.value = input.value.replace("DE", "").slice(0, -1);
        }
        else {
            if (e.target.value == undefined)
                return;
            input.value += e.target.value;
        }
    });
});
// change the 2nd number
function change() {
    let display_class = document.getElementsByClassName("operator");
    let hidden_class = document.getElementsByClassName("operator1");
    // const btn = document.getElementById("change");
    if (hidden_class[0].style.display === "inline-block") {
        for (let i = 0; i < 6; i++) {
            display_class[i].style.display = "inline-block";
        }
        for (let i = 0; i < 6; i++) {
            hidden_class[i].style.display = "none";
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            hidden_class[i].style.display = "inline-block";
        }
        for (let i = 0; i < 6; i++) {
            display_class[i].style.display = "none";
        }
    }
}
function ftoE() {
    if (input.value != '') {
        const ftoE = parseFloat(input.value);
        input.value = ftoE.toExponential();
    }
    else {
        const ftoE = 0;
        input.value = ftoE.toExponential();
    }
}
// Pi number
function pi() {
    input.value = pI;
}
// E number
function Eclick() {
    input.value = e;
}
// Inverse number 
function inverse() {
    input.value = (-(parseFloat(input.value))).toString();
}
// Sin function 
function sin() {
    output.value = `sin(${input.value})`;
    input.value = Math.sin(parseFloat(input.value)).toString();
}
// Cos function 
function cos() {
    output.value = `cos(${input.value})`;
    input.value = Math.cos(parseFloat(input.value)).toString();
}
// Tan function 
function tan() {
    output.value = `tan(${input.value})`;
    input.value = Math.tan(parseFloat(input.value)).toString();
}
// Cot function 
function cot() {
    output.value = `1 / tan(${input.value})`;
    input.value = (1 / Math.tan(parseFloat(input.value))).toString();
}
// Csc function 
function csc() {
    output.value = `1 / sin(${input.value})`;
    input.value = (1 / Math.sin(parseFloat(input.value))).toString();
}
// Sec function 
function sec() {
    output.value = `1 / cos(${input.value})`;
    input.value = (1 / Math.cos(parseFloat(input.value))).toString();
}
// Factorial n!
function fact() {
    let n = input.value;
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else if (n > 1) {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
    }
    else {
        input.value = "number has to be positive.";
    }
    output.value = `fact(${input.value})`;
    input.value = answer.toString();
}
// calculate square 
function sqr() {
    output.value = `sqr(${input.value})`;
    input.value = (parseFloat(input.value) * parseFloat(input.value)).toString();
}
function sqrt() {
    output.value = `√ (${input.value})`;
    input.value = (Math.sqrt(parseFloat(input.value))).toString();
}
// Calculate cube 
function cube() {
    output.value = `cube(${input.value})`;
    input.value = (parseFloat(input.value) * 3).toString();
}
// Calculate cuberoot 
function cuberoot() {
    output.value = `cuberoot(${input.value})`;
    input.value = Math.cbrt(parseFloat(input.value)).toString();
}
// Calculate 2root 
function secondRoot() {
    output.value = `2^(${input.value})`;
    input.value = (2 ** (parseFloat(input.value))).toString();
}
// Calculate 10Root 
function tanRoot() {
    output.value = `10^(${input.value})`;
    input.value = (10 ** (parseFloat(input.value))).toString();
}
// Calculate Log
function log() {
    output.value = `log(${input.value})`;
    input.value = (Math.log10(parseFloat(input.value))).toString();
}
// Calculate ln
function ln() {
    output.value = `ln(${input.value})`;
    input.value = (Math.log(parseFloat(input.value))).toString();
}
// Calculate e^ 
function epower() {
    let e = 2.718281828459045;
    output.value = `e^(${input.value})`;
    input.value = (e ** (parseFloat(input.value))).toString();
}
// Calculate |x| 
function abs() {
    output.value = `abs(${input.value})`;
    input.value = (Math.abs(parseFloat(input.value))).toString();
}
// calculate 1/x 
function oneDevid() {
    output.value = `1/(${input.value})`;
    input.value = (1 / (parseFloat(input.value))).toString();
}
// Calculate ceil
function ceil() {
    output.value = `ceil(${input.value})`;
    input.value = (Math.ceil(parseFloat(input.value))).toString();
}
// Calculate floor
function floor() {
    output.value = `floor(${input.value})`;
    input.value = (Math.floor(parseFloat(input.value))).toString();
}
// Calculate exp
function exp() {
    if (input.value != '') {
        const ftoE = parseFloat(input.value);
        input.value = ftoE.toExponential();
    }
    else {
        const ftoE = 0;
        input.value = ftoE.toExponential();
    }
}
// Store memory 
function memoryStore() {
    var mc_ele = document.getElementById("mc");
    mc_ele.classList.add("btnBlack");
    mc_ele.classList.remove("btnDark");
    var mr_ele = document.getElementById("mr");
    mr_ele.classList.add("btnBlack");
    mr_ele.classList.remove("btnDark");
    var mshow_ele = document.getElementById("mshow");
    mshow_ele.classList.add("btnBlack");
    mshow_ele.classList.remove("btnDark");
    if (memory[memory.length - 1] != Number(input.value)) {
        memory.push(Number(input.value.toString()));
        localStorage.setItem("Calculator", JSON.stringify(memory));
    }
}
// Read memory 
function memoryRead() {
    if (memory.length != 0) {
        input.value = (memory[memory.length - 1]);
    }
}
// Show memory 
function showMemory() {
    var text = JSON.parse(localStorage.getItem("Calculator"));
    if (memory.length != 0) {
        if (text.length != 0) {
            if (!memoryShown) {
                let htmlText = '<h4 style="text-align: center; border-bottom: 1px solid black;"> Memory Stored </h4>';
                for (let i = 0, len = text.length - 1; i <= len; len--) {
                    htmlText += '<div class="text-memory"><p>';
                    htmlText += text[len].toString();
                    htmlText += '</p></div>';
                }
                memorySection.style.display = "flex";
                memorySection.innerHTML = htmlText;
                memoryShown = true;
            }
            else {
                memorySection.style.display = "none";
                memoryShown = false;
            }
        }
        else {
            memorySection.style.display = "none";
            memoryShown = false;
        }
    }
    else {
        memorySection.style.display = "none";
        memoryShown = false;
    }
}
// Add memory 
function memoryAdd() {
    var mc_ele = document.getElementById("mc");
    mc_ele.classList.add("btnBlack");
    mc_ele.classList.remove("btnDark");
    var mr_ele = document.getElementById("mr");
    mr_ele.classList.add("btnBlack");
    mr_ele.classList.remove("btnDark");
    var mshow_ele = document.getElementById("mshow");
    mshow_ele.classList.add("btnBlack");
    mshow_ele.classList.remove("btnDark");
    if (memory.length != 0) {
        memory[memory.length - 1] += Number(parseFloat(input.value).toString());
    }
}
// Clear memory 
function memoryClear() {
    var mc_ele = document.getElementById("mc");
    mc_ele.classList.add("btnDark");
    mc_ele.classList.remove("btnBlack");
    var mr_ele = document.getElementById("mr");
    mr_ele.classList.add("btnDark");
    mr_ele.classList.remove("btnBlack");
    var mshow_ele = document.getElementById("mshow");
    mshow_ele.classList.add("btnDark");
    mshow_ele.classList.remove("btnBlack");
    if (memory.length != 0) {
        memory.length = 0;
        localStorage.clear();
    }
}
// Substract memory 
function memorySub() {
    if (memory.length != 0) {
        memory[memory.length - 1] -= Number(parseFloat(input.value).toString());
    }
}
