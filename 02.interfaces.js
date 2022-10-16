var rect1 = {
    id: "UUID4",
    size: {
        width: 20,
        height: 30
    },
    color: "red"
};
var rect2 = {
    id: "UUID4",
    size: {
        width: 20,
        height: 30
    }
};
rect2.color = "green";
var rect3 = {}; // New format
var rect4 = {}; // Old format
var rect5 = {
    id: "UUID4",
    getArea: function () {
        return this.size.width * this.size.height;
    },
    size: {
        width: 5,
        height: 5
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '10'
};
