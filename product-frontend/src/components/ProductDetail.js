import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div className="card mt-5">
      <div className="card-header">Chi tiết sản phẩm</div>
      <div className="card-body">
        <h3>Tên sản phẩm: {product.name}</h3>
        <p>Mô tả: {product.description}</p>
        <p>Giá: {Number(product.price).toLocaleString()} VND</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Trở lại</button>
      </div>
    </div>
  );
};

export default ProductDetail;