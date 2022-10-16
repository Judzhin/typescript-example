function strip(x) {
    if (typeof x === "number")
        return x.toFixed(2);
    return x.trim();
}
var MResponse = /** @class */ (function () {
    function MResponse() {
    }
    return MResponse;
}());
var Err = /** @class */ (function () {
    function Err() {
    }
    return Err;
}());
function handlel(res) {
    if (res instanceof MResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    // ...
}
setAlertType('alert');
setAlertType('success');
// setAlertType('default');
