import { useState, useEffect, useRef } from "react";
import ls from "local-storage";
import dayjs from "dayjs";

function MonthlyList({ daysSinceEpoch }) {
  const [check1, setCheck1] = useState(ls.get("scrub-showers") ?? false);
  const [check2, setCheck2] = useState(
    ls.get("deep-clean-appliances") ?? false
  );
  const [check3, setCheck3] = useState(ls.get("clean-out-garage") ?? false);
  const [check4, setCheck4] = useState(ls.get("vacuum-out-vehicles") ?? false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (dayjs.unix(daysSinceEpoch * 86400).date() === 1) {
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setCheck4(false);
    }
  }, [daysSinceEpoch]);

  return (
    <div className="border full-width">
      <h2>Monthly</h2>
      <ul className="box-column">
        <li className="child">
          <input
            type="checkbox"
            id="scrub-showers"
            checked={check1}
            onChange={() => {
              ls.set("scrub-showers", !check1);
              setCheck1((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="scrub-showers">Scrub Showers</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="deep-clean-appliances"
            checked={check2}
            onChange={() => {
              ls.set("deep-clean-appliances", !check2);
              setCheck2((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="deep-clean-appliances">Deep Clean Appliances</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-out-garage"
            checked={check3}
            onChange={() => {
              ls.set("clean-out-garage", !check3);
              setCheck3((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="clean-out-garage">Clean Out Garage</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="vacuum-out-vehicles"
            checked={check4}
            onChange={() => {
              ls.set("vacuum-out-vehicles", !check4);
              setCheck4((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="vacuum-out-vehicles">Vacuum Out Vehicles</label>
        </li>
      </ul>
    </div>
  );
}

export default MonthlyList;
