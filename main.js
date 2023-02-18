const searchBox = document.getElementById('search-box');
const dataTable = document.getElementById('data-table');
const moreButton = document.getElementById('more-button');

// Gunakan fetch API untuk memuat data dari file JSON secara asinkron
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Proses data di sini
    searchBox.addEventListener('input', () => {
      const searchTerm = searchBox.value.toLowerCase();
      const matchingData = data.filter(item => item.kata.toLowerCase().startsWith(searchTerm));
      populateTable(matchingData.slice(0, 5));
      if (matchingData.length > 5) {
        moreButton.style.display = 'block';
      } else {
        moreButton.style.display = 'none';
      }
    });
    moreButton.addEventListener('click', () => {
      const searchTerm = searchBox.value.toLowerCase();
      const matchingData = data.filter(item => item.kata.toLowerCase().startsWith(searchTerm));
      populateTable(matchingData);
      moreButton.style.display = 'none';
    });
  })
  .catch(error => console.error(error));

// Fungsi untuk mengisi tabel dengan data
function populateTable(data) {
  let html = '';

  data.forEach(item => {
    html += `<tr><td>${item.kata}</td><td>${item.deskripsi}</td></tr>`;
  });

  dataTable.innerHTML = html;
}

// Tambahkan event listener untuk memantau perubahan pada input pencarian
searchBox.addEventListener('input', () => {
  const searchTerm = searchBox.value.toLowerCase();
  if (searchTerm === '') {
    dataTable.innerHTML = '';
    moreButton.style.display = 'none';
  }
});
