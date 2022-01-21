import dayjs from "dayjs";

function DayChanger({ increaseDate, daysSinceEpoch }) {
  // const decreaseDate = () => {
  //   setDate((prevDate) => prevDate - 1);
  // };

  //  WHY DOES THIS STOP AT MARCH 12th 2022?!?!!?!?!
  return (
    <div className="box">
      {/* <button onClick={decreaseDate}>{"<"}</button> */}
      <p>
        Current Date: {dayjs.unix(daysSinceEpoch * 86400).format("MM/DD/YYYY")}
      </p>
      <button onClick={increaseDate}>{">"}</button>
    </div>
  );
}

export default DayChanger;
