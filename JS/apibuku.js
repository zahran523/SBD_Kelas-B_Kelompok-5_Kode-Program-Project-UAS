fetch(`http://localhost/perpus/api/buku.php`)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('data-buku');
      let tableHTML = '';

      data.forEach(member => {
        tableHTML += `
          <tr>
            <td>${member.id_buku}</td>
            <td>${member.nama_buku}</td>
            <td>${member.jenis_buku}</td>
            <td>${member.jumlah_halaman}</td>
            <td>${member.pengarang}</td>
          </tr>
        `;
      });

      tableBody.innerHTML = tableHTML;
    })
.catch(error => console.error('Error:', error));  
