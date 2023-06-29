const findTheOldest = function(array) {
    // console.log(array);
    // get first person
    let oldestPerson = array[0];
    let oldestAge = getAge(array[0].yearOfBirth, array[0].yearOfDeath);
    let arrayLength = array.length;
    for (let i = 1; i < arrayLength; i++){
        // get next name
        let curPerson = array[i];
        // get next age
        let curPersonAge = getAge(curPerson.yearOfBirth, curPerson.yearOfDeath);
        console.log("curName: " + curPerson.name + " curPersonAge: " + curPersonAge);
        // compare ages
        if (curPersonAge > oldestAge){
            oldestPerson = curPerson;
            oldestAge = curPersonAge;
        }
    }
    // return oldest
    return oldestPerson;
};

function getAge(birth, death){
    if (!death){
        return (new Date().getFullYear() - birth);
    }
    return (death - birth);
}

// Do not edit below this line
module.exports = findTheOldest;
