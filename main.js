var code = 4825;
var codeStr = code.toString();
var input = document.getElementById('codeplace');
var button = document.getElementById('checkButton');

input.addEventListener('keyup', checkCodeByEnter);

function checkCodeByEnter(e) {
    if (e.keyCode == '13') {
       checkCode();
    }   
}


var array=[];
function checkCode(){

var trying = document.createElement('div');
trying.classList.add('trying');
var trial = document.getElementById('try');
var tryCode = document.createElement('p')
tryCode.classList.add('try-code');
tryCode.innerText = input.value;
trying.appendChild(tryCode);
trial.appendChild(trying);



if(input.value===codeStr){
    alert('You got it!') 
} else  { 
for(var i=0; i<input.value.length; i++){
if
(input.value[i]===codeStr[i])

array.push(1);
 }
 
 alert('You have ' + array.length +' right!');
var matches = document.createTextNode(array.length);
document.body.appendChild(matches);
 array=[];
 input.value='';
} 
}
