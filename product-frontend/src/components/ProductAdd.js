import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Gửi dữ liệu lên JSON Server (cổng 3001)
    await axios.post('http://localhost:3001/products', { name, price, description });
    
    // Màn hình 3 yêu cầu: Hiển thị thông báo khi thêm thành công
    alert("Thêm sản phẩm mới thành công!"); 
    
    // Sau khi nhấn OK ở thông báo, quay lại trang danh sách
    navigate('/'); 
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white"><h3>Thêm sản phẩm mới</h3></div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Giá (VND)</label>
            <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mô tả</label>
            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success me-2">Thêm</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Trở lại</button>
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;