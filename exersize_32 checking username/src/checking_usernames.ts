
let current_users: string[] = ['TaHa' , 'DaNiyal', 'salMan', 'Hamza' , 'john' ];

let new_users: string[] =['Bilal' , 'TaHa' , 'Dawood' , 'Jameel' , 'Hamza'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`the username ${newUsername} is not availableplease write a different uwername`);
    }
    else 
    console.log(`The username ${newUsername} is available`);
})