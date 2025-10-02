<?php
include 'db.php';

// Lấy danh sách sản phẩm từ database
$result = $conn->query("SELECT * FROM products");


if(isset($_GET['id'])) {
    $id = $_GET['id'];

    // Xóa sản phẩm khỏi database
    $conn->query("DELETE FROM products WHERE id = $id");

    // Quay về trang danh sách sản phẩm
    header("Location: manage_products.php"); // đổi manage_products.php thành tên file danh sách sản phẩm của bạn
    exit(); // luôn luôn dùng exit sau header
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Quản lý sản phẩm</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background: #fff0f5; /* Hồng pastel nhẹ */
    }
    .table thead {
      background: #ffb6c1; 
      color: white;
    }
    .table img {
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .btn-primary {
      background: #ff69b4;
      border: none;
    }
    .btn-primary:hover {
      background: #ff1493;
    }
  </style>
</head>
<body class="container mt-5">
  
  <h2 class="mb-4 text-center text-pink">🌸 Danh sách sản phẩm 🌸</h2>
  <div class="d-flex justify-content-end mb-3">
    <a href="add_product.html" class="btn btn-primary">+ Thêm sản phẩm</a>
  </div>
  
  <table class="table table-bordered table-hover text-center align-middle shadow">
    <thead>
      <tr>
        <th>ID</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Ảnh</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      <?php while($row = $result->fetch_assoc()) { ?>
        <tr>
          <td><?= $row['id'] ?></td>
          <td><?= htmlspecialchars($row['name']) ?></td>
          <td><?= number_format($row['price'], 0, ',', '.') ?> ₫</td>
          <td><?= $row['quantity'] ?></td>
          <td><img src="media/<?= $row['image'] ?>" width="80"></td>
          <td>
            <a href="edit_product.php?id=<?= $row['id'] ?>" class="btn btn-warning btn-sm">✏ Sửa</a>
            <a href="delete_product.php?id=<?= $row['id'] ?>" class="btn btn-danger btn-sm" onclick="return confirm('Bạn có chắc muốn xóa sản phẩm này?')">🗑 Xóa</a>
           
          </td>
        </tr>
      <?php } ?>
    </tbody>
  </table>
</body>
</html>
