import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Đảm bảo các đường dẫn import là chính xác dựa trên cấu trúc thư mục của bạn
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductAdd from './components/ProductAdd';
import ProductEdit from './components/ProductEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">Quản lý sản phẩm</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add" element={<ProductAdd />} />
          <Route path="/edit/:id" element={<ProductEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;