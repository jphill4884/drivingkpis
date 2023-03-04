function setFullCallsList() {
  callsList.getFilter().remove();
  const callsArray = getCalls();
  const callsArrayLength = callsArray.length; 
  const callsListRange = callsList.getRange(2, 2, callsArrayLength, 5);
  callsListRange.setValues(callsArray);
  const validationRange = callsList.getRange(2, 1, callsArrayLength, 1);
  const validationRule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
  validationRange.setDataValidation(validationRule);
  const filterRange = callsList.getRange(1, 2, callsArrayLength, 6)
  filterRange.createFilter();
}
