import { useState } from "react";
import Body from "./components/Body";

import Header from "./components/Header";
import "./index.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="app">
      <Header setCity={setCity} city={city} />

      <div className="app__body">
        <Body city={city} setCity={setCity} />
      </div>
    </div>
  );
}
export default App;
