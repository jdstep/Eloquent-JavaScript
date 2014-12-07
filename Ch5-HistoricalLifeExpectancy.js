var lifeExpectancy = {},
    century,
    lifeSpan,
    avg;

// provided by Eloquent JavaScript
// reurns the average of all integers in an array
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// categorizes and sorts the century a person's lifespan was in
// into an object lifeExpectancy
ancestry.forEach(function(person){
  century = Math.ceil(person.died / 100);
  lifeSpan = (person.died - person.born);
  if (lifeExpectancy[century] === undefined){
   lifeExpectancy[century] = []; 
  }
  lifeExpectancy[century].push(lifeSpan);
});

// calculates the average life expectancy of people in the data set
// according to century
for (centuryArr in lifeExpectancy){
    avg = average(lifeExpectancy[centuryArr]);
    console.log(centuryArr + ": " + avg);
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94