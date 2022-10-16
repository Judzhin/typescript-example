var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
    }
    TypeScript.prototype.info = function (name) {
        return "[".concat(name, "]: TypeScript version ").concat(this.version);
    };
    return TypeScript;
}());
// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
//================================================================
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = "";
        this.color = "black";
    }
    Animal.prototype.go = function () {
        console.log("Go");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.setVoice = function (voice) {
        // super.voice = voice;
        this.voice = voice;
    };
    return Dog;
}(Animal));
var dog = new Dog();
// dog.voice;
dog.setVoice("Woof");
console.log(dog.color);
//================================================================
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        console.log("Button render");
    };
    Button.prototype.info = function () {
        return "This is a button";
    };
    return Button;
}(Component));
