
//Write comments in the code to show what those lines of code are doing.



let x = 5;//Declares and initializes a variable x by assigning it the value 5
let y = 3;//Declares and initializes a variable y by assigning it the value 3

//Arithmetic operators
//Addition operator
console.log('x + y = ', x + y);  //prints out the string of 'x + y =' followed by concatenating it with the calculated value of adding 2 variables x and y

//Subtraction operator
console.log('x - y = ', x - y);  //prints out the string of 'x - y =' followed by concatenating it with the calculated value of subtracting variable y from x


//Multiplication operator
console.log('x * y = ', x * y);  //prints out the string of 'x * y =' followed by concatenating it with the calculated value of multiplying 2 variables x and y


//Division operator
console.log('x / y = ', x / y);  //prints out the string of 'x / y =' followed by concatenating it with the calculated value of dividing  variable x by y

//Remainder operator
console.log('x % y = ', x % y);   //prints out the string of 'x % y =' followed by concatenating it with the calculated value of the modulus of variables x and y that is to say the remainder after dividing x by y


// increment operator
console.log('++x = ', ++x); //prints out the string of '++x =' followed by incrementing the variable x before printing it out as well

console.log('x++ = ', x++); //prints out the string of 'x++ =' as well as the value of x ,then later increments the value x by 1
console.log('x = ', x);     //prints out the string of 'x =' followed by the value of x 

//decrement operator
console.log('--x = ', --x); //prints out the string of '--x =' followed by decrementing the variable x before printing it out as well

console.log('x-- = ', x--); //prints out the string of 'x-- =' as well as the value of x ,then later decrements the value x by 1
console.log('x = ', x);     //prints out the string of 'x =' followed by the value of x 

//exponential operator
console.log('x ** y =', x ** y);//prints out the string of 'x ** y =' followed by concatenating it with the calculated value of x raised to the power y

//Comparison operators
// Equal to
console.log(2 == 2); // true-  numerical 2 is equal to numerical 2
console.log(2 == '2'); // true-  because when compating a string and a number.the computer type converts the number into a string and compares what is inside the string with whatever is entailed in the string it was first given for comparison, since here its comparing a transformed string 2 with given string '2' they are the same hence its true

//not equal to
console.log(3 != 2); // true-  numerical 3 is not equal to numerical 2
console.log('hello' != 'Hello'); // true-  because the computer is comparing 2 strings character by character and since the numeric representation of h is not the same as the one for H hello is different fron Hello


//Exactly equal to
console.log(2 === 2); // true-  because the values and datatypes are exactly the same
console.log(2 === '2'); // false- the datatypes are different ,the first a number and the second a string


//not exactly equal to
console.log(2 !== '2'); // true-  because the datatypes are diffrent one is a string and the other a number so the console statement is true
console.log(2 !== 2); // false-  because the datatypes and values are exactly same so the console statement is false

