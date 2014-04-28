window.globalVar = 0;

var closedFunc = (function () {
    var closedOver = 0;

    return (function () {
	var localVar = 0;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
	closedOver += 1;
    });
})();

var localFunc = (function () {
    var closedOver = 0;

    return (function () {
	var localVar = 0;
	localVar += 1;
	localVar += 1;
	localVar += 1;
	localVar += 1;
	localVar += 1;
	localVar += 1;
	localVar += 1;
	localVar += 1;
	localVar += 1;
    });    
})();

var globalFunc = (function () {
    var closedOver = 0;

    return (function () {
	var localVar = 0;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
	globalVar += 1;
    });    
})();
