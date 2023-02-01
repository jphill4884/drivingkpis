function getCalls() {
  const lastRow = callsSheet.getLastRow() -1;
  const callsRange = callsSheet.getRange(2, 1, lastRow, 3).getValues();
  const callsArray = [];
  for ( let i = 0; i+2 < lastRow; i++ ){
    const nameMatch = callsRange[i][1];
    const callDate = callsRange[i][0]
    const recordingUrl = callsRange[i][2];
    if (nameMatch === sdrName){
      callsArray.push([[recordingUrl],[callDate]])
    }
  }
return [callsArray[0], callsArray[1], callsArray[2]];
}


function getFirstCalls(){
  const callLinks = tab.getRange(12, 2, 1, 3);
  const callDates = tab.getRange(13, 2, 1, 3);
  const linksArray = getCalls();
  callLinks.setValues([[linksArray[0][0], linksArray[1][0], linksArray[2][0]]]);
  callDates.setValues([[linksArray[0][1], linksArray[1][1], linksArray[2][1]]]);
}

function getFreshCalls(){
  const callLinks = tab.getRange(12, 5, 1, 3);
  const callDates = tab.getRange(13, 5, 1, 3);
  const linksArray = getCalls();
  callLinks.setValues([[linksArray[0][0], linksArray[1][0], linksArray[2][0]]]);
  callDates.setValues([[linksArray[0][1], linksArray[1][1], linksArray[2][1]]]);
}