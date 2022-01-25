import React, { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: [],
  });

  function bookInterview(appointmentID, interview) {
    const appointment = {
      ...state.appointments[appointmentID],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [appointmentID]: appointment,
    };

    const days = updateSpots(state, appointments);

    return axios
      .put(`/api/appointments/${appointmentID}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days,
        });
      });
  }

  const cancelInterview = (appointmentID) => {
    const appointment = {
      ...state.appointments[appointmentID],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [appointmentID]: appointment,
    };

    const days = updateSpots(state, appointments);
    return axios.delete(`/api/appointments/${appointmentID}`).then(() =>
      setState({
        ...state,
        appointments,
        days,
      })
    );
  };

  const updateSpots = (state, appointments) => {
    const days = state.days.map((obj) => {
      return { ...obj };
    });

    const currentDay = days.find((obj) => obj.name === state.day);
    console.log(currentDay);

    const remainingSpots = currentDay.appointments.reduce(
      (remainingSpots, appID) => {
        return appointments[appID].interview
          ? remainingSpots
          : ++remainingSpots;
      },
      0
    );
    currentDay.spots = remainingSpots;
    return days;
  };

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((er) => console.log("error", er));
  }, []);

  return { state, bookInterview, cancelInterview, setDay };
};

export default useApplicationData;
