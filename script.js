/*var x;
x=5;*/
/*function add(p1, p2) {
    return p1 + p2;   // The function returns the addition of p1 and p2
  }
console.log(add(5,79456));
  add(5,6);*/
/*var fruits=["banana","mango","apple","watermelon"];
console.log(fruits)*/
/*var meriem={
    age:28,
    favorite:["harry poter","iron man","aqua man"],
    hometown : "Algeria",
    date : Date().toString().split(' ').splice(1,3).join(' '),
};*/



// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.
var speed = 1;
var x = 300;
var y = 300;
function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(x, y);
}

function draw() {
  //call your functions and do your drawing here.
  // please erase code below once you are working.
  background(100, 60, 98);
  fill(255, 255, 255, 255);
  ellipse(x / 2, y / 2, 30, 30);
  //twoCircles();
  if (y < 200) {
    y = y + speed;
  }
  if (y > 200) {
    y = y - speed;
  }
}

// write functions here that are called in your setup or draw function. please remove this one.
/*const twoCircles = () => {
  fill(255, 0, 0);
  ellipse(x / 2, y / 2, 10, 10);
  fill(0, 255, 0);
  ellipse(20, 20, 20, 20);
};*/


