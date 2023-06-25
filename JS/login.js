// Fungsi untuk mengirim permintaan ke API login
function loginUser(username, password) {
    // Endpoint API login
    const url = 'http://localhost/perpus/api/login.php';

    // Data pengguna yang akan dikirimkan
    const data = {
      username: username,
      password: password
    };

    // Konfigurasi objek permintaan
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // Mengirim permintaan ke API
    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        // Memproses respons dari API
        if (result.status === 'success') {
          // Login berhasil
          console.log(result.message);
          // Arahkan pengguna ke halaman dashboard
          window.location.href = 'dashboard.html';
        } else {
          // Login gagal
          alert('Kesalahan: ' + result.message);
        }
      })
      .catch(error => {
        console.error('Terjadi kesalahan:', error);
        // Lakukan tindakan yang sesuai untuk menangani kesalahan
      });
  }

  // Menangani submit form login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginUser(username, password);
  });