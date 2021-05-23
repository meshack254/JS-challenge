function getNum() {
  myNum1 = document.getElementById('num1').value;
  myNum2 = document.getElementById('num2').value;
  myNum3 = document.getElementById('num3').value;
  num3.addEventListener('input', sum());
}

function sum() {
  parsedNum1 = parseInt(myNum1);
  parsedNum2 = parseInt(myNum2);
  parsedNum3 = parseInt(myNum3);
  output = document.getElementById('result')
  calc1 = (parsedNum1 * parsedNum2 / 100) + parsedNum1;
  calc2 = calc1 * parsedNum3;
  output.innerHTML = "The answer is " + calc2;
}