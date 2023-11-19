import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kakao from "./Kakao";
import { Fragment } from "react";
import { Moonhaeryuk } from "./pages/Moonhaeryuk";
import { ResultPage } from "./pages/ResultPage";

function App() {
  const NotFound = () => {
    return <h1>잘못된 주소 접근</h1>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Moonhaeryuk />} />
        <Route path="/result/:id" element={<ResultPage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
