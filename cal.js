let erase = document.querySelector(".delete")


function calculate(val) {
    let num = document.querySelector('.input');
    num.textContent += val;

}
function remove () {
    let clear = document.querySelector('.input');
    clear.innerHTML = clear.innerHTML.slice(0, -1)
}

function clear () {
     document.querySelector('.input').innerHTML = " ";
       
}
erase.addEventListener('click' , clear);

function compute () {
    let num1 = document.querySelector('.input')
    num1.innerHTML = eval(num1.innerHTML);
}