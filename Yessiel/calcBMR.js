
function startCalc() {
    let age = parseInt(document.querySelector("#age").value);
    let gender = document.querySelector('input[name="gender"]:checked').value; //Gives the string value to gender of the checked radio. (specified value)
    let heightFeet = parseInt(document.querySelector("#heightFeet").value);
    let heightInches = parseInt(document.querySelector("#heightInches").value);
    let weight = parseInt(document.querySelector("#weight").value);

    let totalSum = 0;

    // Sends values to console, to check they are correct.
    console.log('age: ' + age);
    console.log('gender: ' + gender);
    console.log('Height Feet: ' + heightFeet);
    console.log('Height Inches: ' + heightInches);
    console.log('Weight: ' + weight);

    totalSum = BMRCalculator(gender, age, heightFeet, heightInches, weight);
}

function BMRCalculator(gender, age, heightFeet, heightInches, weight) {
    let output = document.querySelector("#result");
    const mssg = document.querySelector("#message");
    if (gender === 'male') {
        output.innerHTML = `${Math.round(menSedentaryForm(age, heightFeet, heightInches, weight)).toLocaleString() + " Approx. Calories"}`;
        mssg.innerHTML = "Little to no excercise"

        return;
    }
    else if (gender === 'female') {
        output.innerHTML = `${Math.round(womenSedentaryForm(age, heightFeet, heightInches, weight)).toLocaleString() + " Approx. Calories"}`;
        return;
    }
    else {
        alert('Please choose a gender.');
    }
}

function menSedentaryForm(age, heightFeet, heightInches, weight) {
    let sum = 0;
    sum = ((10 * weight) + (6.25 * (heightInches + (heightFeet * 12))) - (5 * age) + 5);
    return sum;
}

function womenSedentaryForm(age, heightFeet, heightInches, weight) {
    let sum = 0;
    sum = ((10 * weight) + (6.25 * (heightInches + (heightFeet * 12))) - (5 * age) - 161);
    return sum;
}
