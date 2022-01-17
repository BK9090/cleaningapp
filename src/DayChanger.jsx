function DayChanger({ increaseDate, date }) {
  // const decreaseDate = () => {
  //   setDate((prevDate) => prevDate - 1);
  // };

  return (
    <div className="box">
      {/* <button onClick={decreaseDate}>{"<"}</button> */}
      <p>Current Date: {date}</p>
      <button onClick={increaseDate}>{">"}</button>
    </div>
  );
}

export default DayChanger;
