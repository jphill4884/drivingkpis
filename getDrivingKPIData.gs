function getDrivingKPIData() {
  const lastRow = pacingTab.getLastRow();
  const pacingData = pacingTab.getRange(2, 1, lastRow, 12).getValues();
  const savePacingData = userData.getRange(1, 1, lastRow, 12);
  savePacingData.setValues(pacingData);
  const sdrListLastRow = sdrList.getLastRow();
  const sdrListLastColumn = sdrList.getLastColumn();
  const sdrData = sdrList.getRange(1, 1, sdrListLastRow, sdrListLastColumn).getValues();
  const sdrInfo = sheet.getSheetByName('SDR Info');
  const saveSdrData = sdrInfo.getRange(1, 1, sdrListLastRow, sdrListLastColumn);
  saveSdrData.setValues(sdrData);
}
