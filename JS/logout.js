// Fungsi logout
function logoutUser() {
    // Lakukan tindakan logout yang sesuai, seperti membersihkan sesi
    console.log('Logout berhasil!');
    // Arahkan pengguna kembali ke halaman login
    window.location.href = 'login.html';
  }

  // Menangani klik tombol logout
  document.getElementById('logout-button').addEventListener('click', function(event) {
    event.preventDefault();
    logoutUser();
  });