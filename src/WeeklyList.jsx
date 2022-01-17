import { useEffect, useState } from "react";

function WeeklyList({ date }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);

  useEffect(() => {
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
            onChange={() => setCheck1((prevCheck) => !prevCheck)}
          />
          <label htmlFor="wipe-out-fridge">Wipe out fridge</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wipe-out-microwave"
            checked={check2}
            onChange={() => setCheck2((prevCheck) => !prevCheck)}
          />
          <label htmlFor="wipe-out-microwave">Wipe out microwave</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="tidy-pantry"
            checked={check3}
            onChange={() => setCheck3((prevCheck) => !prevCheck)}
          />
          <label htmlFor="tidy-pantry">Tidy pantry</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="mop-floors"
            checked={check4}
            onChange={() => setCheck4((prevCheck) => !prevCheck)}
          />
          <label htmlFor="mop-floors">Mop floors</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-bathrooms"
            checked={check5}
            onChange={() => setCheck5((prevCheck) => !prevCheck)}
          />
          <label htmlFor="clean-bathrooms">Clean bathrooms</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-sink-drains"
            checked={check6}
            onChange={() => setCheck6((prevCheck) => !prevCheck)}
          />
          <label htmlFor="clean-sink-drains">Clean sink drains</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="dust-furniture"
            checked={check7}
            onChange={() => setCheck7((prevCheck) => !prevCheck)}
          />
          <label htmlFor="dust-furniture">Dust furniture</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="wash-bedding"
            checked={check8}
            onChange={() => setCheck8((prevCheck) => !prevCheck)}
          />
          <label htmlFor="wash-bedding">Wash bedding</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="tidy-car"
            checked={check9}
            onChange={() => setCheck9((prevCheck) => !prevCheck)}
          />
          <label htmlFor="tidy-car">Tidy car</label>
        </li>
        <li className="child">
          <input
            type="checkbox"
            id="clean-bowls"
            checked={check10}
            onChange={() => setCheck10((prevCheck) => !prevCheck)}
          />
          <label htmlFor="clean-bowls">Clean pets' bowls</label>
        </li>
      </ul>
    </div>
  );
}

export default WeeklyList;
