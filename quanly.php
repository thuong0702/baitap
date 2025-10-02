<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Quản lý sản phẩm - Japan Cosmetics</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
include 'db.php';

// Sau đó có thể dùng $conn->query(...)
$result = $conn->query("SELECT * FROM products");
?>

  <!-- Sidebar -->
  <!-- Sidebar -->
<div class="sidebar">
  <h3>🌸 Quản Lý</h3>
  <a href="add_product.html">➕ Thêm sản phẩm</a>
  <a href="manage_product.php">📦 Quản lý sản phẩm</a>
  <a href="index.php">🏠 Trang chủ</a>
</div>


  <!-- Main content -->
  <div class="main">
    <h2>Xin chào, Nguyễn Thị Thương! 🌸</h2>

    <!-- Thống kê -->
    <div class="row my-4">
      <div class="col-md-4">
        <div class="card-stat">
          <h5>Sản phẩm</h5>
       <?php
$countProducts = $conn->query("SELECT COUNT(*) AS total FROM products")->fetch_assoc()['total'];
?>
<p class="fw-bold"><?= $countProducts ?></p>

        </div>
      </div>
      <div class="col-md-4">
        <div class="card-stat">
          <h5>Người dùng</h5>
          <p class="fw-bold">100</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-stat">
          <h5>Đơn hàng</h5>
          <p class="fw-bold">50</p>
        </div>
      </div>
    </div>

    <!-- Bảng sản phẩm -->
    <h4 class="mb-3">🌸 Danh sách Sản phẩm</h4>
<table class="table table-bordered text-center align-middle">
  <thead class="table-pink">
    <tr>
      <th>ID</th>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Hình ảnh</th>
      
    </tr>
  </thead>
  <tbody id="product-list">
    <tr><td colspan="6">Đang tải dữ liệu...</td></tr>
  </tbody>
</table>

<script>
async function loadProducts() {
  let res = await fetch("api.php");
  let products = await res.json();

  let tbody = document.getElementById("product-list");
  tbody.innerHTML = "";

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6">Chưa có sản phẩm nào.</td></tr>`;
    return;
  }

  products.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${Number(p.price).toLocaleString()}₫</td>
        <td>${p.quantity}</td>
        <td><img src="media/${p.image}" width="80"></td>
       
      </tr>
    `;
  });
}

loadProducts();
</script>
      </tbody>
    </table>
  </div>

</body>
</html>
