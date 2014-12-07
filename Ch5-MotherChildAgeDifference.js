var ageDiffs = [];

// returns the average age of the mothers when they gave birth to their children
ancestry.forEach(function(person) {
  if (byName[person.mother] !== undefined){
   ageDiffs.push(person.born - (byName[person.mother]).born);
  }
});

// provided in Eloquent Javascript
// returns the average of all of the elements of an array
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// provided in Eloquent JavaScript
// returns the object of a given name
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(average(ageDiffs));
// → 31.2