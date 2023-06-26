import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ShowDetail from './components/ShowDetails';
import { fetchShows } from './redux/TvShows/showSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShowDetails/:id" element={<ShowDetail />} />
      </Routes>
    </div>
  );
}

export default App;
