//Write a function that returns an anonymous function, which transforms its input by adding a
//particular suffix at the end.

function add_ly(str) {
  let add_suffix = function(str1) {
    return str + str1;
  };

  return add_suffix;
}
console.log(add_ly("hopeless")("ly"));
console.log(add_ly("total")("ly"));
console.log(add_ly("fear")("lees"));
console.log(add_ly("ruth")("lees"));

