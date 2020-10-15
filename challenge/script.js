var allDogs = [];
var Dogs = /** @class */ (function () {
    function Dogs(name, breed, pic, age, hobby, quote) {
        this.name = name;
        this.breed = breed;
        this.pic = pic;
        this.age = age;
        this.hobby = hobby;
        this.quote = quote;
        allDogs.push(this);
    }
    Dogs.prototype.showDogs = function () {
        return " \n\t\t\t\t<div class=\"card addOne\" style=\"width: 18rem;\">\n\t\t\t\t  <img src=" + this.pic + " class=\"card-img-top Favorite\" alt=\"...\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t  </div>\n\t\t\t\t  <ul class=\"list-group list-group-flush Information\">\n\t\t\t\t    <li class=\"list-group-item\">Age: " + this.age + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Breed: " + this.breed + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Hobby: " + this.hobby + "</li>\n\t\t\t\t    <li class=\"list-group-item\">Quote: " + this.quote + "</li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t ";
    };
    return Dogs;
}());
var newDog = new Dogs("Roger", "not german shepherd", "roger.jpg", 7, "not running", "Woof woof");
var newDog2 = new Dogs("Not Roger", "not german shepherd", "roger.jpg", 3, "eating", "something inspiring");
var newDog3 = new Dogs("Fred", "blanket dog", "roger.jpg", 8, "sleeping", "Who's the good boy?");
allDogs.forEach(function (something) { return $(".dogs").append(something.showDogs()); });
$(document).ready(function () {
    $(".Favorite").one("click", function () {
        var itm = $(this).parent().clone();
        $("#liked").append(itm);
    });
    $("#liked").on("click", ".Favorite", function () {
        $(this).parent().remove();
    });
});
