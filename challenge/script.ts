let allDogs = [];

class Dogs {
	name;
	breed;
	pic;
	age;
	hobby;
	quote?;

	constructor (name, breed, pic, age, hobby, quote?) {
		this.name = name;
		this.breed = breed;
		this.pic = pic;
		this.age = age;
		this.hobby = hobby;
		this.quote = quote;

		allDogs.push(this);
	}
	showDogs() {
		return ` 
				<div class="card addOne" style="width: 18rem;">
				  <img src=${this.pic} class="card-img-top Favorite" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.name}</h5>
				  </div>
				  <ul class="list-group list-group-flush Information">
				    <li class="list-group-item">Age: ${this.age}</li>
				    <li class="list-group-item">Breed: ${this.breed}</li>
				    <li class="list-group-item">Hobby: ${this.hobby}</li>
				    <li class="list-group-item">Quote: ${this.quote}</li>
				  </ul>
				</div>
		 `
	
		}
}

let newDog = new Dogs ("Roger", "not german shepherd", "roger.jpg", 7, "not running", "Woof woof")
let newDog2 = new Dogs ("Not Roger", "not german shepherd", "roger.jpg", 3, "eating", "something inspiring")
let newDog3 = new Dogs ("Fred", "blanket dog", "roger.jpg", 8, "sleeping", "Who's the good boy?")

allDogs.forEach(something => $(".dogs").append(something.showDogs()))


$(document).ready(function() {
	$(".Favorite").one("click", function() {
		var itm = $(this).parent().clone();
		$("#liked").append(itm);
	});

	$("#liked").on("click", ".Favorite", function() {
		$(this).parent().remove()
	})
});