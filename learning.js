// First program as always

console.log("hello world");

// Trip cost

const gasPrice = 5.45;
const gasUsage = 7;
const tripMileage = 600;

const gasLitters = tripMileage / gasUsage;

const result = gasLitters * gasPrice;

console.log(result.toFixed(2));

