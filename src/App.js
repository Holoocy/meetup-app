import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupPage from './Pages/NewMeetup';
import FavoritesPage from './Pages/Favorites';
import Layout from './Layout/Layout';



function App() {
  return (
    <><Layout><Routes>
      <Route path='/' element={<AllMeetupsPage />} exact />
      <Route path='/new-meetup' element={<NewMeetupPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes></Layout></>
  );
};

export default App;
