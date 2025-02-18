const _ = require('lodash');

const numbers = [3, 7, 1, 9, 12, 5, 0, 15];
const max = _.max(numbers);
const min = _.min(numbers);

console.log("Maximum number:", max);
console.log("Minimum number:", min);
