//write a program that creates objects containing these items.

//let person_Name : string = 'Taha' ;

//const personName_array : string[] = ['Person' , 'Car' , 'Cold Drink' ] ;

interface person {
    age : number ,
    name :string ,
    nationality : string,
    student : Boolean
}

let person : person = {
    age : 26 ,
    name : 'Taha' ,
    nationality : 'Pakistani' ,
    student : true
}

console.log(person) ;

interface car {
    maker : string ,
    color : string ,
    automatic : boolean
}


let car = {
    maker : 'toyata' ,
    color : 'black' ,
    automatic : true


}
console.log(car) ;

