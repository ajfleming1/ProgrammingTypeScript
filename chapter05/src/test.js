var DogClass = /** @class */ (function () {
    function DogClass2(name) {
        this.name = name;
    }
    DogClass2.prototype.getName = function () {
        return this.name;
    };
    return DogClass2;
}());


let x = new DogClass2("Rosie");
