const display = document.getElementById("display");
console.log("it~working")

function append(a){
    display.value += a;

}


function cleartext(){
    display.value = " ";

}

function calculate(){
    display.value = eval(display.value);

}