import Home from "./Pages/Home";
import My from "./My";
import About from "./Pages/About";
function App() {
  return (
    <div className="App">
      <a href="Home">Home</a>
      <a href="about">About</a>
      <My>
        <Home path='Home'/>
        <About path='about'/>
      </My>
    </div>
  );
}

export default App;
