import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Result1 } from "../components/Result1";

export const ResultPage = () => {
  const params = useParams();
  console.log(params.id);
  const step = params.id;

  return (
    <Fragment>
      {step == 1 && <Result1 />}
      
    </Fragment>
  );
};
