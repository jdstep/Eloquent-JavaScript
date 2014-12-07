
// returns an array an array with each number
// between the start and end, given how much to step between the two values
// if step is not provided, then step is assumed to be -1 or 1 depending
// if the range will increment or decrement
//
// there is likely a more elegant solution than to have two possible for loops.
// I tried storing the comparison operators in a variable and then using that variable
// directly in the for loop statement, however this didn't work.
// I will try and come back to this later to refactor the code
function range(start, end, step){
  var rangeArr = [];
  var stepAmt;

  stepAmt = SetStepValue(start, end, step);

  if (start > end){
    for (var i=start;i>=end;i += stepAmt){
      rangeArr.push(i);
    }
  }
  else if (end > start){
    for (var i=start;i<=end;i += stepAmt){
      rangeArr.push(i);
    }
  }
  else{
    return "Please provide two different start and end numbers";
  }
  
  return rangeArr;
}

// returns the sum of an array of numbers
function sum(numArr){
  var sumOfArr = 0;
  for (var i=0;i<numArr.length;i++){
   sumOfArr += numArr[i]; 
  }
  return sumOfArr;
}

// returns the proper step value
// if the step will increment, step defaults to 1
// if the step will decrement, step defaults to -1
// otherwise it uses the user-provided step value
function SetStepValue(start, end, step){
  if (step == undefined){
    if (start > end){
      return -1;
    }
    else{
      return 1;
    }
  }
  else{
    return step;
  }
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]