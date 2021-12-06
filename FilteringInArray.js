//Write a function that implements filtering in array.

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

const arr = values.filter(Values => {
  if (Values > 0 || Object) {
    return Values;
  }
});

console.log(arr);

//Write a function which remove elements with length <= 3

const array = ["kia", "tesla", "bmw", "mercedes"];

const filterd = array.filter(value => {
  if (value.length <= 3) {
    delete value;
  } else if (value.length >= 3) {
    return value;
  }
});
console.log(filterd);
