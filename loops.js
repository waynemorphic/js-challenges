//lets create a loop that returns numbers between 1 and 100

let numbers = [];

for (i = 0; i <= 100; i++){
    numbers.push(i);
}
//console.log(numbers);

// loop that returns even numbers

let evenNumbers = [];
for (i = 0; i <= 100; i++){
    if (i % 2 == 0){
        evenNumbers.push(i);
    }
}
//console.log(evenNumbers);

//loop that returns odd numbers 

let oddNumbers = [];
for (i = 0; i <= 100; i++){
    if (i % 2 == 1){
        oddNumbers.push(i);
    }
}
// console.log(oddNumbers);

//loop that returns numbers that have even squares (square roots)

let squareNumbers = [];

for (i = 0; i <= 100; i++){
    if (i % Math.sqrt(i) == 0){ //the modulus of number and its square root is an even number, return the number
        squareNumbers.push(i);
    }
}
console.log(squareNumbers);
