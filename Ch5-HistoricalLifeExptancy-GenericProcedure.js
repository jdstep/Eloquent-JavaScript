// returns an object with properties designated for the result of a transformation procedure
// the elements of the given array are sorted into their category property
function groupBy(transform){
	return function(array){
		var groupedObj = {},
			category;

		for (var i=0;i<array.length;i++){
			category = transform(array[i]);
			if (groupedObj[category] === undefined){
				groupedObj[category] = [];
			}
			groupedObj[category].push(array[i]);
		}
		return groupedObj;
	}
}

// returns the 10's value of a given number
function findTens(num) {
	return (Math.floor(num / 10) + '0');
}

var groupByTens = groupBy(findTens);

/// returns the first letter in upper case format of a given word
function findFirstLetter(word){
	return word[0].toUpperCase();
}

var groupByFirstLetter = groupBy(findFirstLetter);

console.log(groupByTens([12, 72, 317, 19, 42]));
// -> { '10': [ 12, 19 ], '40': [ 42 ], '70': [ 72 ], '310': [ 317 ] }

console.log(groupByFirstLetter(["aarvarks", "orangutans", "bananas", "apples", "oranges"]));
// -> { A: [ 'aarvarks', 'apples' ], B: [ 'bananas' ], O: [ 'orangutans', 'oranges' ] }
