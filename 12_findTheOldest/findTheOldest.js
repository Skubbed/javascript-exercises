const peopleList = [
    {
      name: "Carly",
      yearOfBirth: 1950,
    },
    {
      name: "Ray",
      yearOfBirth: 1962, //49
      yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912, //29
        yearOfDeath: 1941,
      },
      {
        name: "Son",
        yearOfBirth: 1922, //19
        yearOfDeath: 1941,
      },
  ]

const findTheOldest = function(people) {
    return people.reduce(findOlder);
};


function findOlder(person1, person2){
    let age1, age2;

    if(Object.hasOwn(person1, "yearOfDeath")){
        age1 = person1.yearOfDeath - person1.yearOfBirth;
    }
    else{
        age1 = new Date().getFullYear() - person1.yearOfBirth;

    }
    if(Object.hasOwn(person2, "yearOfDeath")){
        age2 = person2.yearOfDeath - person2.yearOfBirth;
    }
    else{
        age2 = new Date().getFullYear() - person2.yearOfBirth;
    }
    if(age1 > age2){return person1;}
    else{return person2;}
}

// Do not edit below this line
module.exports = findTheOldest;

//console.log(findTheOldest(peopleList).name + " is the oldest");
