const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { truthTable: generateTruthTable() });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

function generateTruthTable() {
  const truthTable = [];
  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      for (let c = 0; c <= 1; c++) {
        const bPrime = !b; 
        const cPrime = !c; 
        const bCPrime = bPrime && cPrime; 
        const bC = b && c; 
        const bCplusbc = bCPrime + bC;
        const result = a && (bCPrime || bC);
        
        truthTable.push({ a, b, c, bPrime, cPrime, bCPrime, bC, bCplusbc, result });
      }
    }
  }

  return truthTable;
}
