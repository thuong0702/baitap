import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {

  const REGEX = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  };

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleValidate = () => {
    const errors = {};

    // Họ tên
    if (!form.name) {
      errors.name = "Required";
    }

    // CMND / Hộ chiếu
    if (!form.passport) {
      errors.passport = "Required";
    }

    // Năm sinh
    if (!form.year) {
      errors.year = "Required";
    } else if (Number(form.year) <= 1900) {
      errors.year = "Year must be greater than 1900";
    }

    // Quốc tịch
    if (!form.nationality) {
      errors.nationality = "Required";
    }

    // Tỉnh
    if (!form.province) {
      errors.province = "Required";
    }

    // Quận
    if (!form.district) {
      errors.district = "Required";
    }

    // Phường
    if (!form.ward) {
      errors.ward = "Required";
    }

    // Địa chỉ
    if (!form.address) {
      errors.address = "Required";
    }

    // Điện thoại
    if (!form.phone) {
      errors.phone = "Required";
    }

    // Email
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = () => {
    alert("Khai báo thành công!");
  };

  return (
    <div className="container">
      <h2>Khai báo y tế</h2>

      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>

            <label>Họ tên</label>
            <input name="name" onChange={handleChange} />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <label>Số hộ chiếu / CMND</label>
            <input name="passport" onChange={handleChange} />
            {errors.passport && <p className="error-text">{errors.passport}</p>}

            <label>Năm sinh</label>
            <input name="year" onChange={handleChange} />
            {errors.year && <p className="error-text">{errors.year}</p>}

            <label>Giới tính</label>
            <select name="gender" onChange={handleChange}>
              <option value="">-- Chọn --</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>

            <label>Quốc tịch</label>
            <input name="nationality" onChange={handleChange} />
            {errors.nationality && <p className="error-text">{errors.nationality}</p>}

            <label>Công ty làm việc</label>
            <input name="company" onChange={handleChange} />

            <label>Bộ phận làm việc</label>
            <input name="department" onChange={handleChange} />

            <label>Có thẻ BHYT</label>
            <input type="checkbox" name="insurance" onChange={handleChange} />

            <label>Tỉnh thành</label>
            <input name="province" onChange={handleChange} />
            {errors.province && <p className="error-text">{errors.province}</p>}

            <label>Quận / Huyện</label>
            <input name="district" onChange={handleChange} />
            {errors.district && <p className="error-text">{errors.district}</p>}

            <label>Phường / Xã</label>
            <input name="ward" onChange={handleChange} />
            {errors.ward && <p className="error-text">{errors.ward}</p>}

            <label>Số nhà, phố, thôn</label>
            <input name="address" onChange={handleChange} />
            {errors.address && <p className="error-text">{errors.address}</p>}

            <label>Điện thoại</label>
            <input name="phone" onChange={handleChange} />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            <label>Email</label>
            <input name="email" onChange={handleChange} />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <h3>Thông tin sàng lọc</h3>
            <label>
              <input type="checkbox" /> Có triệu chứng sốt
            </label>
            <label>
              <input type="checkbox" /> Ho, khó thở
            </label>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
