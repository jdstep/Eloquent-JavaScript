// returns true if every array element returns true for a given predicate
// otherwise returns false
function every(array, pred){
  for (var i = 0; i<array.length;i++){
    if (pred(array[i]) === false){
     return false; 
    }
  }
  return true;
}

// returns true if any array element returns true for a given predicate
// otherwise returns false
function some(array, pred){
  for (var i=0; i<array.length;i++){
    if (pred(array[i]) === true){
     return true; 
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false