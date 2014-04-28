<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <style type="text/css">
      @import url(http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);
      @import url(http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic);

      body { font-family: 'Droid Serif'; }
      h1, h2, h3 {
        font-family: 'Yanone Kaffeesatz';
        font-weight: normal;
      }
    </style>
  </head>
  <body>
    <textarea id="source">

class: center, middle

# Understanding the Javascript Event Loop

---

## Introduction

One of JavaScript's strengths is how it handles asynchronous code. Rather than
blocking the thread, async code gets pushed to an event queue that fires after
all other code executes

So, is JS really async?

---

## Async in JS

Most basic async functions are `setTimeout` and `setInterval`

```javascript

console.log( "a" );

setTimeout(function() {
    console.log( "c" )
}, 1000 );

setTimeout(function() {
    console.log( "d" )
}, 2000 );

setTimeout(function() {
    console.log( "e" )
}, 500 );

console.log( "b" );
```

---

## Timers
* `setTimeout` is actually unpredictable, In fact, even the HTML5 spec talks about this issue: "This API does not guarantee that timers will run exactly on schedule. Delays due to CPU load, other tasks, etc, are to be expected."
* A timeout will not execute until all of the remaining code in a block has executed
* Async functions like setTimeout and setInterval are pushed onto an queue known as the ***Event Loop***
* For node.js we have process.nextTick

---

## Event Loop
* It's a queue of callback functions
* When an async function executes, the callback function is pushed into the queue
* It doesn't start processing the event loop until the code after an async function has executed
* JS is not multi-threaded even though it appears to be so. At least in the
  browser context
* The event loop is a first-in-first-out (FIFO) queue

---

## MultiThreaded?
* Makes use of separate CPU Cores as "Threads"
* Uses a single process within the OS
* True concurrency
* Can have Race conditions (Simultaneous memory use)
* Ran out of GHz, hardware adds more cores

---

## JS is SingleThreaded
* Makes use of a single CPU core
* CPU intensive work is never "concurrent"
* Easier to pull off, as in less technical difficulties

---

## Technical Implementation

Stack:
  - Functions to run and available variables
  - More added as code is run
  - Stuff guruanted to run in order

Heap: 
  - "Chaotic" listing of objects

Queue:
  - Gets added to stack when stack empty
  - `setTimeout` and `setInterval` added here

---

##Example Code-run

```javascript

console.log('Adding code to the queue');
setTimeout(function () { //Added somewhere in Heap
  console.log('Running next code from queue');
}, 0);

function a(x) { //Added somewhere in Heap
  console.log('a() frame added to stack');
  b(x);
  console.log('a() frame removed from stack');
}

function b(y) { //Added somewhere in Heap
  console.log('b() frame added to stack');
  console.log('Value passed in is ' + y);
  console.log('b() frame removed from stack');
}

console.log('starting  work for this stack');
a(42);
console.log('Ending work for this stack');

/* Adding code to the queue
 * Starting work for this stack
 * a() frame added to stack
 * b() frame added to stack
 * Value passed in is 42
 * b() frame removed from stack
 * a() frame removed from stack
 * Ending work for this stack
 * Running next code from queue
 */
```

---

## Your App is mostly asleep
* Browser waits for a click to happen

---

## Event Loop advantages
* No deadlocks or race conditions
* Typical web apps spend their time waiting on I/O
* Perform I/O operations "in parallel" easily
* There is no special syntax for it to work in JS

---

## Event Loop disadvantages
* CPU intensive work will block your process
* It isn't making use of those 8 cores you've got
* Memory leaks are possible

---

## Conclusion
* Great for I/O bound applications (most web apps)
* Horrible for CPU bound applications
* "Fakes" concurrency

 </textarea>
    <script src="http://gnab.github.io/remark/downloads/remark-latest.min.js" type="text/javascript">
    </script>
    <script type="text/javascript">
      var slideshow = remark.create();
    </script>
  </body>
</html>
