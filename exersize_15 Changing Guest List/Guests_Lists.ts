

let Guests_Lists :string[] = ['Imran Khan' , 'nawaz sharif' , 'asif zardari'];

for(let i=0; i<Guests_Lists.length; i++){

console.log('Dear Mr. ' + Guests_Lists[i] + ',\n\nIt is our pleasureto invite you in our party.\n\nThank You\n\n')


}

let absent_Guests :string = 'Imran Khan' ;

let new_Guests : string = 'Kamran Tessori' ;

Guests_Lists[0] = new_Guests ;

for(let i=0; i<Guests_Lists.length; i++){

    console.log('Dear Mr. ' + Guests_Lists[i] + ',\n\nIt is our pleasureto invite you in our party.\n\nThank You\n\n')
    
    
    }

    console.log(`Mr. ${absent_Guests} is not coming to the party.`) 