
function myFunction() {

    var brand = document.getElementById("brand").value;

    if (brand ==="") {

        document.getElementById("demo").innerHTML = "Please, enter car brand.";
        
        }else{
        function Vehicle(brand, numWheels){
            this.brand = brand;
            this.numWheels = numWheels;
            this.isAvailable = true;
        }

        function Car (brand){
            this.brand = brand;
            this.numWheels = 4;
        }

        function Cabriolet (brand){
            this.brand = brand;
            this.numDoors = 2;
        }

        Car.prototype = new Vehicle();
        Cabriolet.prototype = new Car();

        var myCabriolet = new Cabriolet(brand);

        document.getElementById("brandName").innerHTML = myCabriolet.brand;
        document.getElementById("numWheels").innerHTML = myCabriolet.numWheels;
        document.getElementById("available").innerHTML = myCabriolet.isAvailable;
    }
}
