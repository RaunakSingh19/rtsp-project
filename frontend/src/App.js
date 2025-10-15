// import './App.css';

// function App() {
//   return (
//     <div className="App">

          
//       <h1>Livesitter</h1>
//     </div>
//   );
// }

// export default App;

import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import OverlayManager from "./components/OverlayManager";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Live Stream App 🎬
      </h1>
      <VideoPlayer />
      <OverlayManager />
    </div>
  );
}
export default App;