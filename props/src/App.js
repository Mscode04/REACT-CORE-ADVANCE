
import Profile from './Container/Profile';
import About from './Container/About';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const nav = useNavigate();
  const [state, setState] = useState(10)

  return (
    <div className="App">
      <button onClick={() => nav('/ab')}>About</button>
      <button onClick={() => nav('/pro')}>Profile</button>
      <Routes>
      <Route path="/ab" element={<About />} />
        <Route path="/pro" element={<Profile data={state} />} />
        <Route path="/hello" element={<p>Render Function</p>} />
      </Routes>
    </div>
  );
}

export default App;
