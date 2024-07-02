function appendvalue(value){
    document.getElementById('display').value += value;
}
function calculate(){
    let display = document.getElementById('display');
    let expression = display.value;

    display.value = eval(expression);
}
function clearDisplay(){
    document.getElementById('display').value='';
}
function deleteLast(){
    let display=document.getElementById('display');
    display.value = display.value.slice(0,-1);
}