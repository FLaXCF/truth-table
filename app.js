const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Render halaman HTML dengan parameter data tabel kebenaran
  res.render('index', {
    truthTables: {
      expression1: generateTruthTable1(),
      expression2: generateTruthTable2(),
      expression3: generateTruthTable3(),
      expression4: generateTruthTable4(),
      expression5: generateTruthTable5(),
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 1
function generateTruthTable1() {
  const truthTable = [];

  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      for (let c = 0; c <= 1; c++) {
        const bPrime = !b;
        const cPrime = !c;
        const term1 = bPrime && cPrime;
        const term2 = b && c;
        const result = a && (term1 || term2);

        truthTable.push({ a, b, c, bPrime, cPrime, term1, term2, result });
      }
    }
  }

  return truthTable;
}

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 2
function generateTruthTable2() {
  const truthTable = [];

  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      const term1 = a + (a * b);
      const term2 = !a;
      const result = term1 + term2;

      truthTable.push({ a, b, term1, term2, result });
    }
  }

  return truthTable;
}

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 3
function generateTruthTable3() {
  const truthTable = [];

  for (let x = 0; x <= 1; x++) {
    for (let y = 0; y <= 1; y++) {
      for (let z = 0; z <= 1; z++) {
        const yPrime = !y;
        const term1 = x && yPrime && z;
        const term2 = x && yPrime && !z;
        const result = term1 || term2;

        truthTable.push({ x, y, z, yPrime, term1, term2, result });
      }
    }
  }

  return truthTable;
}

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 4
function generateTruthTable4() {
  const truthTable = [];

  for (let x = 0; x <= 1; x++) {
    for (let y = 0; y <= 1; y++) {
      for (let z = 0; z <= 1; z++) {
        const xPrime = !x;
        const yPrime = !y;
        const term1 = xPrime && y && z;
        const term2 = xPrime && y && !z;
        const term3 = x && z;
        const result = term1 || term2 || term3;

        truthTable.push({ x, y, z, xPrime, yPrime, term1, term2, term3, result });
      }
    }
  }

  return truthTable;
}

function generateTruthTable1() {
  const truthTable = [];

  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      for (let c = 0; c <= 1; c++) {
        const term1 = a && !b;
        const term2 = !c;
        const term3 = a && !b;
        const term4 = b && !c;
        const result = term1 || term2 || term3 || term4;

        truthTable.push({ a, b, c, term1, term2, term3, term4, result });
      }
    }
  }

  return truthTable;
}

