
const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 17 },
  { name: "Chi", age: 30 },
  { name: "Dũng", age: 20 }
];

const adults =    
users.filter(user => user.age >= 18);
users.sort((a, b) => a.age - b.age);

console.log(adults);
