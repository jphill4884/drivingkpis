function copyTemplate() {
  const active = SpreadsheetApp.getActive();
  const sdrName = tab.getRange(2, 2, 1, 1).getValue();
  const mgrName = tab.getRange(3, 2, 1, 1).getValue();
  const filename = (sdrName + "- Driving KPIs");
  const destfolder = DriveApp.getFolderById('1ooZcSn3cCbLeiExZ0GE2IxoTSmurcwD_');
  const newdoc = DriveApp.getFileById(active.getId()).makeCopy(filename, destfolder)
  const newdocid = newdoc.getId();
  destfolder.setSharing(DriveApp.Access.DOMAIN_WITH_LINK, DriveApp.Permission.VIEW);
  const url = "https://docs.google.com/spreadsheets/d/" + newdocid;
  const openNew = "<script>window.open('" + url + "');google.script.host.close();</script>";
  const userInterface = HtmlService.createHtmlOutput(openNew);
  const saveLocation = masterList.getRange(masterList.getLastRow() + 1, 1, 1, 5);
  const locationData = [[[currentDate],[mgrName],[sdrName],[newdocid],[url]]]
  saveLocation.setValues(locationData);
  ui.showModalDialog(userInterface, "Opening New Driving KPIs Template");
  prepNewSheet(newdocid);
}

function prepNewSheet(docId) {
  console.log(`First stamp ${new Date}`)
  Utilities.sleep(120000);
  console.log(`Second stamp ${new Date}`)
  const newSheet = SpreadsheetApp.openById(docId);
  const newTab = newSheet.getSheetByName('DRAFT SAMPLE');
  ScriptApp.newTrigger('openCustomMenu')
    .forSpreadsheet(newSheet)
    .onOpen()
    .create();
  const clearRange1 = newTab.getRange(12, 2, 2, 6);
  const clearRange2 = newTab.getRange(17, 2, 9, 6);
  clearRange1.clearContent();
  clearRange2.clearContent();
}