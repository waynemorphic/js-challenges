//lets create a loop that returns numbers between 1 and 100

let numbers = [];

for (i = 0; i <= 100; i++){
    numbers.push(i);
}
console.log(numbers);

// loop that returns even numbers

let evenNumbers = [];
for (i = 0; i <= 100; i++){
    if (i % 2 == 0){
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);