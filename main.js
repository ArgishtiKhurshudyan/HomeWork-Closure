// Create a function that implements partial sum
function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(1)(2));

const addOne = function sum(a) {
  return function(b) {
    return a + b;
  };
};

console.log(addOne(1)(6));

const addTen = function sum(a) {
  return function(b) {
    return a + b;
  };
};

console.log(addTen(10)(10));
