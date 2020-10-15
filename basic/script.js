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
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.greeting = function () {
        return "Hello there, my name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var newGuy = new Person("Karel", 20, "developer");
$("body").append("<h1> " + newGuy.greeting() + " </h1>");
var PersonMoreInfo = /** @class */ (function (_super) {
    __extends(PersonMoreInfo, _super);
    function PersonMoreInfo(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    PersonMoreInfo.prototype.greeting2 = function () {
        return _super.prototype.greeting.call(this) + " and I get " + this.salary + ", and I work in " + this.jobLocation;
    };
    return PersonMoreInfo;
}(Person));
var newGuy2 = new PersonMoreInfo("Alan", 30, "youtuber", "$200", "Miami");
$("body").append("<h2 style=\"color:red\"> " + newGuy2.greeting2() + " </h2>");
