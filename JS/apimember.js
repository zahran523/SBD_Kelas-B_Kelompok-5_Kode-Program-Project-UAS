fetch(`http://localhost/perpus/api/datamember.php`)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('data-member');
      let tableHTML = '';

      data.forEach(member => {
        tableHTML += `
          <tr>
            <td>${member.nama_member}</td>
            <td>${member.id_member}</td>
            <td>${member.kelamin}</td>
            <td>${member.kontak}</td>
            <td>${member.alamat}</td>
          </tr>
        `;
      });

      tableBody.innerHTML = tableHTML;
    })
.catch(error => console.error('Error:', error));  
