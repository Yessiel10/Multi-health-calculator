// Function for gender. Hides/displays hip measurements
const showHide = () => {
    var maleGender = document.getElementById("male");
    var femaleGender = document.getElementById("female");
    var hipMeasurements = document.getElementById("hips");

    if (maleGender.checked) {
        hipMeasurements.style.display = "none";
    }
    else {
        hipMeasurements.style.display = "block";
    }
};

const BFP = () =>{
    if (document.getElementById("male").checked) {
        BFPMale();
    }
    else {
        BFPFemale();
    }
};

// Navy Body Fat Percentage formula for males
// Uses USC units
const BFPMale = () => {
    const height = parseFloat(document.getElementById("heightFeet").value) * 12 + parseFloat(document.getElementById("heightInches").value);
    const neck = parseFloat(document.getElementById("neckFeet").value) * 12 + parseFloat(document.getElementById("neckInches").value);
    const waist = parseFloat(document.getElementById("waistFeet").value) * 12 + parseFloat(document.getElementById("waistInches").value);
    const output = document.getElementById("Result");
    const BFP = (86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76).toFixed(1);
    output.innerHTML = `${BFP}%`;
};

// Navy Body Fat Percentage formula for females
// Uses USC units
const BFPFemale = () => {
    const height = parseFloat(document.getElementById("heightFeet").value) * 12 + parseFloat(document.getElementById("heightInches").value);
    const neck = parseFloat(document.getElementById("neckFeet").value) * 12 + parseFloat(document.getElementById("neckInches").value);
    const waist = parseFloat(document.getElementById("waistFeet").value) * 12 + parseFloat(document.getElementById("waistInches").value);
    const hips = parseFloat(document.getElementById("hipsFeet").value) * 12 + parseFloat(document.getElementById("hipsInches").value);
    const output = document.getElementById("Result");
    const BFP = (163.205 * Math.log10(waist + hips - neck) - 97.684 * Math.log10(height) - 78.387).toFixed(1);
    output.innerHTML = `${BFP}%`;
};


// To do
// Check for invalid input
// Add other formulas
//Fat mass
//Lean mass
