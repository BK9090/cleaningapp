import "./App.css";
import { useState } from "react";
import Dailylist from "./Dailylist";
import DayChanger from "./DayChanger";
import WeeklyList from "./WeeklyList";
import MonthlyList from "./MonthlyList";
import QuarterlyList from "./QuarterlyList";

function App() {
  const [date, setDate] = useState(0);
  const increaseDate = () => {
    setDate((prevDate) => prevDate + 1);
  };
  return (
    <div className="App">
      <DayChanger increaseDate={increaseDate} date={date} />
      <Dailylist date={date} />
      <WeeklyList date={date} />
      <div className="box-row">
        <MonthlyList date={date} />
        <QuarterlyList date={date} />
      </div>
    </div>
  );
}

export default App;
