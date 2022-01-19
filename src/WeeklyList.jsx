import { useEffect, useState, useRef } from "react";
import ls from "local-storage";

function WeeklyList({ date }) {
  const [check1, setCheck1] = useState(ls.get("wipe-out-fridge") ?? false);
  const [check2, setCheck2] = useState(ls.get("wipe-out-microwave") ?? false);
  const [check3, setCheck3] = useState(ls.get("tidy-pantry") ?? false);
  const [check4, setCheck4] = useState(ls.get("mop-floors") ?? false);
  const [check5, setCheck5] = useState(ls.get("clean-bathrooms") ?? false);
  const [check6, setCheck6] = useState(ls.get("clean-sink-drains") ?? false);
  const [check7, setCheck7] = useState(ls.get("dust-furniture") ?? false);
  const [check8, setCheck8] = useState(ls.get("wash-bedding") ?? false);
  const [check9, setCheck9] = useState(ls.get("tidy-car") ?? false);
  const [check10, setCheck10] = useState(ls.get("clean-bowls") ?? false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // this executes every time date changes
    if (date % 7 === 0) {
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setCheck4(false);
      setCheck5(false);
      setCheck6(false);
      setCheck7(false);
      setCheck8(false);
      setCheck9(false);
      setCheck10(false);
    }
  }, [date]);

  return (
    <div className="border">
      <h2>The Weekly 10</h2>
      <ul className="box">
        <li className="child">
          <input
            type="checkbox"
            id="wipe-out-fridge"
            checked={check1}
            onChange={() => {
              ls.set("wipe-out-fridge", !check1);
              setCheck1((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="wipe-out-fridge">Wipe out fridge</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wipe-out-microwave"
            checked={check2}
            onChange={() => {
              ls.set("wipe-out-microwave", !check2);
              setCheck2((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="wipe-out-microwave">Wipe out microwave</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="tidy-pantry"
            checked={check3}
            onChange={() => {
              ls.set("tidy-pantry", !check3);
              setCheck3((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="tidy-pantry">Tidy pantry</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="mop-floors"
            checked={check4}
            onChange={() => {
              ls.set("mop-floors", !check4);
              setCheck4((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="mop-floors">Mop floors</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-bathrooms"
            checked={check5}
            onChange={() => {
              ls.set("clean-bathrooms", !check5);
              setCheck5((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="clean-bathrooms">Clean bathrooms</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-sink-drains"
            checked={check6}
            onChange={() => {
              ls.set("clean-sink-drains", !check6);
              setCheck6((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="clean-sink-drains">Clean sink drains</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="dust-furniture"
            checked={check7}
            onChange={() => {
              ls.set("dust-furniture", !check7);
              setCheck7((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="dust-furniture">Dust furniture</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wash-bedding"
            checked={check8}
            onChange={() => {
              ls.set("wash-bedding", !check8);
              setCheck8((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="wash-bedding">Wash bedding</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="tidy-car"
            checked={check9}
            onChange={() => {
              ls.set("tidy-car", !check9);
              setCheck9((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="tidy-car">Tidy car</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-bowls"
            checked={check10}
            onChange={() => {
              ls.set("clean-bowls", !check10);
              setCheck10((prevCheck) => !prevCheck);
            }}
          />
          <label htmlFor="clean-bowls">Clean pets' bowls</label>
        </li>
      </ul>
    </div>
  );
}

export default WeeklyList;
