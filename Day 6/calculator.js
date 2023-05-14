function display(value){
    let existing = document.getElementById("result");
    existing.value += value
}
function result(){
    var num1=document.getElementById("result").value
    var num2=eval(num1);
    document.getElementById("result").value=num2;
}

function calculate() {
    var p = document.getElementById("result").value;
    
    var q = eval(p);
    document.getElementById("result").value = q;

    }

function clearScreen() {
        document.getElementById("result").value = "";
    }



function percentage(){
    let valuetoconvert = document.getElementById('result').value;
    let percent = (valuetoconvert /100);
    document.getElementById("result").value = percent;
}

function modulus(){

}