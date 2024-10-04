
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Mobilepage from './stores/pages/Mobilepage'
import CompPage from './stores/pages/CompPage'
import FridgePage from './stores/pages/FridgePage'
import BookPage from './stores/pages/BookPage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import FurniturePage from './stores/pages/FurniturePage'
import SpeakerPage from './stores/pages/SpeakerPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import WatchPage from './stores/pages/WatchPage'
import MyTvPage from './stores/pages/MyTvPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import AcSingle from './singles/AcSingle'
import MenSingle from './singles/MenSingle'
import ComputerSingle from './singles/ComputerSingle'
import WomanSingle from './singles/WomanSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import FridgeSingle from './singles/FridgeSingle'
import KitchenSingle from './singles/KitchenSingle'
import WatchSingle from './singles/WatchSingle'
import BookSingle from './singles/BookSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
       < Route path='/mobiles' element={<Mobilepage/>}/>
       <Route path='/computers' element={<CompPage/>}/>
        <Route path='/fridges' element={<FridgePage/>}/>
        <Route path='/books' element={<BookPage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/speakers' element={<SpeakerPage/>}/>
        <Route path='/menfashion' element={<MenPage/>}/>
        <Route path='/womandressing' element={<WomanPage/>}/>
        <Route path='/watches' element={<WatchPage/>}/>
        <Route path='/tv' element={<MyTvPage/>}/>
        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/cart' element={<UserCart/>}/>
        <Route path='/womandressing/:id' element = {<WomanSingle />} />
        <Route path='/ac/:id' element = {<AcSingle />} />
        <Route path='/men/:id' element = {<MenSingle />} />
        <Route path='/computers/:id' element = {<ComputerSingle />} />
        <Route path='/furniture/:id' element = {<FurnitureSingle />} />
        <Route path='/fridge/:id' element = {<FridgeSingle />} />
        <Route path='/kitchen/:id' element = {<KitchenSingle />} />
        <Route path='/watches/:id' element = {<WatchSingle />} />
     </Routes>
    </div>
  )
}

export default App
