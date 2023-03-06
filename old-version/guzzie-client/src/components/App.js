import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// Routes
import Home from './routes/HomeRoute'

import Favorite from './routes/FavoriteRoute'
import Profile from './routes/ProfileRoute'

import Restaurant from './routes/RestaurantRoute'
import Guide from './routes/GuideRoute'
import Deal from './routes/DealRoute'
import Wonder from './routes/WonderRoute'

// Components
import NavBar from './component/NavBar'



function App() {
  return (
    <div className="App">
      <NavBar />
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* user related */}
            <Route path="/favorites/:d" element={<Favorite />} />
            <Route path="/profile/:id" element={<Profile />} />
            {/* overall links */}
            <Route path="/guides" element={<Restaurant />} />
            <Route path="/guides" element={<Guide />} />
            <Route path="/deals" element={<Deal />} />
            <Route path="/wonder" element={<Wonder />} />
          </Routes>
         </BrowserRouter>
    </div> 
  );
}

export default App;
