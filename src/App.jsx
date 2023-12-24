import "./App.css";
import { useState } from "react"; //import function usestate จาก react

function App() {
  const [greetingInputText, setGreetingInputText] = useState("");
  const [greetingText, setGreetingText] = useState("Greeting Message");
  // [state, function ที่เอาไว้เปลี่ยน state] จำเป็นต้องใช้ฟังก์ชันเพื่อใช้ในการเปลี่ยน state เพราะเป็นกระบวนการของ react
  // state มี 2 stage

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setGreetingInputText(event.target.value);
          }}
          value={greetingInputText}
        />
      </div>

      <div>
        <button
          className="buttons"
          onClick={() => {
            setGreetingText(greetingInputText);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
