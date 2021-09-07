"use strict";
var car;
var cars = new Array();
var index = 0;
function addCar() {
    var plateCar = document.getElementById("plate").value;
    var colorCar = document.getElementById("color").value;
    var brandCar = document.getElementById("brand").value;
    var div1 = document.getElementById("form1");
    var div2 = document.getElementById("form2");
    if (plateCar == "" || colorCar == "" || brandCar == "") {
        alert("All inputs must be filled in");
        if (plateCar == "") {
            document.getElementById("plate").classList.add("is-invalid");
        }
        if (colorCar == "") {
            document.getElementById("color").classList.add("is-invalid");
        }
        if (brandCar == "") {
            document.getElementById("brand").classList.add("is-invalid");
        }
    }
    else if (!validatePlate(plateCar)) {
        alert("The plate must have 4 numbers and 3 letters");
        document.getElementById("plate").classList.add("is-invalid");
    }
    else {
        createCar(plateCar, brandCar, colorCar);
        div1.classList.add("hideDiv");
        div2.classList.remove("form2");
        div2.classList.add("displayDiv");
        document.getElementById("color").classList.remove("is-invalid");
        document.getElementById("plate").classList.remove("is-invalid");
        document.getElementById("brand").classList.remove("is-invalid");
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
    index++;
    console.log(index);
    cars.push(car);
    console.log(cars);
}
function registerWheel() {
    var wheelError = false;
    //Wheel 1
    var wheelDiameter1 = parseFloat(document.getElementById("wheelD1").value);
    var wheelBrand1 = document.getElementById("wheelB1").value;
    if (wheelBrand1 == "") {
        wheelError = true;
        document.getElementById("wheelB1").classList.add("is-invalid");
    }
    if (isNaN(wheelDiameter1)) {
        wheelError = true;
        document.getElementById("wheelD1").classList.add("is-invalid");
    }
    else if (wheelDiameter1 < 0.4) {
        wheelError = true;
        document.getElementById("wheelD1").classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter1 > 2) {
        wheelError = true;
        document.getElementById("wheelD1").classList.add("is-invalid");
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
        document.getElementById("wheelD2").classList.add("is-invalid");
    }
    else if (wheelDiameter2 < 0.4) {
        wheelError = true;
        document.getElementById("wheelD2").classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter2 > 2) {
        wheelError = true;
        document.getElementById("wheelD2").classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    //Wheel 3
    var wheelDiameter3 = parseFloat(document.getElementById("wheelD3").value);
    var wheelBrand3 = document.getElementById("wheelB3").value;
    if (wheelBrand3 == "") {
        wheelError = true;
        document.getElementById("wheelB3").classList.add("is-invalid");
    }
    if (isNaN(wheelDiameter3)) {
        wheelError = true;
        document.getElementById("wheelD3").classList.add("is-invalid");
    }
    else if (wheelDiameter3 < 0.4) {
        wheelError = true;
        document.getElementById("wheelD3").classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter3 > 2) {
        wheelError = true;
        document.getElementById("wheelD3").classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    //Wheel 4
    var wheelDiameter4 = parseFloat(document.getElementById("wheelD4").value);
    var wheelBrand4 = document.getElementById("wheelB4").value;
    if (wheelBrand4 == "") {
        wheelError = true;
        document.getElementById("wheelB4").classList.add("is-invalid");
    }
    if (isNaN(wheelDiameter4)) {
        wheelError = true;
        document.getElementById("wheelD4").classList.add("is-invalid");
    }
    else if (wheelDiameter4 < 0.4) {
        wheelError = true;
        document.getElementById("wheelD4").classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    else if (wheelDiameter4 > 2) {
        wheelError = true;
        document.getElementById("wheelD4").classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2");
    }
    //Wheels result
    if (wheelError == false) {
        document.getElementById("wheelB1").classList.remove("is-invalid");
        document.getElementById("wheelD1").classList.remove("is-invalid");
        document.getElementById("wheelB2").classList.remove("is-invalid");
        document.getElementById("wheelD2").classList.remove("is-invalid");
        document.getElementById("wheelB3").classList.remove("is-invalid");
        document.getElementById("wheelD3").classList.remove("is-invalid");
        document.getElementById("wheelB4").classList.remove("is-invalid");
        document.getElementById("wheelD4").classList.remove("is-invalid");
        if (cars[index - 1].wheels.length < 4) {
            cars[index - 1].addWheel(new Wheel(wheelDiameter1, wheelBrand1));
            cars[index - 1].addWheel(new Wheel(wheelDiameter2, wheelBrand2));
            cars[index - 1].addWheel(new Wheel(wheelDiameter3, wheelBrand3));
            cars[index - 1].addWheel(new Wheel(wheelDiameter4, wheelBrand4));
            var resultWheelBrand1 = document.getElementById('wheelResult');
            resultWheelBrand1.innerHTML = "Wheel 1: <br><strong>Brand</strong>: " + wheelBrand1 + " <strong>Diameter</strong>: " + wheelDiameter1 +
                "<br>" +
                "Wheel 2: <br><strong>Brand</strong>: " + wheelBrand2 + " <strong>Diameter</strong>: " + wheelDiameter2 + "<br>" +
                "Wheel 3: <br><strong>Brand</strong>: " + wheelBrand3 + " <strong>Diameter</strong>: " + wheelDiameter3 + "<br>" +
                "Wheel 4: <br><strong>Brand</strong>: " + wheelBrand4 + " <strong>Diameter</strong>: " + wheelDiameter4;
        }
        else {
            alert("Only 4 wheels are able to be registered");
        }
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
    //Reset inputs
    document.getElementById("plate").value = "";
    document.getElementById("color").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("wheelD1").value = "";
    document.getElementById("wheelB1").value = "";
    document.getElementById("wheelD2").value = "";
    document.getElementById("wheelB2").value = "";
    document.getElementById("wheelD3").value = "";
    document.getElementById("wheelB3").value = "";
    document.getElementById("wheelD4").value = "";
    document.getElementById("wheelB4").value = "";
    //Reset results
    var resultWheelBrand1 = document.getElementById('wheelResult');
    resultWheelBrand1.innerHTML = "Wheel 1: <br><strong>Brand</strong>: " + " <strong>Diameter</strong>: " +
        "<br>" +
        "Wheel 2: <br><strong>Brand</strong>: " + " <strong>Diameter</strong>: " + "<br>" +
        "Wheel 3: <br><strong>Brand</strong>: " + " <strong>Diameter</strong>: " + "<br>" +
        "Wheel 4: <br><strong>Brand</strong>: " + " <strong>Diameter</strong>: ";
}
