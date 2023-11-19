import { Fragment } from "react";
import MainPageWeb_v from "../UI/MainPageWeb_v";
import { useParams } from "react-router-dom";
import { Result1 } from "../components/Result1";

export const ResultPage = () => {
  const params = useParams();
  console.log(params.id);
  const step = params.id;

  return (
    <Fragment>
      <div
        style={{ width: "100vw", display: "flex", justifyContent: " center" }}
      >
        <MainPageWeb_v>{step == 1 && <Result1 />}</MainPageWeb_v>
      </div>
    </Fragment>
  );
};
