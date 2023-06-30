
import "./App.css";
import Hello from "./Hello";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 
      <About/>
      <Setting/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
