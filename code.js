let BMI;

function Check(){

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height >= 56 && height <= 79 && weight >=80 && weight <=275)
        CalculateBMI(height, weight);
}

function CalculateBMI(height, weight){

    placePerson(height, weight);
    BMI = (weight / (Math.pow(height, 2)) * 703).toFixed(1);
    CalculateCat(BMI);
}

function CalculateCat(BMI){
    let catBMI;

    if(BMI<16.0) {
        catBMI = "Underweight (Severe Thinness)";
    } else if (BMI<17.0) {
        catBMI = "Underweight (Moderate Thinness)";
    } else if (BMI<18.5) {
        catBMI = "Underweight (Mild Thinness)";
    } else if (BMI<25.0) {
        catBMI = "Normal Range"
    } else if (BMI<30.0) {
        catBMI = "Overweight (Pre-Obese)";
    } else if (BMI<35.0) {
        catBMI = "Obese (Class I)";
    } else if (BMI<40.0) {
        catBMI = "Obese (Class II)";
    } else {
        catBMI = "Obese (Class III)";
    }

    $('#resultBMI').text("BMI: ").append(BMI);
    $('#resultCatBMI').text("Category: ").append(catBMI);
}

function placePerson(height, weight){

    $("#chart").html('');

    let personImg = $("<img class='person' src='person-icon.png' alt='person.png'>");

    let pixelsPerInch = -385 / 23;
    let pixelsPerPound = 735 / 195;

    let top = (height - 79) * pixelsPerInch + 12;
    let left = (weight - 80) * pixelsPerPound + 23;

    personImg.css('top', top);
    personImg.css('left', left);
    $('#chart').append(personImg);

}