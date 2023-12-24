import "./App.css";
import { useState } from "react";                //1
//useState hook daclare 2 state variables newMessage and greetingMessage

const App = () => {
  const [newMessage, setNewMessage] = useState("");     //2
  // newMessage store the new greeting message entred by the user.

  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");     //3
  // greetingMessage initialized with the default value nd representsthe current.

 

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>     //6
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" 
        type="text" 
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}/>     //5
      </div>

      <div className="buttons">
        <button onClick={() => {setGreetingMessage(newMessage)}}>Update text</button>   //4
      </div>
    </div>
  );
}

export default App;
