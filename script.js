/* სპრედ ოპერატორის გამოყენება:
შექმენით მასივი numbers, რომელშიც მოიცავს მარტივი მთელი რიცხვები (მაგ. [3, 7, 12, 5, 8]).
Mapping მეთოდი (map):
გამოიყენეთ map მეთოდი ახლანდელ რიცხვებზე და შექმენით ახალი მასივი squaredNumbers, სადაც თითოეული რიცხვი მოდის კვადრატად. */


const number = [3, 7, 12, 5, 8];

const squaredNumbers = number.map(num => num * num);
console.log(squaredNumbers);

/* 
Filtering მეთოდი (filter):
გამოიყენეთ filter მეთოდი, რომელიც numbers მასივიდან ამოღებს მხოლოდ ლუწ რიცხვებს და შეინახეთ მასივში evenNumbers.*/


const evenNumbers = number.filter(numm => numm % 2 === 0);
console.log(evenNumbers);



/* 
Reduce მეთოდი (reduce):
გამოიყენეთ reduce მეთოდი, რომელიც დააჯამებს მასივის და დააბრუნებს შედეგს.*/

const sum = number.reduce((accum, curentValue) => accum + curentValue, 0);
console.log(sum);


/* ლოგიკური ოპერატორები:
შექმენით ფუნქცია checkNumbers, რომელიც:
მიიღებს ერთ რიცხვს არგუმენტად.
დააბრუნებს true, თუ რიცხვი მეტია 10-ზე და ლუწია.
დააბრუნებს false ყველა სხვა შემთხვევაში.
შედეგის დაბეჭდვა: */



function checkNumbers(num) {
    return (num > 10 && num % 2 === 0) ? true : false;
}


console.log(checkNumbers(3)); 
console.log(checkNumbers(7));  
console.log(checkNumbers(12)); 
console.log(checkNumbers(5));  
console.log(checkNumbers(8));  
