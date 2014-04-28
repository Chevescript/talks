// No recursion or looping, just math
function fibonacci1(n) {
    return Math.round(Math.pow((Math.sqrt(5) + 1) / 2, Math.abs(n)) / Math.sqrt(5)) * (n < 0 && n % 2 ? -1 : 1);
}
    
// Using a loop and an array
function fibonacci2(n) {
    var i, fibs = [0, 1];
    for (i = 0; i++ < n;) {
	fibs.push(fibs[0] + fibs[1]);
	fibs.shift();
    }
    return fibs[0];
}

//optimized smart fibs
function osFib(n,last1){ //optimized smart fib
    if(n<3) return n && 1;  //0,1,1  2,3,5,8,13
    var last2 = osFib(n-2);
    last1 || (last1 = osFib(n-1,last2));
    return last1 + last2;
}

//basic recursive function @clottes
//exponentially slower (calls itself too much...)
function memBasic(n) {
    return n < 2 ? n : memBasic(n - 1) + memBasic(n - 2);
}

//Please go to http://jsperf.com/fibonacci-numbers/5, so you can see the complete example.
