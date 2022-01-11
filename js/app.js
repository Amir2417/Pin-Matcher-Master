// randomly generate the pin

function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
// typed number show
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const typedNumbers = document.getElementById("typed-numbers");
  //check whether the variable is number or not in NotAnNumber function
  if (isNaN(number)) {
    if (number == "C") {
      typedNumbers.value = "";
    }
  } else {
    const previousValue = typedNumbers.value;
    const newValue = previousValue + number;
    typedNumbers.value = newValue;
  }
});
