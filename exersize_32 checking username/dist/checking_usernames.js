"use strict";
let current_users = ['TaHa', 'DaNiyal', 'salMan', 'Hamza', 'john'];
let new_users = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'Hamza'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`the username ${newUsername} is not availableplease write a different uwername`);
    }
    else
        console.log(`The username ${newUsername} is available`);
});
