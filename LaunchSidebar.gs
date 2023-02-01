function showAttendedSidebar() {
  var mainSidebar = HtmlService.createHtmlOutputFromFile('AttendedSidebar')
      .setTitle('Driving KPIs');
  SpreadsheetApp.getUi()
      .showSidebar(mainSidebar);
}

function showCallsSidebar() {
  var attendedSidebar = HtmlService.createHtmlOutputFromFile('CallsSidebar')
      .setTitle('Driving KPIs');
  SpreadsheetApp.getUi()
      .showSidebar(attendedSidebar);
}