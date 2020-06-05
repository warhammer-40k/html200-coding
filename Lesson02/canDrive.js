/*
This bonus homework is not required. All required assignments for this lesson must be submitted first. The points do not count toward your passing grade in the course.

Write a program called canDrive.js. Create the code in codpen.io and then copy that code into a document and add to your GitHub in the Lesson02 directory.

Declare a first name, a last name, an age and a variable that is 16. Your program should compare the driver's age with the driving age. If they are old enough to drive it should console log the first name and last name can drive and how long they've driven. If they are too young, log a countdown from 5.

Extra bonus bonus. Use string interpolation

*/

let firstname = "Karen";
let lastname = "Jolly";
let age = 35;

let minage = 16;
if (age >= minage) {
  let drivetime = age - minage;
  console.log(`${firstname} ${lastname} has been driving for ${drivetime} years`);
}
else {
  console.log('Countdown starting now...');
  let n = 5;
  for (i = 0; i < 5; i++) {
    console.log(n);
    n--;
  }
}
