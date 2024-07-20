import FuncOne from "./FuncOne";
import FuncThree from "./FuncThree";
import FuncTwo from "./FuncTwo";
import Yellow from "./Yellow";
import Footer from "./Footer";
import { useState } from "react";
import Intro from "./Intro";

function App() {
  return (
    <>
      <Intro />
      <FuncOne />
      <FuncTwo />
      <FuncThree />
      <Yellow />
      <Footer />
    </>
  );
}

export default App;
