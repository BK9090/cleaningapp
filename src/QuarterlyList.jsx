import { useState, useEffect, useRef } from "react";
import ls from "local-storage";

function QuarterlyList({ date }) {
  const [check1, setCheck1] = useState(ls.get("wipe-baseboards") ?? false);
  const [check2, setCheck2] = useState(ls.get("clean-fans-light") ?? false);
  const [check3, setCheck3] = useState(ls.get("clean-windows") ?? false);
  const [check4, setCheck4] = useState(ls.get("clean-furniture") ?? false);
  const [check5, setCheck5] = useState(ls.get("change-air-filter") ?? false);
  const [check6, setCheck6] = useState(ls.get("wipe-cabinets") ?? false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // this code will execute every time date changes
    if (date % Math.floor(365 / 4) === 0) {
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setCheck4(false);
      setCheck5(false);
      setCheck6(false);
    }
  }, [date]);

  return (
    <div className="border">
      <h2>Quarterly</h2>
      <ul className="box-column">
        <li className="child">
          <input
            type="checkbox"
            id="wipe-baseboards"
            checked={check1}
            onChange={() => {
              setCheck1((prevCheck) => !prevCheck);
              ls.set("wipe-baseboards", !check1);
            }}
          />
          <label htmlFor="wipe-baseboards">Wipe Baseboards</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-fans-light"
            checked={check2}
            onChange={() => {
              ls.set("clean-fans-light", !check2);
              setCheck2((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="clean-fans-light">Clean Fans and Lights</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-windows"
            checked={check3}
            onChange={() => {
              ls.set("clean-windows", !check3);
              setCheck3((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="clean-windows">Clean Windows</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-furniture"
            checked={check4}
            onChange={() => {
              ls.set("clean-furniture", !check4);
              setCheck4((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="clean-furniture">Clean Furniture</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="change-air-filter"
            checked={check5}
            onChange={() => {
              ls.set("change-air-filter", !check5);
              setCheck5((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="change-air-filter">Change Air Filter</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wipe-cabinets"
            checked={check6}
            onChange={() => {
              ls.set("wipe-cabinets", !check6);
              setCheck6((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="wipe-cabinets">Wipe Down Cabinets</label>
        </li>
      </ul>
    </div>
  );
}

export default QuarterlyList;
