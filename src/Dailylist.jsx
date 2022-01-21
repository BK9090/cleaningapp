import { useState, useEffect, useRef } from "react";
import ls from "local-storage";

function Dailylist({ daysSinceEpoch }) {
  const [check1, setCheck1] = useState(ls.get("make-beds") ?? false);
  const [check2, setCheck2] = useState(ls.get("wash-dishes") ?? false);
  const [check3, setCheck3] = useState(ls.get("scrub-sink") ?? false);
  const [check4, setCheck4] = useState(ls.get("wipe-counters") ?? false);
  const [check5, setCheck5] = useState(ls.get("vacuum-floors") ?? false);
  const [check6, setCheck6] = useState(ls.get("laundry") ?? false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // this code will execute every time date changes
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
    setCheck5(false);
    setCheck6(false);
  }, [daysSinceEpoch]);

  return (
    <div className="border">
      <h2>The Daily 6</h2>
      <ul className="box">
        <li className="child">
          <input
            type="checkbox"
            id="make-beds"
            checked={check1}
            onChange={() => {
              setCheck1((prevCheck) => !prevCheck);
              ls.set("make-beds", !check1);
            }}
          />
          <label htmlFor="make-beds">Make Beds</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wash-dishes"
            checked={check2}
            onChange={() => {
              ls.set("wash-dishes", !check2);
              setCheck2((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="wash-dishes">Wash Dishes</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="scrub-sink"
            checked={check3}
            onChange={() => {
              ls.set("scrub-sink", !check3);
              setCheck3((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="scrub-sink">Scrub Sink</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wipe-counters"
            checked={check4}
            onChange={() => {
              ls.set("wipe-counters", !check4);
              setCheck4((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="wipe-counters">Wipe Counters</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="vacuum-floors"
            checked={check5}
            onChange={() => {
              ls.set("vacuum-floors", !check5);
              setCheck5((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="vacuum-floors">Vacuum Floors</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="laundry"
            checked={check6}
            onChange={() => {
              ls.set("laundry", !check6);
              setCheck6((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="laundry">1 Load of Laundry</label>
        </li>
      </ul>
    </div>
  );
}

export default Dailylist;
