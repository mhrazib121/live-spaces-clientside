import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Trending from './Pages/Trending/Trending';
import LatestShows from './Pages/LatestShows/LatestShows';
import MostPopular from './Pages/MostPopular/MostPopular';
import InGenesis from './Pages/InGenesis/InGenesis';
import InTemple from './Pages/InTemple/InTemple';
import InVoid from './Pages/InVoid/InVoid';
import BAYC from './Pages/BAYC/BAYC';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='trending' element={<Trending/>}/>
        <Route path='latest' element={<LatestShows/>}/>
        <Route path='popular' element={<MostPopular/>}/>
        <Route path='ingenesis' element={<InGenesis/>}/>
        <Route path='intemple' element={<InTemple/>}/>
        <Route path='invoid' element={<InVoid/>}/>
        <Route path='bayc' element={<BAYC/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
