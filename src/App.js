import "./App.css";
import { MouseTrackerExample, RadioGroup, RadioOption } from "./components";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <div>
        <h2>How did you hear about Little Lemon?</h2>
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <button disabled={!selected}>Submit</button>
      </div>
      <MouseTrackerExample />
    </div>
  );
}

export default App;
