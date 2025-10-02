<?php

include 'db.php';

// Sau đó có thể dùng $conn->query(...)
$result = $conn->query("SELECT * FROM products");


$conn = new mysqli("localhost", "root", "", "japan_cosmetics");

$name = $_POST['name'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];

$targetDir = "media/";
$imageName = time() . "_" . basename($_FILES["image"]["name"]);
$targetFile = $targetDir . $imageName;
move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile);

$conn->query("INSERT INTO products (name, price, quantity, image) VALUES ('$name', '$price', '$quantity', '$imageName')");

header("Location: quanly.php");
exit();
