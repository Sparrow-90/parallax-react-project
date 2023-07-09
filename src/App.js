import React from "react";
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import TextBox from "./components/TextBox";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <ImageOne/>
      <TextBox/>
      <ImageTwo/>
      <TextBox/>
      <ImageThree/>
      <TextBox/>
      <Slider/>
    </div>
  );
}

export default App;
