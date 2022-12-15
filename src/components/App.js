import React, { component, useState } from "react";
import '../styles/App.css';
const App = () => {
  return (
    <div id="main">
      <h3 data-ns-test="project-name">Ride Pooling Project</h3>
      <p data-ns-test="project-description">The passenger is assigned to a free vehicle by the system, and at the same time, similar requests coming in via the app are checked. If several people would like to go in the same direction and can be transported without a long wait or major detours, the algorithm assigns them to the same trip.</p>
    </div>
  )
}


export default App;
