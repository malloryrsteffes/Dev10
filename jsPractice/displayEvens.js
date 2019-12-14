function clearErrors() {
  for (
    var loopCounter = 0;
    loopCounter < document.forms["evensForm"].elements.length;
    loopCounter++
  ) {
    if (
      document.forms["evensForm"].elements[
        loopCounter
      ].parentElement.className.indexOf("has-") != -1
    ) {
      document.forms["evensForm"].elements[
        loopCounter
      ].parentElement.className = "form-group";
    }
  }
}

function resetForm() {
  clearErrors();
  document.forms["evensForm"]["startingPoint"].value = "";
  document.forms["evensForm"]["endingPoint"].value = "";
  document.forms["evensForm"]["step"].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("submitButton").innerText = "Submit";
  document.forms["evensForm"]["startingPoint"].focus();
}

function findEvens(startingPoint, endingPoint, step) {
  let numbers = [];
  let newNumber = startingPoint + step;
  for (var i = 0; i < endingPoint; i++) {
    if (newNumber > endingPoint) break;

    if (newNumber % 2 != 0) {
      newNumber = newNumber + step;
    } else {
      numbers.push(newNumber);
      newNumber = newNumber + step;
    }
  }
  console.log(numbers);
}

findEvens(2, 18, 7);

function validateItems() {
  clearErrors();
  var startingPoint = document.forms["evensForm"]["startingPoint"].value;
  var endingPoint = document.forms["evensForm"]["endingPoint"].value;
  var step = document.forms["evensForm"]["step"].value;
  if (startingPoint == "" || isNaN(startingPoint)) {
    alert("The Starting Point must be filled in with a number.");
    document.forms["evensForm"]["startingPoint"].parentElement.className =
      "form-group has-error";
    document.forms["evensForm"]["startingPoint"].focus();
    return false;
  }
  if (endingPoint == "" || isNaN(endingPoint || endingPoint <= startingPoint)) {
    alert("The Ending Point must be filled in with a number.");
    document.forms["evensForm"]["endingPoint"].parentElement.className =
      "form-group has-error";
    document.forms["evensForm"]["endingPoint"].focus();
    return false;
  }
  if (step == "" || isNaN(step) || step < 0) {
    alert("The Step must be filled in with a number.");
    document.forms["evensForm"]["step"].parentElement.className =
      "form-group has-error";
    document.forms["evensForm"]["step"].focus();
    return false;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";

  document.getElementById("results").innerText =
    "Here are the even numbers between " +
    startingPoint +
    " and " +
    endingPoint +
    " by " +
    step +
    "'s.";
  document.getElementById("subtractResult").innerText = num1 - num2;
  document.getElementById("multiplyResult").innerText = num1 * num2;
  document.getElementById("divideResult").innerText = num1 / num2;
  // We are returning false so that the form doesn't submit
  // and so that we can see the results
  return false;
}
