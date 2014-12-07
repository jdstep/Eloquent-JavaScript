// returns a 1 dimensional object list given an array
function arrayToList(arr){
	return makeList(arr, 0);
}

// takes in a 1 dimensional list object and returns an array
function listToArray(list){
	return createArray(list, [], 0);
}

// adds a given element to the front of a given list
// returns the new list
function prepend(element, rest){
	return new makeItem(element, rest);
}

// returns the value at a given position in a list
function nth(list, num){
	return findValue(list, num, 0);
}


// // helper functions

// creates a new item in a list
// usage: var newObj = new makeItem(value, rest)
function makeItem(value, next){
	this.value = value;
	this.rest = next;
}
// recursively steps through the object list and returns an array of each
// value in the object
function createArray(list, arr, i){
	if (list === null){
		return arr;
	}
	else{
		arr.push(list.value);
		return createArray(list.rest, arr, (i+1));
	}
}

// recursively generates a new list given an array
function makeList(arr, i){
	if (arr[i] === undefined){
		return null;
	}
	else{		
		return new makeItem(arr[i], makeList(arr, (i+1)));
	}
}

// returns the value at a given position in a list
function findValue(list, num, position){
	if (list === null){
		return undefined;
	}
	else if (num === position){
		return list.value;
	}
	else{
		return findValue(list.rest, num, (position+1));
	}
}

// console.log(arrayToList([10, 20, 30]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20