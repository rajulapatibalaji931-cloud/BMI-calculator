function calculateBMI() {

    let weight = parseFloat(document.getElementById("weight").value);
    let heightFeet = parseFloat(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);

    if (weight <= 0 || heightFeet <= 0 || age <= 0 || isNaN(weight) || isNaN(heightFeet) || isNaN(age)) {
        alert("Please enter valid values");
        return;
    }

    let heightMeter = heightFeet * 0.3048;

    let bmi = weight / (heightMeter * heightMeter);

    document.getElementById("bmi-result").textContent = bmi.toFixed(2);

    let category = "";
    let categoryColor = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi < 25) {
        category = "Normal Weight";
    } 
    else if (bmi < 30) {
        category = "Overweight";
    } 
    else {
        category = "Obese";
    }

    document.getElementById("bmi-category").textContent = category;
}