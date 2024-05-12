"use strict";
function make_shirt(size = 'large', text = 'i love typescript') {
    console.log(`creating a ${size} shirt with the message : ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'i love python');
