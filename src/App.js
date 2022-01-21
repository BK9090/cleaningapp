import "./App.css";
import { useEffect, useState } from "react";
import Dailylist from "./Dailylist";
import DayChanger from "./DayChanger";
import WeeklyList from "./WeeklyList";
import MonthlyList from "./MonthlyList";
import QuarterlyList from "./QuarterlyList";
import dayjs from "dayjs";

function App() {
  const [daysSinceEpoch, setDate] = useState(
    Math.floor(dayjs().unix() / 86400)
  );
  const increaseDate = () => {
    setDate((prevDate) =>
      Math.floor(
        dayjs
          .unix(prevDate * 86400)
          .add(1, "day")
          .unix() / 86400
      )
    );
  };
  useEffect(() => {
    const id = setInterval(() => {
      setDate(Math.floor(dayjs().unix() / 86400));
    }, 60 * 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="App">
      <DayChanger increaseDate={increaseDate} daysSinceEpoch={daysSinceEpoch} />
      <Dailylist daysSinceEpoch={daysSinceEpoch} />
      <WeeklyList daysSinceEpoch={daysSinceEpoch} />
      <div className="box-row">
        <MonthlyList daysSinceEpoch={daysSinceEpoch} />
        <QuarterlyList daysSinceEpoch={daysSinceEpoch} />
      </div>
    </div>
  );
}

export default App;
