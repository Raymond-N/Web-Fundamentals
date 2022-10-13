// write a function called fizzbuzz
//write a for loop starting at 1 going to 100
// 




function fizzBuzz() {
    for(var num = 1; num <= 100; num++) {
        if(num % 15 == 0) {
            console.log("FizzBuzz");
        } else if(num % 5 == 0) {
            console.log("Buzz");
        } else if(num % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(num);
        }
    }
}
fizzBuzz();