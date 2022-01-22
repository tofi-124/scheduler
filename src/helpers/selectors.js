export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter((singleDay) => singleDay.name === day);
  let appointments = [];
  
  if (selectedDay[0] && selectedDay[0].appointments) {
    appointments = selectedDay[0].appointments;
  }
  return appointments.map((id) => state.appointments[id]);
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const { student, interviewer } = interview;
  return {
    student,
    interviewer: state.interviewers[interviewer],
  };
}

export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.filter((singleDay) => singleDay.name === day);
  let dayInterviewers = [];
  
  if (selectedDay[0] && selectedDay[0].interviewers) {
    dayInterviewers = selectedDay[0].interviewers;
  }
  return dayInterviewers.map((id) => state.interviewers[id]);
}