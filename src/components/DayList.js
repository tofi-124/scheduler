import React from "react";
import DayListItem from "components/DayListItem";

export default function ({ days, propDay, setDay } = this.props) {
  return (
    <ul>
      {days.map((day) => (
        <DayListItem
          name={day.name}
          key={day.id}
          selected={day.name === propDay}
          setDay={setDay}
          spots={day.spots}
        />
      ))}
      )
    </ul>
  );
}