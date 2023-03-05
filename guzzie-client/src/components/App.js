import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Update />} />
            <Route path="/:id" element={<Update />} />
            <Route path="/:id" element={<Update />} /> */}
          </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
