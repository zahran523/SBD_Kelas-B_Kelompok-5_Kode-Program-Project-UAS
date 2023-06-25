fetch(`http://localhost/perpus/api/datapetugas.php`)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('data-petugas');
      let tableHTML = '';

      data.forEach(member => {
        tableHTML += `
          <tr>
            <td>${member.nama_petugas}</td>
            <td>${member.id_petugas}</td>
          </tr>
        `;
      });

      tableBody.innerHTML = tableHTML;
    })
.catch(error => console.error('Error:', error));  
