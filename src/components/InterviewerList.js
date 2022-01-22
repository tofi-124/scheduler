import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList({ interviewers, onChange, value }) {
  const allInterviewers = interviewers.map((person) => {
    return (
      <InterviewerListItem
        {...person}
        key={person.id}
        setInterviewer={() => onChange(person.id)}
        selected={person.id === value}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{allInterviewers}</ul>
    </section>
  );
}
