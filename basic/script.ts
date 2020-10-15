class Person {
	name = "";
	age = "";
	jobTitle = "";
	constructor(name, age, jobTitle) {
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}
	greeting () {
		return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
	}
}

let newGuy = new Person ("Karel", 20, "developer");

$("body").append(`<h1> ${newGuy.greeting()} </h1>`);

class PersonMoreInfo extends Person {
	salary = "";
	jobLocation = "";
	constructor(name, age, jobTitle, salary, jobLocation) {
		super(name, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}
	greeting2() {
		return `${super.greeting()} and I get ${this.salary}, and I work in ${this.jobLocation}`
	}
}

let newGuy2 = new PersonMoreInfo ("Alan", 30, "youtuber", "$200", "Miami")
$("body").append(`<h2 style="color:red"> ${newGuy2.greeting2()} </h2>`);