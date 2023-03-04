const currentLastRow = tab.getRange(tab.getLastRow(), 1, 1, 8);

function hardCodeRow() {
  const currentState = currentLastRow.getValues();
  currentLastRow.setValues(currentState);
  setLastSessionRow();
}

function setLastSessionRow() {
  const dateFormula = '=TODAY()'
  const kpiFormula = '=$B$4'
  let t7Actual = '';
  let t14Actual = '';
    if (currentKPI === "Calls" ) {
      t7Actual = '=B7';
      t14Actual = '=C7';
    } else if (currentKPI === "Booked" ) {
      t7Actual = '=B8';
      t14Actual = '=C8';
    } else if (currentKPI === "Attended" ) {
      t7Actual = '=B9';
      t14Actual = '=C9';
    } else {
      t7Actual = 'N/A';
      t14Actual = '=N/A';
    }
    const formulaArray = [[[dateFormula], [kpiFormula], ['SELECT BEHAVIOR'], ['SELECT BEHAVIOR'], [sdrName], ['SET DUE DATE'], [t7Actual], [t14Actual]]];
    const newLastRow = tab.getRange(tab.getLastRow() + 1, 1, 1, 8);
    tab.setRowHeight(tab.getLastRow() + 1, 60);
    newLastRow.setBorder(true, true, true, true, true, true, "black", SpreadsheetApp.BorderStyle.DOTTED);
    newLastRow.setValues(formulaArray);
    setValidationRules();
}
