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
      expression6: generateTruthTable6(),
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 1
function generateTruthTableA() {
  const truthTable = [];

  for (let p = 0; p <= 1; p++) {
    for (let q = 0; q <= 1; q++) {
      const term1 = !p && (p || q);  // ¬p ∧ (p ∨ q)
      const result = !term1 || q;    // (¬p ∧ (p ∨ q)) → q

      truthTable.push({ p, q, term1: +term1, result: +result });
    }
  }

  return truthTable;
}

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 2
function generateTruthTableB() {
  const truthTable = [];

  for (let p = 0; p <= 1; p++) {
    for (let q = 0; q <= 1; q++) {
      for (let r = 0; r <= 1; r++) {
        const term1 = (!p || q) && (!q || r); // (p → q) ∧ (q → r)
        const result = !term1 || (!p || r);   // [(p → q) ∧ (q → r)] → (p → r)

        truthTable.push({ p, q, r, term1: +term1, result: +result });
      }
    }
  }

  return truthTable;
}

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 3
function generateTruthTableC() {
  const truthTable = [];

  for (let p = 0; p <= 1; p++) {
    for (let q = 0; q <= 1; q++) {
      const term1 = p && (!p || q);  // p ∧ (p → q)
      const result = !term1 || q;    // [p ∧ (p → q)] → q

      truthTable.push({ p, q, term1: +term1, result: +result });
    }
  }

  return truthTable;
}

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 4
function generateTruthTableD() {
  const truthTable = [];

  for (let p = 0; p <= 1; p++) {
    for (let q = 0; q <= 1; q++) {
      for (let r = 0; r <= 1; r++) {
        const term1 = (p || q) && (!p || r) && (!q || r);  // (p ∨ q) ∧ (p → r) ∧ (q → r)
        const result = !term1 || r;                        // [(p ∨ q) ∧ (p → r) ∧ (q → r)] → r

        truthTable.push({ p, q, r, term1: +term1, result: +result });
      }
    }
  }

  return truthTable;
}


function generateTruthTable5() {
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

// Fungsi untuk menghasilkan tabel kebenaran untuk ekspresi 6
function generateTruthTable6() {
  const truthTable = [];

  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      for (let c = 0; c <= 1; c++) {
        const aPrime = !a;
        const bPrime = !b;
        const cPrime = !c;
        const term1 = aPrime && b;
        const term2 = cPrime;
        const term3 = aPrime && b || cPrime;
        const term4 = a && !b || bPrime && c;
        const result = term3 || term4;

        truthTable.push({ a, b, c, aPrime, bPrime, cPrime, term1, term2, term3, term4, result });
      }
    }
  }

  return truthTable;
}

function generateTruthTable7() {
  const truthTable = [];

  for (let x = 0; a <= 1; x++) {
    for (let y = 0; b <= 1; y++) {
      for (let z = 0; c <= 1; z++) {
        const xPrime = !x;
        const yPrime = !y;
        const zPrime = !z;
        const term1 = aPrime && b;
        const term2 = cPrime;
        const term3 = aPrime && b || cPrime;
        const term4 = a && !b || bPrime && c;
        const result = term3 || term4;

        truthTable.push({ x, y, z, xPrime, yPrime, zPrime, term1, term2, term3, term4, result });
      }
    }
  }

  return truthTable;
}

