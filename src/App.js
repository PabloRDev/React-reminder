import React, { useState } from "react";
import data from "./data";
import List from "./components/List";

import "./App.scss";

function App() {
  const [meeting, setMeeting] = useState(data);

  return (
    <main>
      <section className="container">
        <h3 className="App-header">{meeting.length} meetings today</h3>
        <List meeting={meeting} />
        <button onClick={() => setMeeting([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
