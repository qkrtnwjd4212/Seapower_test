import { Fragment, useState } from "react";

export const Step8 = ({ totalScoreHandler, setIsSelect, isSelect }) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [selectedValue, setSectedValue] = useState(null);

  const answer = 2;

  const onClick = (value) => {
    setIsSelect((prev) => !prev);
    setSectedValue(value);
    const isAnswer = answer === parseInt(value);
    setIsAnswer(isAnswer);
    if (isAnswer) {
      totalScoreHandler();
    }
  };

  const nonEvent = () => {
    //
  };

  return (
    <Fragment>
      8번문제
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          height: 300,
        }}
      >
        <div
          style={{
            border: "1px solid black",
            borderRadius: 4,
            margin: 10,
            backgroundColor: selectedValue === 1 ? "red" : "white",
          }}
          onClick={isSelect ? nonEvent : () => onClick(1)}
        >
          1번
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: 4,
            margin: 10,
            backgroundColor: isSelect ? "green" : "white",
          }}
          onClick={isSelect ? nonEvent : () => onClick(2)}
        >
          2번
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: 4,
            margin: 10,
            backgroundColor: selectedValue === 3 ? "red" : "white",
          }}
          onClick={isSelect ? nonEvent : () => onClick(3)}
        >
          3번
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: 4,
            margin: 10,
            backgroundColor: selectedValue === 4 ? "red" : "white",
          }}
          onClick={isSelect ? nonEvent : () => onClick(4)}
        >
          4번
        </div>
        {isSelect && <div>{isAnswer ? "정답 ! " : "오답 ! "}이거</div>}
      </div>
    </Fragment>
  );
};
