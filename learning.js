// First program as always

console.log("hello world");

// Trip cost

const gasPrice = 5.45;
const alcoholPrice = 4.99;
const nitrometanePrice = 51.5;
const gasUsage = 7;
const tripMileage = 600;
const fuel = 'gas';
const gasLitters = tripMileage / gasUsage;

if (fuel === 'alcohol') {
    const result = gasLitters * alcoholPrice;
    console.log(result.toFixed(2));
} else if (fuel === 'gas') {
    const result = gasLitters * gasPrice;
    console.log(result.toFixed(2));
} else {
    const result = gasLitters * nitrometanePrice;
    console.log(result.toFixed(2));
}






