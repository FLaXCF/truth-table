const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Render halaman HTML dengan parameter data tabel kebenaran
  res.render('index', { truthTable: generateTruthTable() });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Fungsi untuk menghasilkan tabel kebenaran
function generateTruthTable() {
  const truthTable = [];

  // Loop untuk semua kemungkinan kombinasi nilai A, B, dan C (0 atau 1)
  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      for (let c = 0; c <= 1; c++) {
        const bPrime = !b; // B'
        const cPrime = !c; // C'
        const bCPrime = bPrime && cPrime; // B'C'
        const bC = b && c; // BC
        const result = a && (bCPrime || bC); // Z = A(B'C' + BC)
        
        truthTable.push({ a, b, c, bPrime, cPrime, bCPrime, bC, result });
      }
    }
  }

  return truthTable;
}
