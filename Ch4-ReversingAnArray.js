// creates a new array that is the reverse of the given array
// returns the new array
function reverseArray(arr){
	var newArr = [];

	for (var i=0;i<arr.length;i++){
		newArr.unshift(arr[i]);
	}

	return newArr;
}

// reverses a given array in place
function reverseArrayInPlace(arr){
	var tmp;
	var halfway;
	var swap;

	halfway = Math.floor(arr.length / 2);

	for (var i=0;i<=halfway;i++){
		swap = (arr.length - 1 - i);
		tmp = arr[swap];
		arr[swap] = arr[i];
		arr[i] = tmp;
	}

	return arr;
}
// → [5, 4, 3, 2, 1]