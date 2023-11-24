document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-color').addEventListener('click', () => calculateBMI());
  });

function calculateBMI() {
    // Get user input
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // Validate input
    if (isNaN(weight) || weight <= 0) {
      document.getElementById("weight").classList.add("is-invalid");
      return;
    } else {
        document.getElementById("weight").classList.remove("is-invalid");
    }

    if (isNaN(height) || height <= 0) {
        document.getElementById("height").classList.add("is-invalid");
        return;
    } else {
        document.getElementById("height").classList.remove("is-invalid");
    }

    // Calculate BMI
    var bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Determine BMI category
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + bmi + "<br>Category: " + category;
}