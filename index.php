<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Quản lý bán mỹ phẩm Japan</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="dinhdang.css">
</head>
<body>

<?php
// Kết nối DB
include 'db.php';

// Lấy danh sách sản phẩm
$sql = "SELECT * FROM products ORDER BY id DESC";
$result = $conn->query($sql);
?>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-pink shadow">
  <div class="container">
    <a class="navbar-brand fw-bold text-white" href="#">Japan Cosmetics</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link text-white" href="#">Trang chủ</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="quanly.php">Quản lý SP</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Giỏ hàng</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Liên hệ</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Header -->
<header class="bg-light text-center py-5">
  <h1 class="text-pink">🌸 Chào mừng đến với cửa hàng mỹ phẩm Nhật 🌸</h1>
  <p class="text-muted">Sản phẩm chính hãng - An toàn - Uy tín</p>
</header>

<!-- Sản phẩm -->
<section class="container py-5">
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <?php if ($result->num_rows > 0) { 
      while($row = $result->fetch_assoc()) { ?>
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm border-0">
            <img src="media/<?php echo $row['image']; ?>" 
                 class="card-img-top" alt="<?php echo $row['name']; ?>">
            <div class="card-body text-center">
              <h5 class="card-title"><?php echo $row['name']; ?></h5>
              <p class="text-pink fw-bold"><?php echo number_format($row['price']); ?> VND</p>
              <button class="btn btn-pink">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
    <?php } } else { ?>
      <p class="text-center">Chưa có sản phẩm nào.</p>
    <?php } ?>
  </div>
</section>

<!-- Sidebar quảng cáo -->
<div id="ad-sidebar" class="ad-sidebar shadow">
  <button class="close-btn" onclick="closeAd()">×</button>
  <h5 class="text-pink">🎀 Khuyến mãi đặc biệt 🎀</h5>
  <div id="ad-content">
    <div class="ad-item text-center mb-3">
      <img src="media/1.jpg" class="img-fluid rounded shadow-sm">
      <p class="mt-2">🌸 Giảm giá Son 30%</p>
    </div>
    <div class="ad-item text-center mb-3">
      <img src="media/2.jpg" class="img-fluid rounded shadow-sm">
      <p class="mt-2">🌸 Kem dưỡng HOT</p>
    </div>
    <div class="ad-item text-center mb-3">
      <img src="media/3.jpg" class="img-fluid rounded shadow-sm">
      <p class="mt-2">🌸 Sữa rửa mặt mới</p>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="bg-pink text-white text-center py-3">
  <p>&copy; 2025 Japan Cosmetics | Thiết kế bởi Thương</p>
</footer>

<script>
function closeAd() {
  document.getElementById("ad-sidebar").style.display = "none";
}
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
