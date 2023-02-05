function scheduleNextCheckIn() {
  const setDateTime = HtmlService.createHtmlOutputFromFile('Scheduler')
    .setWidth(400)
    .setHeight(150);
  SpreadsheetApp.getUi()
    .showModalDialog(setDateTime, 'Set Day and Time of Next Check in');
}

function createCalendarEvent(date, time) {
  const scheduledTime = `${date} ${time}`;
  const timeString = Date.parse(scheduledTime);
  const sdrEmail =tab.getRange(2, 4, 1, 1).getValue();
  const calendar = CalendarApp.getDefaultCalendar();
  const event = calendar.createEvent('Driving KPIs - Follow Up',
                                      new Date (scheduledTime),
                                      new Date(scheduledTime),
                                      {guests: sdrEmail});
};
