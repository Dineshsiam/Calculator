
const display = document.getElementById("display");
console.log("it~working")

function append(input){
    display.value += input;

}function cleartext(){

    display.value = "";

}


function deletelast(){
    
}
function calculate(){
    display.value = eval(display.value);

}