require('../helpers/array_equality.js')

/*
Let's create an array manipulation library called '_' where we implement functions such as:
Each - iterate over an array and execute the function with the array as contents
Map - like each but would return an array with altered contents depending on the function
Reduce - reduce an array into a value, can accept optional initial value
Head - get the initial value of the array
Tail - get the last value of the array
Join - join the array elements into a string given a parameter
*/

const $ = {
	filter: function (arr, fx) {},
	map: function () {},
	reduce: function () {},
	head: function () {},
	tail: function () {},
	join: function () {}
};

(_ => {
	console.log('Running _.filter...');

	// Filtering array
	console.log(
		Array.isEqual($.filter([1, 2, 3], function (num) { return num < 2 }),[1])
	);

	// Filtering empty array
	console.log(
		Array.isEqual($.filter([], function (num) { return num < 2 }),[])
	);

	console.log('Running _.map...');

	// Mapping array
	console.log(
		Array.isEqual($.map([5, 6, 7], function (num) { return num + 3 }),[8, 9, 10])
	);

	// Mapping empty array
	console.log(
		Array.isEqual($.map([], function (num) { return num < 2 }),[])
	);

	console.log('Running _.reduce...');

	// Adding numbers
	console.log(
		($.reduce([1, 2, 3], function (acc, num) { return acc + num }) === 6)
	);

	// Adding empty list
	console.log(
		Array.isEqual($.reduce([], function (acc, num) { return acc + num }),[])
	);

	// Adding with initial value
	console.log(
		($.reduce([], function (acc, num) { return acc + num }, 0) === 0)
	);

	console.log(
		($.reduce([1, 2, 3], function (acc, num) { return acc + num }, 4) === 10)
	);

	console.log('Running _.head...');

	// Getting top of array
	console.log(
		($.head([1, 2, 3]) === 1)
	);

	// Getting top of empty array
	console.log(
		($.head([]) === undefined)
	);

	console.log('Running _.tail...');

	// Getting tail of array
	console.log(
		($.tail([1, 2, 3]) === 3)
	);

	// Getting tail of empty array
	console.log(
		($.tail([]) === undefined)
	);

	console.log('Running _.join...');

	// Joining array
	console.log(
		($.join(['to','be', 1], '-') === 'to-be-1')
	);

	// Joining empty array
	console.log(
		($.join([], '-') === '')
	);
})();
