let Guests_Lists :string[] = ['Imran Khan' , 'nawaz sharif' , 'asif zardari'];

// for(let i=0; i<Guests_Lists.length; i++){
// console.log('Dear Mr. ' + Guests_Lists[i] + ',\n\nIt is our pleasureto invite you in our party.\n\nThank You\n\n')
// }

let absent_Guests :string = 'Imran Khan' ;
let new_Guests : string = 'Kamran Tessori' ;
Guests_Lists[0] = new_Guests ;
// for(let i=0; i<Guests_Lists.length; i++){
//     console.log('Dear Mr. ' + Guests_Lists[i] + ',\n\nIt is our pleasureto invite you in our party.\n\nThank You\n\n')
//     }
    // console.log(`Mr. ${absent_Guests} is not coming to the party.`) ;
    // console.log('Good News! we find Big Table so we are inviting 3 more Guests.')

//arey main 3 guests add kiye han
Guests_Lists.unshift('sir zia Khan') ;
Guests_Lists.splice(2 , 0 , 'Maryam Nawaz') ;
Guests_Lists.push('Bilawal Bhutto Zardari') ;
// yaha maine 6 guests k arey ko print kraya hai .
for(let i=0; i<Guests_Lists.length; i++){

    // console.log('Dear Mr. ' + Guests_Lists[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
}
//sorry msg to guests for not inviting.
// console.log('\nsorry we can not arrange big table, only two peoples will be invited.') ;
//yaha per maine guests remove kiye hain
while(Guests_Lists.length > 2){
let remove_Guests = Guests_Lists.pop() ;
// console.log(`sorry Mr. ${remove_Guests}, you are not invited for dinner.`) ;
}
// hmare bache hue 2 guests.
// for(let i=0; i<Guests_Lists.length; i++){

//     console.log('Dear Mr. ' + Guests_Lists[i] + ',\n\nYou are still invited.\n\nThank You\n\n')
// }
//maine sare guests arrey se remove krdeye han
Guests_Lists.splice(0, 2);
console.log(Guests_Lists) ;

    
//exersize 19

//print a msg including a numberof people you are inviting a dinner

console.log(`Total number of guests are: ${Guests_Lists.length}`);

for(let i=0; i<Guests_Lists.length; i++){

    console.log('Dear Mr. ' + Guests_Lists[i] + ',\n\nYou are still invited.\n\nThank You\n\n')
}
