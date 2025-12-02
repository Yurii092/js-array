function filterAdults(people) {
  const result = [];

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.age >= 18) {
      result.push(person);
    }
  }

  return result;
}

module.exports = filterAdults;