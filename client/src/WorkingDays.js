import { useState } from "react";

export default function WorkingDays({ days, hours, onAddTimeSlotToSelectedDay }) {
  const [selectedTime, setSelectedTime] = useState('')

  function handleAddTimeSlotToSelectedDay(day) {
    onAddTimeSlotToSelectedDay(selectedTime, day)
  }

  const listOfDays = days.length > 0 && (
    <ul>
      {days.map((day) => (
        <>
          <li>{day}</li>
          <select onChange={e => setSelectedTime(e.target.value)}>
            <option value="All">Select a time</option>
            {hours.map((hour) => (
              <option value={hour}>{hour}</option>
            ))}
          </select>
            <button onClick={() => handleAddTimeSlotToSelectedDay(day)}>
              Add time to day
            </button>
        </>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>Set my available days</h2>
      <div>{listOfDays}</div>
    </div>
  );
}
