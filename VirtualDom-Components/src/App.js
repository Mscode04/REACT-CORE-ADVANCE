import './Main.css'
import Header from './components/Header';


function App() {
  const name="Mohammed shaheen KP"
  return (
    // Data JSX
    <div>
      <Header data={name}></Header>
      <p style={{backgroundColor:"red"}}>My Name Is {name}</p>
      {/* <p><br>//need Closing Tag"</br>"</p> */}
      {/* <br/> or self closing  */}
      <Hello></Hello>
      <Hello></Hello>
       
    </div>
    

  );
}

export default App;

function Hello(){
  return (<h1 className='hello'>Hello Ms</h1>)
}