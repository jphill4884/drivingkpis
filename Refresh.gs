function refresh() {
  const formula = '=ARRAYFORMULA(ROUND(RANDARRAY(5,1)*COUNTA($B$2:$B)))';
  const updateFormula = callsSheet.getRange(2, 1, 1, 1);
    updateFormula.setValue(formula);
}
