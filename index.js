const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){    
    return drivers.slice (0,2);
}

const returnLastTwoDrivers = function(){    
    return drivers.slice (2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers);
}
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));