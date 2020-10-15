var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var allVehicles = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, type, pic, fuelType, year, seats) {
        this.brand = brand;
        this.type = type;
        this.pic = pic;
        this.fuelType = fuelType;
        this.year = year;
        this.seats = seats;
        allVehicles.push(this);
    }
    Vehicles.prototype.showCars = function () {
        return " \n\t\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n\t\t\t\t  <img src=" + this.pic + " class=\"card-img-top\" alt=\"...\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.brand + "</h5>\n\t\t\t\t  </div>\n\t\t\t\t  <ul class=\"list-group list-group-flush Information\">\n\t\t\t\t    <li class=\"list-group-item\">Fuel: " + this.fuelType + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Production year: " + this.year + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Number of seats: " + this.seats + "</li>\n\t\t\t\t  </ul>\n\t\t\t\t  <div class=\"card-body\" type=\"" + this.type + "\">\n\t\t\t\t    <button class=\"Calculate\">Calculate price</button>\n\t\t\t\t    <a href=\"#\" class=\"card-link\" style=\"visibility: hidden\">" + this.price + "&euro; / day</a>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t ";
    };
    Vehicles.prototype.calculatePrice = function () {
        if (this.type == "car") {
            var x = 100;
        }
        else if (this.type == "moto") {
            var x = 50;
        }
        else if (this.type == "truck") {
            var x = 150;
        }
        var y = Math.floor(200 / (2020 - this.year));
        this.price = x + y;
        return this.price;
    };
    return Vehicles;
}());
var motocycles = /** @class */ (function (_super) {
    __extends(motocycles, _super);
    function motocycles(brand, type, pic, fuelType, year, seats, sound, speed) {
        var _this = _super.call(this, brand, type, pic, fuelType, year, seats) || this;
        _this.sound = sound;
        _this.speed = speed;
        return _this;
    }
    motocycles.prototype.showCars = function () {
        return " \n\t\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n\t\t\t\t  <img src=" + this.pic + " class=\"card-img-top\" alt=\"...\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.brand + "</h5>\n\t\t\t\t  </div>\n\t\t\t\t  <ul class=\"list-group list-group-flush Information\">\n\t\t\t\t    <li class=\"list-group-item\">Fuel: " + this.fuelType + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Production year: " + this.year + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Number of seats: " + this.seats + "</li>\n\t\t\t\t    <li class=\"list-group-item\">It makes: " + this.sound + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Top speed: " + this.speed + "</li>\n\t\t\t\t  </ul>\n\t\t\t\t  <div class=\"card-body\" type=\"" + this.type + "\">\n\t\t\t\t    <button class=\"Calculate\">Calculate price</button>\n\t\t\t\t    <a href=\"#\" class=\"card-link\" style=\"visibility: hidden\">" + this.price + "&euro; / day</a>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t ";
    };
    return motocycles;
}(Vehicles));
var trucks = /** @class */ (function (_super) {
    __extends(trucks, _super);
    function trucks(brand, type, pic, fuelType, year, seats, cargo) {
        var _this = _super.call(this, brand, type, pic, fuelType, year, seats) || this;
        _this.cargo = cargo;
        return _this;
    }
    trucks.prototype.showCars = function () {
        return " \n\t\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n\t\t\t\t  <img src=" + this.pic + " class=\"card-img-top\" alt=\"...\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.brand + "</h5>\n\t\t\t\t  </div>\n\t\t\t\t  <ul class=\"list-group list-group-flush Information\">\n\t\t\t\t    <li class=\"list-group-item\">Fuel: " + this.fuelType + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Production year: " + this.year + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Number of seats: " + this.seats + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Max cargo: " + this.cargo + "</li>\n\t\t\t\t  </ul>\n\t\t\t\t  <div class=\"card-body\" type=\"" + this.type + "\">\n\t\t\t\t    <button class=\"Calculate\">Calculate price</button>\n\t\t\t\t    <a href=\"#\" class=\"card-link\" style=\"visibility: hidden\">" + this.price + "&euro; / day</a>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t ";
    };
    return trucks;
}(Vehicles));
var newCar = new Vehicles("Audi", "car", "audi.jpg", "diesel", 2018, 5);
var newBike = new motocycles("Kawasaki", "moto", "kawasaki.jpg", "elektro", 2017, 2, "Vroom vroom", "very fast");
var newTruck = new trucks("Volkswagen", "truck", "vw.jpg", "diesel", 2015, 3, "4000l");
var newCar2 = new Vehicles("Audi", "car", "audi.jpg", "diesel", 2014, 5);
allVehicles.forEach(function (nothing) { return nothing.calculatePrice(); });
console.table(allVehicles);
allVehicles.forEach(function (something) { return $(".vehicles").append(something.showCars()); });
$(document).ready(function () {
    $(".Calculate").click(function () {
        $(this).siblings().css("visibility", "visible");
    });
});
/*
$(document).ready(function() {
    $(".Calculate").click(function() {
        var index = $(this).parent().attr("type")
        if (index=="car") {
            $(this).siblings().html("150&euro; / day");
        }else if (index=="moto") {
            $(this).siblings().html("90&euro; / day");
        }else if (index=="truck") {
            $(this).siblings().html("180&euro; / day");
        }
        console.log(index)
    })

});*/ 
