
import Profile from './Container/Profile';
import About from './Container/About';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  const nav = useNavigate();

  return (
    <div className="App">
      <button onClick={() => nav('/ab')}>About</button>
      <button onClick={() => nav('/pro')}>Profile</button>
      <Routes>
        <Route path="/ab" element={<About />} />
        <Route path="/pro" element={<Profile />} />
        <Route path="/hello" element={<p>Render Function</p>} />
      </Routes>
    </div>
  );
}

export default App;
