
let magician :string[] = ['Harry Potter' ,'Hermione Granger' ,'Ron Wwasley' ,'Albus Dumbledore'];

function copyArray(arr:string[]){
    return [...arr]
}


function make_great (magicianArry: string[] ){

    for(let i=0; i<magicianArry.length; i++){

        magicianArry[i] = 'the great ' + magicianArry[i]
    }
}




function show_magicians(magicians:string[]){
  
    magicians.forEach(element => {
  
        console.log(element);
    });

}

const copyMagicianArray = copyArray(magician);

make_great(copyMagicianArray);
console.log('\n\nThis is a my original array');
show_magicians(magician);

console.log('\n\nThis is a modify copy of the array');
show_magicians(copyMagicianArray);