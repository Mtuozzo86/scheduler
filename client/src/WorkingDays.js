import React from "react";

export default function WorkingDays({ days }) {
  const listOfDays = days.length > 0 && (
    <ul>
      {days.map((day) => (
        <div style={{display: 'flex', margin: '0 200px'}}>
          <li>{day}</li>
          <button>times</button>
        </div>
      ))}
    </ul>
  );
  return (
    <div>
      <h2>My available days</h2>
      <div>{listOfDays}</div>
    </div>
  );
}
