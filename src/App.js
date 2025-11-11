import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from "./SignInForm"; 

function App() {
  const students = [
    { id: 1, name: 'Nguyễn Thi Thương', age: 20, address: 'Hà Tĩnh' },
    { id: 2, name: 'Nguyễn Thị Tú Phương', age: 20, address: 'Hà Nội' },
    { id: 3, name: 'Phan Thị Thanh Thảo', age: 20, address: 'Nam Đinh' },
    { id: 4, name: 'Nguyễn Kim Quý', age: 27, address: 'Hà Tĩnh' },
  ];

  return (
    <div className="App">
      <h2 className="text-center my-4">Danh Sách Sinh Viên</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Nếu muốn hiển thị Sign In Form ngay dưới bảng */}
      <SignInForm />
    </div>
  );
}

export default App;
