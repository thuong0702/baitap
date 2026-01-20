import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get('http://localhost:3001/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Lỗi kết nối API:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    // Popup xác nhận bắt buộc theo Màn hình 5
    if (window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) {
      try {
        await axios.delete(`http://localhost:3001/products/${id}`);
        alert("Xóa sản phẩm thành công!");
        fetchProducts(); 
      } catch (err) {
        alert("Lỗi khi xóa sản phẩm!");
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Danh sách sản phẩm</h2>
        {/* Nút thêm mới màu xanh dương */}
        <Link to="/add" className="btn btn-primary shadow-sm">Thêm mới</Link>
      </div>

      <div className="table-responsive">
        {/* Table-bordered tạo kẻ ô, table-striped tạo dòng so le màu */}
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-secondary">
            <tr className="text-center">
              <th style={{ width: '50px' }}>#</th>
              <th>Tên sản phẩm</th>
              <th>Mô tả</th>
              <th style={{ width: '150px' }}>Giá</th>
              <th style={{ width: '180px' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p, index) => (
                <tr key={p.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>
                    {/* Tên sản phẩm là link sang Màn hình 2 */}
                    <Link to={`/product/${p.id}`} className="text-decoration-none">
                      {p.name}
                    </Link>
                  </td>
                  <td>{p.description}</td>
                  <td className="text-end fw-bold">
                    {/* Định dạng giá có dấu chấm chuẩn Việt Nam */}
                    {Number(p.price).toLocaleString('vi-VN')}
                  </td>
                  <td className="text-center">
                    {/* Nút xóa màu đỏ (btn-danger) */}
                    <button 
                      className="btn btn-danger btn-sm me-2 px-3" 
                      onClick={() => handleDelete(p.id)}
                    >
                      Xoá
                    </button>
                    {/* Nút sửa màu xanh dương (btn-primary) */}
                    <Link 
                      to={`/edit/${p.id}`} 
                      className="btn btn-primary btn-sm px-3"
                    >
                      Sửa
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-5 text-muted">
                  Đang tải hoặc chưa có sản phẩm nào...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;