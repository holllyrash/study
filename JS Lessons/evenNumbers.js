let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26, 33, 67, 44, 25, 87, 91, 56];
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    result.push(numbers[i]);
  }
}

result = result.reverse();
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
