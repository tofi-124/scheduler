import React from "react";
import cs from "classnames";
import "components/InterviewerListItem.scss";

export default function (
  { name, avatar, selected, setInterviewer } = this.props
) {
  const interviewerClass = cs("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
    <li className={interviewerClass} onClick={setInterviewer} data-testid="day">
      <img className={"interviewers__item-image"} src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
