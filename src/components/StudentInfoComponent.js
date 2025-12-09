import React, { Component } from 'react';

class StudentInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Nguyen Van A", age: 20, address: "Ha Noi" },
        { id: 2, name: "Tran Thi B", age: 21, address: "Da Nang" },
        { id: 3, name: "Le Van C", age: 19, address: "HCM" },
        { id: 4, name: "Pham Thi D", age: 22, address: "Hai Phong" }
      ]
    }
  }

  render() {
    return (
      <div style={{ width: "60%", margin: "20px auto" }}>
        <h2 style={{ textAlign: "center" }}>Danh sách sinh viên</h2>

        <table border="1" width="100%" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Địa chỉ</th>
            </tr>
          </thead>

          <tbody>
            {
        
              this.state.students.map((sv) => (
                <tr key={sv.id}>
                  <td>{sv.id}</td>
                  <td>{sv.name}</td>
                  <td>{sv.age}</td>
                  <td>{sv.address}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentInfoComponent;
