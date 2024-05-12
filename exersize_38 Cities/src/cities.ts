
function describe_city(city: string , country: string = 'Default Country'){
    console.log(` ${city} is in ${country}`);
}
describe_city('karachi' , 'pakistan');

describe_city('tokya' , 'japan');

describe_city('paris');
