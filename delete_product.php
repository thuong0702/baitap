<?php

include 'db.php';

// Sau đó có thể dùng $conn->query(...)
$result = $conn->query("SELECT * FROM products");


$conn = new mysqli("localhost", "root", "", "japan_cosmetics");

$id = $_GET['id'];

// Lấy ảnh để xóa file
$result = $conn->query("SELECT image FROM products WHERE id=$id");
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $imagePath = "media/" . $row['image'];
    if (file_exists($imagePath)) {
        unlink($imagePath); // Xóa file ảnh
    }
}

// Xóa sản phẩm trong DB
$conn->query("DELETE FROM products WHERE id=$id");

header("Location: quanly.php");
exit();
?>
