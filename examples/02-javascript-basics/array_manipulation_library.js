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
  filter: function () {},
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
    ($.filter([1, 2, 3], function (num) { return num < 2 }) === [1])
  );

  const numbers = [1,2,3];
  const filtered = numbers.filter(number => number < 2);
  console.log(filtered);

  // Filtering empty array
  console.log(
    ($.filter([], function (num) { return num < 2 }) === [])
  );

  const numbers = [];
  const filtered = numbers.filter(number => number < 2);
  console.log(filtered);

  console.log('Running _.map...');

  // Mapping array
  console.log(
    ($.map([5, 6, 7], function (num) { return num + 3 }) === [8, 9, 10])
  );

  const numbers = [5, 6, 7];
  const mapped = numbers.map(num => num + 3);
  console.log(mapped);

  // Mapping empty array
  console.log(
    ($.map([], function (num) { return num < 2 }) === [])
  );

  const numbers = [];
  const mapped = numbers.map(num => num + 3);
  console.log(mapped);

  console.log('Running _.reduce...');

  // Adding numbers
  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }) === 6)
  );

  const numbers = [1, 2, 3];
  const reducer = (acc, num) => acc + num;
  const reduced = numbers.reduce(reducer);
  console.log(reduced);

  // Adding empty list
  console.log(
    ($.reduce([], function (acc, num) { return acc + num }) === [])
  );

  // Adding with initial value
  console.log(
    ($.reduce([], function (acc, num) { return acc + num }, 0) === 0)
  );

  const numbers = [];
  const reducer = (acc, num) => acc + num;
  const reduced = numbers.reduce(reducer, 0);
  console.log(reduced);

  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }, 4) === 10)
  );

  const numbers = [1, 2, 3];
  const reducer = (acc, num) => acc + num;
  const reduced = numbers.reduce(reducer, 4);
  console.log(reduced);

  console.log('Running _.head...');

  // Getting top of array
  console.log(
    ($.head([1, 2, 3]) === 1)
  );

  const numbers = [1,2,3];
  const head = numbers[0];
  console.log(head);

  // Getting top of empty array
  console.log(
    ($.head([]) === undefined)
  );

  const numbers = [];
  const head = numbers[0];
  console.log(head);

  console.log('Running _.tail...');

  // Getting tail of array
  console.log(
    ($.tail([1, 2, 3]) === 3)
  );

  const numbers = [1,2,3];
  const tail = numbers[numbers.length-1];
  console.log(tail);

  // Getting tail of empty array
  console.log(
    ($.tail([]) === undefined)
  );

  const numbers = [];
  const tail = numbers[numbers.length-1];
  console.log(tail);

  console.log('Running _.join...');

  // Joining array
  console.log(
    ($.join(['to','be', 1], '-') === 'to-be-1')
  );

  const sample = ['to','be', 1];
  const joined = sample.join('-');
  console.log(joined);

  // Joining empty array
  console.log(
    ($.join([], '-') === '')
  );

  const sample = [];
  const joined = sample.join('-');
  console.log(joined);
})();