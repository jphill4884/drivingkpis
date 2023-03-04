function setValidationRules() {
  setWhatBehaviors();
  setHowBehaviors();
  setDueDate();
}

function setWhatBehaviors() {
  let whatList = [];
  for ( let i = 0; i < behaviors.length; i ++) {
    if (behaviors[i][0] != "" && behaviors[i][1] === currentKPI) {
    whatList.push(behaviors[i][0])
    }
  };
  const whatBehaviorRule = SpreadsheetApp.newDataValidation().requireValueInList(whatList).build();
  const whatBehaviorValidationRange = tab.getRange(tab.getLastRow(), 3, 1, 1)
  whatBehaviorValidationRange.setDataValidation(whatBehaviorRule);
}


function setHowBehaviors() {
  let howList = [];
  for ( let i = 0; i < behaviors.length; i ++) {
    if (behaviors[i][0] != "" && behaviors[i][1] === currentKPI) {
    howList.push(behaviors[i][0])
    }
  };
  const howBehaviorRule = SpreadsheetApp.newDataValidation().requireValueInList(howList).build();
  const howBehaviorValidationRange = tab.getRange(tab.getLastRow(), 4, 1, 1)
  howBehaviorValidationRange.setDataValidation(howBehaviorRule);
}

function setDueDate() {
  const dueDateRule = SpreadsheetApp.newDataValidation().requireDate().build();
  const dueDateRange = tab.getRange(tab.getLastRow(), 6, 1, 1)
  dueDateRange.setDataValidation(dueDateRule);
}