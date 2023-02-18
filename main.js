const searchBox = document.getElementById('search-box');
const dataTable = document.getElementById('data-table');

// Gunakan fetch API untuk memuat data dari file JSON secara asinkron
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Proses data di sini
    searchBox.addEventListener('input', () => {
      const searchTerm = searchBox.value.toLowerCase();
      if (!searchTerm) {
        // kosongkan tabel jika nilai kotak pencarian kosong
        dataTable.innerHTML = '';
        return;
      }
      const matchingData = data.filter(item => item.kata.toLowerCase().startsWith(searchTerm));
      populateTable(matchingData);
    });
  })
  .catch(error => console.error(error));

// Fungsi untuk mengisi tabel dengan data
function populateTable(data) {
  let html = '';

  data.forEach((item, index) => {
    if (index < 5) {
      html += `<tr><td>${item.kata}</td><td>${item.deskripsi}</td></tr>`;
    }
  });

  // jika hasil lebih dari 5, tampilkan pesan "read more"
  if (data.length > 5) {
    html += `<tr><td colspan="2" class="read-more">read more</td></tr>`;
  }

  dataTable.innerHTML = html;
}
