// Driving KPIs Test v1.2
// Codeified Inc
// Kyle Phillips
// 2022 - 2023



const sheet = SpreadsheetApp.getActive();
const ui = SpreadsheetApp.getUi();
const tab = sheet.getSheetByName('DRAFT SAMPLE');
const userData = sheet.getSheetByName('USER DATA BREAKDOWN');
const callLog = SpreadsheetApp.openById('1Jw-dEgMZPY_f8A7GOMG_qehSruUSyFeJS6bv_TMKmDU');
const callsSheet = callLog.getSheetByName('Calls');
const dataLog = SpreadsheetApp.openById('14DQ3k0z74qMlLnyZu0WxvV4BXy7SJHYbJQhE2EJ2Z-A');
const dataTab = dataLog.getSheetByName('Raw_Data');
const path = tab.getRange(1, 1, 1, 1).getValue();
const currentDate = new Date;
const sdrName = tab.getRange(2, 2, 1, 1).getValue();
const currentKPI = tab.getRange(4, 2, 1, 1).getValue();
const pacingDocData = SpreadsheetApp.openById('1k7ca0h8i5wsRnrn5PeXsrOibh-2SZ08E3LFHgKWdHF8');
const pacingTab = pacingDocData.getSheetByName('Driving KPIs');
const sdrNameRange = tab.getRange(2, 2, 1, 1);
const sdrNameTest = sdrNameRange.getValue();
const templateList = SpreadsheetApp.openById('1A8ErXJvs9_8cKMUFtKSLJoBx4a3Ie0zdyTf7MXg7dxI');
const masterList = templateList.getSheetByName('Master List');
const validationList = templateList.getSheetByName('List Items');
const sdrSheet = SpreadsheetApp.openById('1BcCnoQtmSEV3Y-3eOv6nmlltuDYa1GFkS5DpwCmL5q8');
const sdrList = sdrSheet.getSheetByName('List');
const callsList = sheet.getSheetByName('Calls List');
const behaviors = validationList.getRange(2, 3, 15, 2).getValues();

function routeSidebar() {
  if (path === "Attended") {
    showAttendedSidebar();
  }
  if (path === "Calls" ) {
    showCallsSidebar();
  }
}
