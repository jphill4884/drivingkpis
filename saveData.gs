function saveData() {
  const supervisor = tab.getRange(3, 2, 1, 1).getValue();
  const selectedKPI = tab.getRange(4, 2, 1, 1).getValue();
  const callScores = tab.getRange(7, 2, 1, 6).getValues();
  const bookedScores = tab.getRange(8, 2, 1, 6).getValues();
  const attendedScores = tab.getRange(9, 2, 1, 6).getValues();
  const callRecordings = tab.getRange(12, 2, 1, 6).getValues();
  const saveLocation = dataTab.getRange(dataTab.getLastRow() + 1, 1, 1, 28);
  const dataArray = [[[currentDate],
                      [sdrName],
                      [supervisor],
                      [selectedKPI],
                      [callRecordings[0][0]],
                      [callRecordings[0][1]],
                      [callRecordings[0][2]],
                      [callRecordings[0][3]],
                      [callRecordings[0][4]],
                      [callRecordings[0][5]],
                      [callScores[0][0]],
                      [callScores[0][1]],
                      [callScores[0][2]],
                      [callScores[0][3]],
                      [callScores[0][4]],
                      [callScores[0][5]],
                      [bookedScores[0][0]],
                      [bookedScores[0][1]],
                      [bookedScores[0][2]],
                      [bookedScores[0][3]],
                      [bookedScores[0][4]],
                      [bookedScores[0][5]],
                      [attendedScores[0][0]],
                      [attendedScores[0][1]],
                      [attendedScores[0][2]],
                      [attendedScores[0][3]],
                      [attendedScores[0][4]],
                      [attendedScores[0][5]]]];
  saveLocation.setValues(dataArray);
  console.log(callScores)
}
