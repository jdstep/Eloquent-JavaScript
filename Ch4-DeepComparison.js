// returns true if any two given values, including objects, are equal
// otherwise returns false
function deepEqual(val1, val2){
	if (typeof val1 === 'object' &&
		typeof val2 === 'object' &&
		val1 !== null &&
		val2 !== null){
		return IfObjectsEqual(val1, val2);
	}
	else if (val1 === val2){
		return true;
	}
	else{
		return false;
	}
}

// returns true if two given objects are equal
//
// if the object has more objects inside of it
// then the function will recursively step inside of the interior objects
// and compare the values within the interior objects
function IfObjectsEqual(val1, val2){
	for (key in val1){
		if (typeof val1[key] === 'object' &&
			typeof val2[key] === 'object'){
			IfObjectsEqual(val1[key], val2[key]);
		}
		else if (val1[key] !== val2[key]){
			return false;
		}
	}
	return true;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true