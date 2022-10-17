/* -------------------------------- TODO LIST -------------------------------

#create a timer for the prompt dialog (set timer)


*/

var min = document.getElementById("min");
var max = document.getElementById("max");
var result = document.getElementById("result");
var startBtn = document.getElementById("button");
var prompt = document.getElementById("prompt");

generate = () => {
  var maxValue = Number(max.value);
  var minValue = Number(min.value) + 1;
  var randomNumber =
    Math.floor(Math.random() * (maxValue - minValue)) + minValue;

  if (maxValue != "" && minValue != "") {
    result.value = randomNumber;
  } else {
    prompt.style.display = "block";
    removePrompt = () => {
      let clearPrompt = (prompt.style.display = "none");
    };
    setInterval(removePrompt, 3000);
  }
};

startBtn.addEventListener("click", generate);
