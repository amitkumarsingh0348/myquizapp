import React, { useState } from "react";

import "../assets/css/Questionbox.css";

const Questionbox = ({ questiondata, option, selected }) => {
  const [answer, setanswer] = useState(option);
  console.log(selected);

  return (
    <div className="questionbox">
      <div className="question">{questiondata}</div>
      {answer.map((ansChoose, index) => (
        <button
          key={index}
          className="ansButton"
          onClick={() => {
            setanswer([ansChoose])
            selected(ansChoose)
          }}
        >
          {ansChoose}
        </button>
      ))}
    </div>
  );
};

export default Questionbox;
