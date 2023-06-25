<?php
// Konfigurasi koneksi ke database
$host = 'localhost'; // Host database
$username = 'root'; // Username database
$password = ''; // Password database
$dbname = 'peminjaman_perpustakaan'; // Nama database

// Membuat koneksi ke database
$conn = new mysqli($host, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}

// Mengambil data ID member dari tabel member_perpustakaan
$idMember = $_POST['id_member'];
$sqlMember = "SELECT * FROM member_perpustakaan WHERE id = '$idMember'";
$resultMember = $conn->query($sqlMember);

// Memeriksa apakah ID member valid
if ($resultMember->num_rows === 0) {
    $response = [
        'status' => 'error',
        'message' => 'ID member tidak valid.'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}

// Mengambil data ID buku dari tabel buku
$idBuku = $_POST['id_buku'];
$sqlBuku = "SELECT * FROM tabel_buku WHERE id = '$idBuku'";
$resultBuku = $conn->query($sqlBuku);

// Memeriksa apakah ID buku valid
if ($resultBuku->num_rows === 0) {
    $response = [
        'status' => 'error',
        'message' => 'ID buku tidak valid.'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}

// Mendapatkan tanggal peminjaman (tanggal hari ini)
$tanggalPeminjaman = date('Y-m-d');

// Menghitung tanggal batas peminjaman (1 minggu setelah tanggal peminjaman)
$tanggalBatasPeminjaman = date('Y-m-d', strtotime($tanggalPeminjaman . ' + 7 days'));

// Proses peminjaman buku dan simpan ke tabel transaksi
$sqlInsertPeminjaman = "INSERT INTO transaksi (id_transaksi, id_member, id_buku, tanggal_peminjaman, tanggal_batas_peminjaman) VALUES (NULL, '$idMember', '$idBuku', '$tanggalPeminjaman', '$tanggalBatasPeminjaman')";
if ($conn->query($sqlInsertPeminjaman) === TRUE) {
    $response = [
        'status' => 'success',
        'message' => 'Peminjaman buku berhasil.'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    $response = [
        'status' => 'error',
        'message' => 'Terjadi kesalahan saat memproses peminjaman buku.'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
}

// Menutup koneksi ke database
$conn->close();
?>
