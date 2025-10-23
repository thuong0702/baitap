const cart = [
  { name: "Laptop", price: 15000000, quantity: 1 },
  { name: "Chuột", price: 300000, quantity: 2 },
  { name: "Bàn phím", price: 800000, quantity: 1 }
];

// dùng map() lấy mảng giá trị (price * quantity), rồi reduce() cộng lại
const total = cart
  .map(item => item.price * item.quantity)
  .reduce((acc, val) => acc + val, 0);

console.log(total); // in tổng đơn hàng