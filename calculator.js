const display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}
function claculate(){
display.value=eval(display.value);
}
function abdii(){
    display.value="";
}