const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const expression = req.body.expression;
  const variables = req.body.variables.split(',');

  const truthTable = generateTruthTable(variables, expression);

  res.render('result', { truthTable, variables });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

function generateTruthTable(variables, expression) {
  const truthTable = [];
  const numRows = Math.pow(2, variables.length);

  for (let i = 0; i < numRows; i++) {
    const row = {};
    for (let j = 0; j < variables.length; j++) {
      row[variables[j]] = (i & Math.pow(2, j)) !== 0;
    }
    row['result'] = evaluateExpression(row, expression);
    truthTable.push(row);
  }

  return truthTable;
}

function evaluateExpression(row, expression) {
  const replacedExpression = expression.replace(/[A-Z]/g, match => row[match]);
  return eval(replacedExpression);
}
