import "./App.css";
import { useState } from "react";

const App = () => {
  const [newMessage, setNewMessage] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

 

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" 
        type="text" 
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={() => {setGreetingMessage(newMessage)}}>Update text</button>
      </div>
    </div>
  );
}

export default App;
