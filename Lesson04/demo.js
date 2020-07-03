
function square(num) {
  console.log(num);
  ans = num*num;
  return ans;
}

let input = prompt('enter a number:');
tobeSquared = Number(input);
let result = square(tobeSquared);
alert(result);
