<?php

include 'db.php';

// Sau đó có thể dùng $conn->query(...)
$result = $conn->query("SELECT * FROM products");


$conn = new mysqli("localhost", "root", "", "japan_cosmetics");

$id = $_GET['id'];
$product = $conn->query("SELECT * FROM products WHERE id=$id")->fetch_assoc();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];

    // Nếu người dùng upload ảnh mới
    if (!empty($_FILES['image']['name'])) {
        $targetDir = "uploads/";
        $imageName = time() . "_" . basename($_FILES["image"]["name"]);
        $targetFile = $targetDir . $imageName;
        move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile);

        // Xóa ảnh cũ
        if (file_exists("uploads/" . $product['image'])) {
            unlink("uploads/" . $product['image']);
        }

        $conn->query("UPDATE products SET name='$name', price='$price', quantity='$quantity', image='$imageName' WHERE id=$id");
    } else {
        $conn->query("UPDATE products SET name='$name', price='$price', quantity='$quantity' WHERE id=$id");
    }

    header("Location: manage_product.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Sửa sản phẩm</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-5">

  <h2 class="mb-4">✏️ Sửa sản phẩm</h2>

  <form method="POST" enctype="multipart/form-data" class="w-50">
    <div class="mb-3">
      <label class="form-label">Tên sản phẩm</label>
      <input type="text" name="name" class="form-control" value="<?= $product['name'] ?>" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Giá</label>
      <input type="number" name="price" class="form-control" value="<?= $product['price'] ?>" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Số lượng</label>
      <input type="number" name="quantity" class="form-control" value="<?= $product['quantity'] ?>" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Ảnh hiện tại</label><br>
      <img src="uploads/<?= $product['image'] ?>" width="100">
    </div>
    <div class="mb-3">
      <label class="form-label">Đổi ảnh mới (nếu muốn)</label>
      <input type="file" name="image" class="form-control" accept="image/*">
    </div>
    <button type="submit" class="btn btn-success">Cập nhật</button>
    <a href="manage_product.php" class="btn btn-secondary">Hủy</a>
  </form>

</body>
</html>
