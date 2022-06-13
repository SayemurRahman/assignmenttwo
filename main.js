let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
     '"Face reality as it is, not as it was or as you wish it to be." - Jack Welch',
     '"Any woman who understands the problems of running a home will be nearer to understand the problems of running a country." - Margaret Thatcher',
     '"The nation will find it very hard to look up to the leaders who are keeping their ears to the ground." - Winston Churchill',
     '"He who has never learned to obey cannot be a good commander." - Aristotle',
    ];


btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
    
}
)

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult(){

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
 
  if(inputTypeValue === "pound" && resultTypeValue === "kilo"){

    result.value = Number(input.value)*0.453;

  }else if(inputTypeValue === "kilo" && resultTypeValue === "pound"){

    result.value = Number(input.value)*2.205;

  }
  
}