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

  for (let x = 0; x <= 1; x++) {
    for (let y = 0; y <= 1; y++) {
      for (let z = 0; z <= 1; z++) {
        const result = evaluateLogicExpression(x, y, z);
        truthTable.push({ x, y, z, result });
      }
    }
  }

  return truthTable;
}
function evaluateLogicExpression(x, y, z) {
  return !(x && !y && z) || !(x && !y && !z) || (x && z);
}
