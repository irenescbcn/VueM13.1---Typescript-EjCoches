"use strict";
var car;
function addCar() {
    var plateCar = document.getElementById("plate").value;
    var colorCar = document.getElementById("color").value;
    var brandCar = document.getElementById("brand").value;
    var div1 = document.getElementById("form1");
    var div2 = document.getElementById("form2");
    if (!validatePlate(plateCar)) {
        alert("The plate must have 4 numbers and 3 letters");
    }
    else {
        createCar(plateCar, brandCar, colorCar);
        div1.classList.add("hideDiv");
        div2.classList.remove("form2");
        div2.classList.add("displayDiv");
        var resultPlateCar = document.getElementById('plateResult');
        resultPlateCar.innerHTML = "<strong>Plate</strong>: " + (car.plate).toUpperCase();
        var resultBrandCar = document.getElementById('brandResult');
        resultBrandCar.innerHTML = "<strong>Brand</strong>: " + (car.brand).toUpperCase();
        var resultColorCar = document.getElementById('colorResult');
        resultColorCar.innerHTML = "<strong>Color</strong>: " + (car.color).toUpperCase();
    }
}
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
}
function registerWheel() {
    var wheelError = false;
    //Wheel 1
    var wheelDiameter1 = parseFloat(document.getElementById("wheelD1").value);
    var wheelBrand1 = document.getElementById("wheelB1").value;
    if (wheelBrand1 == "") {
        wheelError = true;
    }
    if (isNaN(wheelDiameter1)) {
        wheelError = true;
    }
    else if (wheelDiameter1 < 0.4) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter1 > 2) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    //Wheel 2
    var wheelDiameter2 = parseFloat(document.getElementById("wheelD2").value);
    var wheelBrand2 = document.getElementById("wheelB2").value;
    if (wheelBrand2 == "") {
        wheelError = true;
        document.getElementById("wheelB2").classList.add("is-invalid");
    }
    if (isNaN(wheelDiameter2)) {
        wheelError = true;
    }
    else if (wheelDiameter2 < 0.4) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter2 > 2) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    //Wheel 3
    var wheelDiameter3 = parseFloat(document.getElementById("wheelD3").value);
    var wheelBrand3 = document.getElementById("wheelB3").value;
    if (wheelBrand3 == "") {
        wheelError = true;
    }
    if (isNaN(wheelDiameter3)) {
        wheelError = true;
    }
    else if (wheelDiameter3 < 0.4) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter3 > 2) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    //Wheel 4
    var wheelDiameter4 = parseFloat(document.getElementById("wheelD4").value);
    var wheelBrand4 = document.getElementById("wheelB4").value;
    if (wheelBrand4 == "") {
        wheelError = true;
    }
    if (isNaN(wheelDiameter4)) {
        wheelError = true;
    }
    else if (wheelDiameter4 < 0.4) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter4 > 2) {
        wheelError = true;
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    if (wheelError == false) {
        car.addWheel(new Wheel(wheelDiameter1, wheelBrand1));
        car.addWheel(new Wheel(wheelDiameter2, wheelBrand2));
        car.addWheel(new Wheel(wheelDiameter3, wheelBrand3));
        car.addWheel(new Wheel(wheelDiameter4, wheelBrand4));
        var resultWheelBrand1 = document.getElementById('wheelResult');
        resultWheelBrand1.innerHTML = "Wheel 1: <br><strong>Brand</strong>: " + wheelBrand1 + " <strong>Diameter</strong>: " + wheelDiameter1 +
            "<br>" +
            "Wheel 2: <br><strong>Brand</strong>: " + wheelBrand2 + " <strong>Diameter</strong>: " + wheelDiameter2 + "<br>" +
            "Wheel 3: <br><strong>Brand</strong>: " + wheelBrand3 + " <strong>Diameter</strong>: " + wheelDiameter3 + "<br>" +
            "Wheel 4: <br><strong>Brand</strong>: " + wheelBrand4 + " <strong>Diameter</strong>: " + wheelDiameter4;
    }
}
function validatePlate(text) {
    var regex = /^[0-9]{4}[a-zA-Z]{3}$/gm;
    return regex.test(text) ? true : false;
}
function addAnotherCar() {
    var div1 = document.getElementById("form1");
    var div2 = document.getElementById("form2");
    div2.classList.remove("displayDiv");
    div2.classList.add("hideDiv");
    div1.classList.remove("hideDiv");
}
