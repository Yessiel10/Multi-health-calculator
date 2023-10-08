
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

    totalSum = RMRCalculator(gender, age, heightFeet, heightInches, weight);
}

function RMRCalculator(gender, age, heightFeet, heightInches, weight) {
    let output = document.querySelector("#result");
    const formOne = document.querySelector("#formula-1");

    if (gender === 'male') {
        formOne.innerHTML = `Resting Metabolic Rate`;
        output.innerHTML = `${"RMR = " + Math.round(menRMR(age, heightFeet, heightInches, weight)).toLocaleString() + " Calories/Day"}`;
        return;
    }
    else if (gender === 'female') {
        formOne.innerHTML = `Resting Metabolic Rate`;
        output.innerHTML = `${"RMR = " + Math.round(womenRMR(age, heightFeet, heightInches, weight)).toLocaleString() + " Calories/Day"}`;
        return;
    }
    else {
        alert('Please choose a gender.');
    }
}

function menRMR(age, heightFeet, heightInches, weight) {
    let sum = 0;
    sum = ((13.7 * weight) + (5 * (heightInches + (heightFeet * 12))) - (6.8 * age) + 66);
    return sum;
}

function womenRMR(age, heightFeet, heightInches, weight) {
    let sum = 0;
    sum = ((9.6 * weight) + (1.85 * (heightInches + (heightFeet * 12))) - (4.7 * age) + 655);
    return sum;
}
