import "./App.css";
import { useState } from "react";
import Reserved from "./Reserved";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import WorkingDays from "./WorkingDays";

function App() {
  const [clickedDay, onChange] = useState(new Date());
  const [availableDays, setAvailableDays] = useState([]);
  const [freeSchedule, setFreeSchedule] = useState({});
  console.log(freeSchedule);
  const hours = [
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
  ];

  function AddDayToAvailability(params) {
    if (availableDays.includes(params)) {
      return;
    }
    setAvailableDays([...availableDays, params]);
  }

  function handleSelectedTime(hour, day) {
    //if the state is empty, or if adding a new day, take the original state and copy it
    setFreeSchedule((prevState) => ({
      ...prevState,
      //above will have the previous state, below will add the day, and add the time slot to an array, or create an empty array to populate
      [day]: [...(freeSchedule[day] || []), hour],
    }));
  }

  return (
    <div className="App">
      <Calendar calendarType="US" onChange={onChange} value={clickedDay} />
      <p>Selected day: </p>
      <p>{clickedDay.toDateString()}</p>
      <button onClick={() => AddDayToAvailability(clickedDay.toDateString())}>
        Add
      </button>
      <WorkingDays
        days={availableDays}
        hours={hours}
        onAddTimeSlotToSelectedDay={handleSelectedTime}
      />
      <Reserved reserved={null} />
    </div>
  );
}

export default App;
