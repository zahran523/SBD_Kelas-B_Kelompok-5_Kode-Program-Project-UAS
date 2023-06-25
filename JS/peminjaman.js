document.getElementById('peminjamanForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var idMember = document.getElementById('idMember').value;
    var idBuku = document.getElementById('idBuku').value;
    var today = new Date();
    var tanggalPeminjaman = today.toISOString().split('T')[0]; // Menggunakan tanggal hari ini
  
    var formData = new FormData();
    formData.append('id_member', idMember);
    formData.append('id_buku', idBuku);
    formData.append('tanggal_peminjaman', tanggalPeminjaman);
  
    fetch('http://localhost/perpus/api/peminjaman.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var resultContainer = document.getElementById('result');
  
      if (data.status === 'success') {
        resultContainer.innerHTML = '<span class="success">' + data.message + '</span>';
      } else {
        resultContainer.innerHTML = '<span class="error">' + data.message + '</span>';
      }
    })
    .catch(function(error) {
      console.error('Terjadi kesalahan:', error);
    });
  });
  
  // Set nilai tanggal saat ini pada input tanggal peminjaman saat halaman dimuat
  var today = new Date();
  var tanggalPeminjamanInput = document.getElementById('tanggalPeminjaman');
  tanggalPeminjamanInput.value = today.toISOString().split('T')[0];
  