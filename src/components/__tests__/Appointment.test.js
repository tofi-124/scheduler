import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {
  const props = {
    id: 1,
    time: "12pm",
    interview: null,
    interviewers: [
      {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
      { id: 9, name: "Lindsay Chu", avatar: "https://i.imgur.com/nPywAp1.jpg" },
      {
        id: 10,
        name: "Samantha Stanic",
        avatar: "https://i.imgur.com/okB9WKC.jpg",
      },
    ],
    bookInterview: jest.fn(),
    cancelInterview: jest.fn(),
  };
  it("renders without crashing", () => {
    render(<Appointment {...props} />);
  });
});
