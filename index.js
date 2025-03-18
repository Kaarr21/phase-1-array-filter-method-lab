// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, searchString) {
    return drivers.filter(driver => driver.toLowerCase() === searchString.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()))
};

function matchName(drivers, name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}