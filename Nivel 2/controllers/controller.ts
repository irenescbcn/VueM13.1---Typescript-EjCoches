let car: Car;
let cars:Car[] = new Array();
let index = 0;


function addCar(){
    let plateCar: string = (<HTMLInputElement>document.getElementById("plate")).value;
    let colorCar: string = (<HTMLInputElement>document.getElementById("color")).value;
    let brandCar: string = (<HTMLInputElement>document.getElementById("brand")).value;
    let div1 = (<HTMLInputElement>document.getElementById("form1"));
    let div2 = (<HTMLInputElement>document.getElementById("form2"));

    if(plateCar == "" || colorCar == "" || brandCar == ""){
        alert("All inputs must be filled in")
        if(plateCar == ""){
            (<HTMLInputElement>document.getElementById("plate")).classList.add("is-invalid")
        }
        if(colorCar == ""){
            (<HTMLInputElement>document.getElementById("color")).classList.add("is-invalid")
        }
        if(brandCar == ""){
            (<HTMLInputElement>document.getElementById("brand")).classList.add("is-invalid")
        }
        
    }else if(!validatePlate(plateCar)){
        alert("The plate must have 4 numbers and 3 letters");
        (<HTMLInputElement>document.getElementById("plate")).classList.add("is-invalid")
    }else{
        createCar(plateCar, brandCar, colorCar);
        div1.classList.add("hideDiv");
        div2.classList.remove("form2");
        div2.classList.add("displayDiv");

        (<HTMLInputElement>document.getElementById("color")).classList.remove("is-invalid");
        (<HTMLInputElement>document.getElementById("plate")).classList.remove("is-invalid");
        (<HTMLInputElement>document.getElementById("brand")).classList.remove("is-invalid");

        let resultPlateCar = <HTMLElement>document.getElementById('plateResult');
        resultPlateCar.innerHTML = "<strong>Plate</strong>: " + (car.plate).toUpperCase();

        let resultBrandCar = <HTMLElement>document.getElementById('brandResult');
        resultBrandCar.innerHTML = "<strong>Brand</strong>: " + (car.brand).toUpperCase();
        
        let resultColorCar = <HTMLElement>document.getElementById('colorResult');
        resultColorCar.innerHTML = "<strong>Color</strong>: " + (car.color).toUpperCase()
    } 
}

function createCar(plate:string,brand:string,color:string){
    car = new Car(plate,color,brand);
    index++;
    console.log(index);
    cars.push(car);
    console.log(cars);

}


function registerWheel(){  
    let wheelError = false;
    //Wheel 1
    let wheelDiameter1: number = parseFloat((<HTMLInputElement>document.getElementById("wheelD1")).value);    
    let wheelBrand1: string = (<HTMLInputElement>document.getElementById("wheelB1")).value;

    if (wheelBrand1 == ""){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelB1")).classList.add("is-invalid");
    }

    if(isNaN(wheelDiameter1)){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD1")).classList.add("is-invalid");
    }else if(wheelDiameter1 < 0.4){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD1")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }else if(wheelDiameter1 > 2){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD1")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }

    //Wheel 2
    let wheelDiameter2: number = parseFloat((<HTMLInputElement>document.getElementById("wheelD2")).value);    
    let wheelBrand2: string = (<HTMLInputElement>document.getElementById("wheelB2")).value;

    if (wheelBrand2 == ""){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelB2")).classList.add("is-invalid");
    }

    if(isNaN(wheelDiameter2)){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD2")).classList.add("is-invalid");
    }else if(wheelDiameter2 < 0.4){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD2")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }else if(wheelDiameter2 > 2){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD2")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }

    //Wheel 3
    let wheelDiameter3: number = parseFloat((<HTMLInputElement>document.getElementById("wheelD3")).value);    
    let wheelBrand3: string = (<HTMLInputElement>document.getElementById("wheelB3")).value;

    if (wheelBrand3 == ""){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelB3")).classList.add("is-invalid");
    }

    if(isNaN(wheelDiameter3)){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD3")).classList.add("is-invalid");
    }else if(wheelDiameter3 < 0.4){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD3")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }else if(wheelDiameter3 > 2){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD3")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }

    //Wheel 4
    let wheelDiameter4: number = parseFloat((<HTMLInputElement>document.getElementById("wheelD4")).value);    
    let wheelBrand4: string = (<HTMLInputElement>document.getElementById("wheelB4")).value;

    if (wheelBrand4 == ""){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelB4")).classList.add("is-invalid");
    }

    if(isNaN(wheelDiameter4)){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD4")).classList.add("is-invalid");
    }else if(wheelDiameter4 < 0.4){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD4")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }else if(wheelDiameter4 > 2){
        wheelError = true;
        (<HTMLInputElement>document.getElementById("wheelD4")).classList.add("is-invalid");
        alert("The diameter of the wheel must be between 0.4 and 2")
    }

    //Wheels result
    if(wheelError == false){
        (<HTMLInputElement>document.getElementById("wheelB1")).classList.remove("is-invalid");
        (<HTMLInputElement>document.getElementById("wheelD1")).classList.remove("is-invalid");

        (<HTMLInputElement>document.getElementById("wheelB2")).classList.remove("is-invalid");
        (<HTMLInputElement>document.getElementById("wheelD2")).classList.remove("is-invalid");

        (<HTMLInputElement>document.getElementById("wheelB3")).classList.remove("is-invalid");
        (<HTMLInputElement>document.getElementById("wheelD3")).classList.remove("is-invalid");

        (<HTMLInputElement>document.getElementById("wheelB4")).classList.remove("is-invalid");
        (<HTMLInputElement>document.getElementById("wheelD4")).classList.remove("is-invalid");

        if(cars[index-1].wheels.length < 4){
            cars[index-1].addWheel(new Wheel(wheelDiameter1, wheelBrand1));
            cars[index-1].addWheel(new Wheel(wheelDiameter2, wheelBrand2));
            cars[index-1].addWheel(new Wheel(wheelDiameter3, wheelBrand3));
            cars[index-1].addWheel(new Wheel(wheelDiameter4, wheelBrand4));

            let resultWheelBrand1 = <HTMLElement>document.getElementById('wheelResult');
            resultWheelBrand1.innerHTML ="Wheel 1: <br><strong>Brand</strong>: " + wheelBrand1 + " <strong>Diameter</strong>: " + wheelDiameter1 +
            "<br>" +
            "Wheel 2: <br><strong>Brand</strong>: " + wheelBrand2 + " <strong>Diameter</strong>: " + wheelDiameter2 + "<br>" +
            "Wheel 3: <br><strong>Brand</strong>: " + wheelBrand3 + " <strong>Diameter</strong>: " + wheelDiameter3 + "<br>" +
            "Wheel 4: <br><strong>Brand</strong>: " + wheelBrand4 + " <strong>Diameter</strong>: " + wheelDiameter4
        }else{
            alert("Only 4 wheels are able to be registered")
        }
            
    }

}


function validatePlate(text: string) : boolean {
	var regex = /^[0-9]{4}[a-zA-Z]{3}$/gm;
	return regex.test(text) ? true : false;
}


function addAnotherCar(){
    let div1 = (<HTMLInputElement>document.getElementById("form1"));
    let div2 = (<HTMLInputElement>document.getElementById("form2"));
    div2.classList.remove("displayDiv");
    div2.classList.add("hideDiv");
    div1.classList.remove("hideDiv");

    //Reset inputs
    (<HTMLInputElement>document.getElementById("plate")).value = "";
    (<HTMLInputElement>document.getElementById("color")).value = "" ;
    (<HTMLInputElement>document.getElementById("brand")).value = "";
    (<HTMLInputElement>document.getElementById("wheelD1")).value = "";  
    (<HTMLInputElement>document.getElementById("wheelB1")).value = "";
    (<HTMLInputElement>document.getElementById("wheelD2")).value = "";  
    (<HTMLInputElement>document.getElementById("wheelB2")).value = "";
    (<HTMLInputElement>document.getElementById("wheelD3")).value = "";  
    (<HTMLInputElement>document.getElementById("wheelB3")).value = "";
    (<HTMLInputElement>document.getElementById("wheelD4")).value = "";  
    (<HTMLInputElement>document.getElementById("wheelB4")).value = "";

    //Reset results
    let resultWheelBrand1 = <HTMLElement>document.getElementById('wheelResult');
    resultWheelBrand1.innerHTML ="Wheel 1: <br><strong>Brand</strong>: " + " <strong>Diameter</strong>: " +
    "<br>" +
    "Wheel 2: <br><strong>Brand</strong>: "  + " <strong>Diameter</strong>: " + "<br>" +
    "Wheel 3: <br><strong>Brand</strong>: " + " <strong>Diameter</strong>: " + "<br>" +
    "Wheel 4: <br><strong>Brand</strong>: " +  " <strong>Diameter</strong>: " 

}

