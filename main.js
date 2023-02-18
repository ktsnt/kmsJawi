const searchBox = document.getElementById('search-box');
const dataTable = document.getElementById('data-table');

// Gunakan fetch API untuk memuat data dari file JSON secara asinkron
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Proses data di sini
    searchBox.addEventListener('input', () => {
      const searchTerm = searchBox.value.toLowerCase();
      const matchingData = data.filter(item => item.kata.toLowerCase().startsWith(searchTerm));
      populateTable(matchingData);
    });
  })
  .catch(error => console.error(error));

// Fungsi untuk mengisi tabel dengan data
function populateTable(data) {
  let html = '';

  data.forEach(item => {
    html += `<tr><td>${item.kata}</td><td>${item.deskripsi}</td></tr>`;
  });
  
  } else {
          // Sembunyikan tabel jika tidak ada hasil pencarian
          searchResultsTable.classList.add('hidden');
        }
      } else {
        // Sembunyikan tabel jika kotak pencarian kosong
        searchResultsTable.classList.add('hidden');
      }
  }
  // Panggil fungsi search() setiap kali isi kotak pencarian berubah
  searchBox.addEventListener('input', search);

  dataTable.innerHTML = html;
}


// Tambahkan baris ke tabel untuk setiap hasil pencarian
if (matchingData.length > 0) {
  let resultCount = 0;
  matchingData.forEach(item => {
    // Hanya tampilkan maksimal 5 hasil pencarian
    if (resultCount < 5) {
      const row = table.insertRow(-1);
      const wordCell = row.insertCell(0);
      const definitionCell = row.insertCell(1);
      wordCell.innerHTML = item.kata;
      definitionCell.innerHTML = item.arti;
      resultCount++;
    }
  });

  // Tampilkan tulisan "more" jika ada lebih dari 5 hasil pencarian
  if (matchingData.length > 5) {
    const moreRow = table.insertRow(-1);
    const moreCell = moreRow.insertCell(0);
    moreCell.colSpan = 2;
    moreCell.innerHTML = "more";
  }
} else {
  const row = table.insertRow(-1);
  const noResultCell = row.insertCell(0);
  noResultCell.colSpan = 2;
  noResultCell.innerHTML = "No matching results";
}
