function openCustomMenu() {
  ui.createMenu('Driving KPIs')
    .addSubMenu(ui.createMenu('Get Calls')
      .addItem('Get Coaching Calls', 'getFreshCalls')
      .addItem('Get First Calls', 'getFirstCalls'))
    .addSubMenu(ui.createMenu('Send')
      .addItem('Send Scorecard', 'savePDF'))
    .addSubMenu(ui.createMenu('Admin Functions')
      .addItem('Create a Copy','copyTemplate'))
      .addToUi();
  getDrivingKPIData();
}