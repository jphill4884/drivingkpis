function resetCalls() {
  const editRange = SpreadsheetApp.getActiveRange();
  const editRow = editRange.getRow();
  const editCol = editRange.getColumn();
  const editSheet = editRange.getSheet().getName();
  if ( editSheet === "DRAFT SAMPLE" && editRow === 2 && editCol === 2 ){
    console.log("SUCCESS!")
  }

}
