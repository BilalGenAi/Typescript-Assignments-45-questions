//alien colors #3 turn your if-else chain from Exersize 5 - 4 into an if else chain.
let alienColors: string = "green";

//if the alien color is green , print a message that the player earned 5 points
//if the alien color is yellow , print ameesage that the player earned 10 points
//if the alien color is red , print a message that the player earned 15 points
//write three versions of this program , making sure each message is printed for the appropriate color alien

//version 1 of the program
if(alienColors === "green"){
    console.log("version 1 :player earned 5 points");
}else if(alienColors === "yellow"){
    console.log("player earned 10 points");
}else if(alienColors === "red"){
    console.log("player earned 15 points");
}
else{
    console.log(" please select right color")
}
//version 2 of the program
alienColors = "yellow";
if(alienColors === "green"){
    console.log("player earned 5 points");
}else if(alienColors === "yellow"){
    console.log("version 2: player earned 10 points");
}else if(alienColors === "red"){
    console.log("player earned 15 points");
}
else{
    console.log(" please select right color")
}

//version 3 of the program
alienColors = "red";
if(alienColors === "green"){
    console.log("player earned 5 points");
}else if(alienColors === "yellow"){
    console.log("player earned 10 points");
}else if(alienColors === "red"){
    console.log("version 3: player earned 15 points");
}
else{
    console.log(" please select right color")
}
