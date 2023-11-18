const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Render HTML page with truth table data
  res.render('index', { truthTable: generateTruthTable() });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Function to generate truth table
ffunction generateTruthTable() {
    const truthTable = [];
  
    // Loop through all possible combinations of A, B, and C (0 or 1)
    for (let a = 0; a <= 1; a++) {
      for (let b = 0; b <= 1; b++) {
        for (let c = 0; c <= 1; c++) {
          const bPrime = !b; // B'
          const cPrime = !c; // C'
          const result = a && (bPrime && cPrime || (b && c)); // Z = A(B'C' + BC)
  
          truthTable.push({ a, b, c, bPrime, cPrime, result });
        }
      }
    }
  
  return truthTable;
}
