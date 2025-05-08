const findTheOldest = function (people) {
  const thisYear = new Date().getFullYear();
  let oldestPerson = 0;
  const oldest = people.map((person, index) => {

    if (!person.yearOfDeath) {
      if (thisYear - person.yearOfBirth > oldestPerson) {
        oldestPerson = thisYear - person.yearOfBirth;
        idxOfOld = index;
      }
    } else {
      if (person.yearOfDeath - person.yearOfBirth > oldestPerson) {
        oldestPerson = person.yearOfDeath - person.yearOfBirth;
        idxOfOld = index;
      }
    }    
  });

  return people[idxOfOld];
};

// Do not edit below this line
module.exports = findTheOldest;
