import { useState } from 'react';
import Comedy from './Movie App/Comedy';
import Home from './Movie App/Home';
import Latest from './Movie App/Latest';
import Popular from './Movie App/Popular';
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext } from 'react';
import Populardetails from './Movie details/Populardetails';
import Comedydeatils from './Movie details/Comedydeatils';
import Latestdetails from './Movie details/Latestdetails';
import './movie.css'


export const newcontext = createContext()

function App() {

  const [popular,setPopular] = useState([])
  const [latest, setLatest] = useState([])
  const [comedy,setComedy] = useState([])
  

  
  return (
    <div>


   <newcontext.Provider value={[popular,setPopular,latest, setLatest,comedy,setComedy]}>

   <BrowserRouter>

   <Home/>
   
   <Routes>
     <Route path='/' element={<Latest/>}></Route>
     <Route path='/popular' element={<Popular/>}></Route>
     <Route path='/comedy' element={<Comedy/>}></Route>
     <Route path='/popular/:id' element={<Populardetails/>}></Route>
     <Route path='/comedy/:id' element={<Comedydeatils/>}></Route>
     <Route path='/:id' element={<Latestdetails/>}></Route>
   </Routes>
   </BrowserRouter>

   </newcontext.Provider>


    </div>
  );
}

export default App;
