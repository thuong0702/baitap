const numbers = [3, 5, 7];
const moreNumbers = [1, 2, ...numbers, 8, 9]; 

const [first, second, ...others] = moreNumbers; 
function sum(...args) { 
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(first);               
console.log(second);             
console.log(others);              
console.log(sum(...moreNumbers)); 