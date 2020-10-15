let allVehicles = [];

class Vehicles {
	brand;
	type;
	pic;
	fuelType;
	year;
	seats;
	price;

	constructor (brand, type, pic, fuelType, year, seats) {
		this.brand = brand;
		this.type = type;
		this.pic = pic;
		this.fuelType = fuelType;
		this.year = year;
		this.seats = seats;

		allVehicles.push(this);
	}
	showCars() {
		return ` 
				<div class="card" style="width: 18rem;">
				  <img src=${this.pic} class="card-img-top" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.brand}</h5>
				  </div>
				  <ul class="list-group list-group-flush Information">
				    <li class="list-group-item">Fuel: ${this.fuelType}</li>
				    <li class="list-group-item">Production year: ${this.year}</li>
				    <li class="list-group-item">Number of seats: ${this.seats}</li>
				  </ul>
				  <div class="card-body" type="${this.type}">
				    <button class="Calculate">Calculate price</button>
				    <a href="#" class="card-link" style="visibility: hidden">${this.price}&euro; / day</a>
				  </div>
				</div>
		 `
	}

	calculatePrice() {
		if (this.type == "car"){
			var x = 100;
		}else if (this.type == "moto") {
			var x = 50;
		}else if (this.type == "truck") {
			var x = 150;
		}
		var y = Math.floor(200/(2020 - this.year))
		this.price = x + y;
        return this.price;
    }

}

class motocycles extends Vehicles {
	sound;
	speed;
	constructor (brand, type, pic, fuelType, year, seats, sound, speed) {
		super(brand, type, pic, fuelType, year, seats);
		this.sound = sound;
		this.speed = speed;

		
	}
	showCars() {
	return ` 
				<div class="card" style="width: 18rem;">
				  <img src=${this.pic} class="card-img-top" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.brand}</h5>
				  </div>
				  <ul class="list-group list-group-flush Information">
				    <li class="list-group-item">Fuel: ${this.fuelType}</li>
				    <li class="list-group-item">Production year: ${this.year}</li>
				    <li class="list-group-item">Number of seats: ${this.seats}</li>
				    <li class="list-group-item">It makes: ${this.sound}</li>
				    <li class="list-group-item">Top speed: ${this.speed}</li>
				  </ul>
				  <div class="card-body" type="${this.type}">
				    <button class="Calculate">Calculate price</button>
				    <a href="#" class="card-link" style="visibility: hidden">${this.price}&euro; / day</a>
				  </div>
				</div>
		 `
	}

}

class trucks extends Vehicles {
	cargo;
	constructor (brand, type, pic, fuelType, year, seats, cargo) {
		super(brand, type, pic, fuelType, year, seats);
		this.cargo = cargo;

		
	}
	showCars() {
		return ` 
				<div class="card" style="width: 18rem;">
				  <img src=${this.pic} class="card-img-top" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.brand}</h5>
				  </div>
				  <ul class="list-group list-group-flush Information">
				    <li class="list-group-item">Fuel: ${this.fuelType}</li>
				    <li class="list-group-item">Production year: ${this.year}</li>
				    <li class="list-group-item">Number of seats: ${this.seats}</li>
				    <li class="list-group-item">Max cargo: ${this.cargo}</li>
				  </ul>
				  <div class="card-body" type="${this.type}">
				    <button class="Calculate">Calculate price</button>
				    <a href="#" class="card-link" style="visibility: hidden">${this.price}&euro; / day</a>
				  </div>
				</div>
		 `
	}
}

let newCar = new Vehicles ("Audi", "car", "audi.jpg", "diesel", 2018, 5)
let newBike = new motocycles ("Kawasaki", "moto", "kawasaki.jpg", "elektro", 2017, 2, "Vroom vroom", "very fast")
let newTruck = new trucks ("Volkswagen", "truck", "vw.jpg", "diesel", 2015, 3, "4000l")
let newCar2 = new Vehicles ("Audi", "car", "audi.jpg", "diesel", 2014, 5)


allVehicles.forEach(nothing => nothing.calculatePrice())
console.table(allVehicles)




allVehicles.forEach(something => $(".vehicles").append(something.showCars()))

$(document).ready(function() {
	$(".Calculate").click(function() {
		$(this).siblings().css("visibility","visible")

	})

})

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