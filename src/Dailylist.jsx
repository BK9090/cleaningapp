import { useState, useEffect } from "react";

function Dailylist({ date }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  useEffect(() => {
    // this code will execute every time date changes
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
    setCheck5(false);
    setCheck6(false);
  }, [date]);

  return (
    <div className="border">
      <h2>The Daily 6</h2>
      <ul className="box">
        <li className="child">
          <input
            type="checkbox"
            id="make-beds"
            checked={check1}
            onChange={() => setCheck1((prevCheck) => !prevCheck)}
          />
          <label htmlFor="make-beds">Make Beds</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wash-dishes"
            checked={check2}
            onChange={() => setCheck2((prevCheck) => !prevCheck)}
          />
          <label htmlFor="wash-dishes">Wash Dishes</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="scrub-sink"
            checked={check3}
            onChange={() => setCheck3((prevCheck) => !prevCheck)}
          />
          <label htmlFor="scrub-sink">Scrub Sink</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wipe-counters"
            checked={check4}
            onChange={() => setCheck4((prevCheck) => !prevCheck)}
          />
          <label htmlFor="wipe-counters">Wipe Counters</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="vacuum-floors"
            checked={check5}
            onChange={() => setCheck5((prevCheck) => !prevCheck)}
          />
          <label htmlFor="vacuum-floors">Vacuum Floors</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="laundry"
            checked={check6}
            onChange={() => setCheck6((prevCheck) => !prevCheck)}
          />
          <label htmlFor="laundry">1 Load of Laundry</label>
        </li>
      </ul>
    </div>
  );
}

export default Dailylist;
