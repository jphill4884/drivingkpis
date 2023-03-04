function getFirstCalls(){
  if ( currentKPI === "Calls") {
    getFirstShortCalls();
  } else {
    getFirstLongCalls();
  }
}

function getFreshCalls(){
    if ( currentKPI === "Calls") {
    getFreshShortCalls();
  } else {
    getFreshLongCalls();
  }
}

function getCalls() {
  const lastRow = callsSheet.getLastRow() -1;
  const callsRange = callsSheet.getRange(2, 1, lastRow, 5).getValues();
  const callsArray = [];
  for ( let i = 0; i+2 < lastRow; i++ ){
    const nameMatch = callsRange[i][1];
    const callDate = callsRange[i][0]
    const recordingUrl = callsRange[i][2];
    const talkTimeSec = callsRange[i][3];
    const leadId = callsRange[i][4];
    if (nameMatch === sdrName){
      callsArray.push([nameMatch, recordingUrl, callDate, talkTimeSec, leadId])
    }
  }
return callsArray;
}

function getLongCalls(){
  const linksArray = getCalls();
  const longCallsArray = [];
  for ( let i = 0; i < linksArray.length; i++) {
    const sdrName = linksArray[i][0];
    const callDate = linksArray[i][2]
    const recordingUrl = linksArray[i][1];
    const talkTimeSec = linksArray[i][3];
    const leadId = linksArray[i][4];
    const note = `Talktime: ${talkTimeSec} seconds`
    const lead = `=HYPERLINK("https://housecallpro.lightning.force.com/lightning/r/Lead/${leadId}/view","Lead Record")`;
    if ( linksArray[i][3] > 90 ) {
      longCallsArray.push([[sdrName], [recordingUrl],[callDate], [lead], [note]]);
    }
  }
  return longCallsArray;
}

function getShortCalls(){
  const linksArray = getCalls();
  const shortCallsArray = [];
  for ( let i = 0; i < linksArray.length; i++) {
    const sdrName = linksArray[i][0];
    const callDate = linksArray[i][2]
    const recordingUrl = linksArray[i][1];
    const talkTimeSec = linksArray[i][3];
    const leadId = linksArray[i][4];
    const note = `Talktime: ${talkTimeSec} seconds`
    const lead = `=HYPERLINK("https://housecallpro.lightning.force.com/lightning/r/Lead/${leadId}/view","Lead Record")`;
    if ( linksArray[i][3] < 90 ) {
      shortCallsArray.push([[sdrName], [recordingUrl],[callDate], [lead], [note]]);
    }
  }
  return shortCallsArray;
}

function getFirstShortCalls(){
  const callLinks = tab.getRange(12, 2, 1, 3);
  const callDates = tab.getRange(13, 2, 1, 3);
  const leadRecords = tab.getRange(14, 2, 1, 3);
  const linksArray = getShortCalls();
  callLinks.setValues([[linksArray[0][1], linksArray[1][1], linksArray[2][1]]]);
  callDates.setValues([[linksArray[0][2], linksArray[1][2], linksArray[2][2]]]);
  callDates.setNotes([[linksArray[0][4], linksArray[1][4], linksArray[2][4]]])
  leadRecords.setValues([[linksArray[0][3], linksArray[1][3], linksArray[2][3]]]);
}

function getFirstLongCalls(){
  const callLinks = tab.getRange(12, 2, 1, 3);
  const callDates = tab.getRange(13, 2, 1, 3);
  const leadRecords = tab.getRange(14, 2, 1, 3);
  const linksArray = getLongCalls();
  callLinks.setValues([[linksArray[0][1], linksArray[1][1], linksArray[2][1]]]);
  callDates.setValues([[linksArray[0][2], linksArray[1][2], linksArray[2][2]]]);
  callDates.setNotes([[linksArray[0][4], linksArray[1][4], linksArray[2][4]]])
  leadRecords.setValues([[linksArray[0][3], linksArray[1][3], linksArray[2][3]]]);
}


function getFreshLongCalls(){
  const callLinks = tab.getRange(12, 5, 1, 3);
  const callDates = tab.getRange(13, 5, 1, 3);
  const leadRecords = tab.getRange(14, 5, 1, 3);
  const linksArray = getLongCalls();
  callLinks.setValues([[linksArray[0][1], linksArray[1][1], linksArray[2][1]]]);
  callDates.setValues([[linksArray[0][2], linksArray[1][2], linksArray[2][2]]]);
  callDates.setNotes([[linksArray[0][4], linksArray[1][4], linksArray[2][4]]])
  leadRecords.setValues([[linksArray[0][3], linksArray[1][3], linksArray[2][3]]]);
}

function getFreshShortCalls(){
  const callLinks = tab.getRange(12, 5, 1, 3);
  const callDates = tab.getRange(13, 5, 1, 3);
  const leadRecords = tab.getRange(14, 5, 1, 3);
  const linksArray = getShortCalls();
  callLinks.setValues([[linksArray[0][1], linksArray[1][1], linksArray[2][1]]]);
  callDates.setValues([[linksArray[0][2], linksArray[1][2], linksArray[2][2]]]);
  callDates.setNotes([[linksArray[0][4], linksArray[1][4], linksArray[2][4]]])
  leadRecords.setValues([[linksArray[0][3], linksArray[1][3], linksArray[2][3]]]);
}