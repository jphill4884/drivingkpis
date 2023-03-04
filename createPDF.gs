function savePDF(optSSId, optSheetId) {
  const result = ui.alert('Are you ready to e-mail the scorecard to the rep?', ui.ButtonSet.YES_NO_CANCEL);
  if (result == ui.Button.YES) {
    const repName = tab.getRange(2, 2, 1, 1).getValue();
    const reviewDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()}`
    const ss = (optSSId) ? SpreadsheetApp.openById(optSSId) : SpreadsheetApp.getActiveSpreadsheet();
    const url = 'https://docs.google.com/spreadsheets/d/' + SpreadsheetApp.getActiveSpreadsheet().getId() + '/';
    const parents = DriveApp.getFileById(ss.getId()).getParents();
    const folder = parents.next();
    const sheets = ss.getSheets();
    const slice = sheets.slice(0, 1);
    for (let i = 0; i < slice.length; i++) {
      const sheet = slice[i];
      if (optSheetId && optSheetId !== sheet.getSheetId()) continue;
      const url_ext = 'export?exportFormat=pdf&format=pdf'
        + '&gid=' + sheet.getSheetId()
        + '&size=letter'
        + '&portrait=false'
        + '&fitw=true'
        + '&sheetnames=false'
        + '&printtitle=false'
        + '&pagenumbers=false'
        + '&gridlines=false'
        + '&fzr=false';
      const header = {
        headers: {
          'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
        }
      }
      const response = UrlFetchApp.fetch(url + url_ext, header);
      const blob = response.getBlob().setName('Driving KPIs_' + repName + '_' + reviewDate + '.pdf');
      folder.createFile(blob);
      const deliveryAddress = tab.getRange(2, 4, 1, 1).getValue();
      const emailSubject = `Driving KPIs Assessment for ${repName} - ${reviewDate}`; 
      const emailText = `Please find attached your Driving KPIs report from ${reviewDate}`;
      GmailApp.sendEmail(deliveryAddress, emailSubject, '', { htmlBody: emailText, attachments: [blob.getAs(MimeType.PDF)] });
      saveData();
      }
      scheduleNextCheckIn();
    } else if (result == ui.Button.NO) {
      ui.alert('The results of this check-in have not been saved to the ACE Tracker. Please make any necessary changes and send again.');
    } else if (result == ui.Button.CANCEL) {
      ui.alert('This process has been cancelled, the results of this check-in have not been saved to the ACE Tracker.');
    }
    hardCodeRow();
    saveData();
}