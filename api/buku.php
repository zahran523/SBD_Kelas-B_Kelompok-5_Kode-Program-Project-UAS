<?php
// Buat koneksi ke database (sebelumnya)
require_once "connection.php";

// Tangani permintaan GET untuk mengambil data dari tabel
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $sql = 'SELECT * FROM tabel_buku'; // Ganti "nama_tabel" dengan nama tabel Anda

  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
      $data[] = $row;
    }
    echo json_encode($data);
  } else {
    echo json_encode(array());
  }
}

$conn->close();
?>
