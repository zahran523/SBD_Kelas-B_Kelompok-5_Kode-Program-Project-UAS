<?php
// Buat koneksi ke database (sebelumnya)
require_once "connection.php";
// Mengambil data pengguna dari database
function getUser($username, $conn) {
    $stmt = $conn->prepare('SELECT * FROM tabel_petugas WHERE nama_petugas = ?');
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();

    return $user;
}

// Mendapatkan data pengguna yang dikirim melalui permintaan POST
$username = $_POST['username'];
$password = $_POST['password'];

// Memeriksa apakah data pengguna valid
$user = getUser($username, $conn);

if ($user !== null && password_verify($password, $user['password'])) {
    // Data pengguna valid, berikan respons berhasil
    $response = array('status' => 'success', 'message' => 'Login berhasil!');
} else {
    // Data pengguna tidak valid, berikan respons gagal
    $response = array('status' => 'error', 'message' => 'Username atau password salah.');
}

// Mengirimkan respons dalam format JSON
header('Content-Type: application/json');
echo json_encode($response);

// Menutup koneksi database
$conn->close();
?>