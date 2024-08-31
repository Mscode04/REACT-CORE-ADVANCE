
import Profile from './Container/Profile';
import About from './Container/About';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AppContext } from './AppContext';
import {firebase} from './FireBase/Config'

function App() {
  const nav = useNavigate();
  const [state, setState] = useState(100)

  return (
    <div className="App">
       
   
      <button onClick={() => nav('/ab')}>About</button>
      <button onClick={() => nav('/pro')}>Profile</button>
      <AppContext.Provider value={{data:state}}>
      <Routes>
      <Route path="/ab" element={<About />} />
        <Route path="/pro" element={<Profile/>} />
        <Route path="/hello" element={<p>Render Function</p>} />
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
