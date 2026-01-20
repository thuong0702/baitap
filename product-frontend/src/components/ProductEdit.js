import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy thông tin cũ của sản phẩm theo ID
    axios.get(`http://localhost:3001/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/products/${id}`, product);
    alert("Cập nhật thành công!");
    navigate('/');
  };

  return (
    <div className="card mx-auto mt-5" style={{ maxWidth: '500px' }}>
      <div className="card-header"><h4>Sửa sản phẩm</h4></div>
      <form className="card-body" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input type="text" className="form-control" value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})} />
        </div>
        <div className="mb-3">
          <label className="form-label">Giá</label>
          <input type="number" className="form-control" value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mô tả</label>
          <textarea className="form-control" rows="3" value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}></textarea>
        </div>
        <button type="submit" className="btn btn-primary me-2">Sửa</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Trở lại</button>
      </form>
    </div>
  );
};

export default ProductEdit;