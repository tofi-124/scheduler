export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter((singleDay) => singleDay.name === day);
  let appointments = [];
  // Get appointments if they exist
  if (selectedDay[0] && selectedDay[0].appointments) {
    appointments = selectedDay[0].appointments;
  }
  return appointments.map((id) => state.appointments[id]);
}
