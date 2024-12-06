function display(input) {
    document.getElementById('result').value+=input;
    return input;

}
function clearscreen() {
    document.getElementById('result').value="";
}
function calc(){
let num1=document.getElementById('result').value;
// console.log(num1);
let num2=eval(num1);
document.getElementById('result').value=num2;
return num2;
}
