// Validates numeric input and displays error messages.
// Returns true if the input is a valid number, false otherwise.
function validateNum(num, errnum) {
  var number = document.getElementById(num).value;
  console.log(number);

  if (isNaN(number)) {
    document.getElementById(errnum).innerHTML = "Enter only numbers";
    return false;
  } else {
    document.getElementById(errnum).innerHTML = " ";
    return true;
  }
}

// Validates data and calls the function to find the maximum value.
function validateData() {
  var flag1 = validateNum("n1", "errnum1");
  var flag2 = validateNum("n2", "errnum2");
  var flag3 = validateNum("n3", "errnum3");

  if (flag1 && flag2 && flag3) {
    largest();
  } else {
    alert("Enter valid data!!!!!"); // Alert for invalid data
  }
}

// Finds the largest value among three input fields and displays it.
function largest() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var n3 = document.getElementById("n3").value;

  if (n1 > n2 && n1 > n3) {
    document.getElementById("result").innerHTML = n1;
  } else if (n2 > n1 && n2 > n3) {
    document.getElementById("result").innerHTML = n2;
  } else {
    document.getElementById("result").innerHTML = n3;
  }
}
