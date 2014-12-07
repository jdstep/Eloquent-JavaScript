// flattens a 2-dimensional array into a 1-dimensional array
function flatten(arr){
	var newArr = [];
	return reduce(arr, function(arr, rest){ return rest.concat(arr);}, newArr);
}

function reduce(arr, combine, start){
	var total = start;
	for (var i=0;i<arr.length;i++){
		total = combine(arr[i], total); 
	}
	return total;
}

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
