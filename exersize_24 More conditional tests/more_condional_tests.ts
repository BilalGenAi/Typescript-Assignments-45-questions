// equality and inequality test 01
console.log("Equality test with strings: ", "Apple" === "Apple") ;

// equality and inequality test 02
console.log("Equality test with strings: ", ("Apple" as string) != "Orange") ;

//Tests using the lower case function
console.log("lower case function tests: " , "HELLO".toLowerCase() === "hello");

//Numwerical tests involving equality 
console.log("Equality test with strings: ", 26 ===26);

//Numwerical tests involving inequality,
console.log("Inquality test with numbers : ", (26 as number) != 35);

//greater than test,
console.log("Greater than test:" , 10 > 5);

//less than test
console.log("Less than test: ", 5 < 10 ) ;

//greater than orequal to
console.log("Greater than or equal to test" , 10>= 10) ;

//less than or equal to
console.log("less than or equal to " , 5 <= 10);

//tests using "and"  operator
console.log("and operator test: " , 5===5 && 10 > 5);

//tests using "or" operator
console.log("or operator test: " , 5===5 || false);

//testwhether an item is in array
const fruits : string[] = ['Nashpati' , 'Banana' , 'Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati")); 

//test wheter ab item is notin a array
console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));
