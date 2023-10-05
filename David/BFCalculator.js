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
    let heightStatus = false, neckStatus=false, waistStatus=false;

    //check for errors
    if (!height || isNaN(height) || (height <=0)){
        document.getElementById("heightsError").style.display = "block";
        document.getElementById("heightError").innerHTML = "Please enter a valid height measurement";
    }
    else{
        document.getElementById("heightError").innerHTML = "";
        document.getElementById("heightsError").style.display = "none";
        heightStatus = true;
    }

    if (!neck || isNaN(neck) || (neck <=0)){
        document.getElementById("necksError").style.display = "block";
        document.getElementById("neckError").innerHTML = "Please enter a valid neck measurement";
    }
    else{
        document.getElementById("neckError").innerHTML = "";
        document.getElementById("necksError").style.display = "none";
        neckStatus = true;
    }

    if (!waist || isNaN(waist) || (waist <=0)){
        document.getElementById("waistsError").style.display = "block";
        document.getElementById("waistError").innerHTML = "Please enter a valid waist measurement";
    }
    else{
        document.getElementById("waistError").innerHTML = "";
        document.getElementById("waistsError").style.display = "none";
        waistStatus = true;
    }

    if(heightStatus && neckStatus && waistStatus) {
        const BFP = (86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76).toFixed(1);
        output.innerHTML = `Body Fat Percentage: ${BFP}%`;
    }

    
};

// Navy Body Fat Percentage formula for females
// Uses USC units
const BFPFemale = () => {
    const height = parseFloat(document.getElementById("heightFeet").value) * 12 + parseFloat(document.getElementById("heightInches").value);
    const neck = parseFloat(document.getElementById("neckFeet").value) * 12 + parseFloat(document.getElementById("neckInches").value);
    const waist = parseFloat(document.getElementById("waistFeet").value) * 12 + parseFloat(document.getElementById("waistInches").value);
    const hip = parseFloat(document.getElementById("hipFeet").value) * 12 + parseFloat(document.getElementById("hipInches").value);
    const output = document.getElementById("Result");
    let heightStatus = false, neckStatus=false, waistStatus=false, hipStatus=false;

    //check for errors
    if (!height || isNaN(height) || (height <=0)){
        document.getElementById("heightsError").style.display = "block";
        document.getElementById("heightError").innerHTML = "Please enter a valid height measurement";
    }
    else{
        document.getElementById("heightError").innerHTML = "";
        document.getElementById("heightsError").style.display = "none";
        heightStatus = true;
    }

    if (!neck || isNaN(neck) || (neck <=0)){
        document.getElementById("necksError").style.display = "block";
        document.getElementById("neckError").innerHTML = "Please enter a valid neck measurement";
    }
    else{
        document.getElementById("neckError").innerHTML = "";
        document.getElementById("necksError").style.display = "none";
        neckStatus = true;
    }

    if (!waist || isNaN(waist) || (waist <=0)){
        document.getElementById("waistsError").style.display = "block";
        document.getElementById("waistError").innerHTML = "Please enter a valid waist measurement";
    }
    else{
        document.getElementById("waistError").innerHTML = "";
        document.getElementById("waistsError").style.display = "none";
        waistStatus = true;
    }
    if (!hip || isNaN(hip) || (hip <=0)){
        document.getElementById("hipsError").style.display = "block";
        document.getElementById("hipError").innerHTML = "Please enter a valid hip measurement";
    }
    else{
        document.getElementById("hipError").innerHTML = "";
        document.getElementById("hipsError").style.display = "none";
        hipStatus = true;
    }

    if(heightStatus && neckStatus && waistStatus && hipStatus) {
        const BFP = (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387).toFixed(1);
        output.innerHTML = `Body Fat Percentage: ${BFP}%`;
    }


};