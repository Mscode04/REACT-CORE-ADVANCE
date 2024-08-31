import firebase from'./FireBase/Config'


function App() {
  
  return (
    // Data JSX
    <div className="App">
      <button onClick={() => {
        firebase.firestore().collection('Products').get().then(snapshort=>{
          snapshort.forEach((obj) => {
            console.log(obj.data(),obj.id)
          });
        })
      }}>ME</button>
      <button onClick={() => {
        firebase.firestore().collection('Products').add({
          Name:"MI",
          Price:12334
        })
      }}>Add</button>
      <button onClick={() => {
        firebase.firestore().collection('Products').doc('HuB3n0G6XunI8uoXWOQ9').delete().then(()=>{
          console.log('Setttttttt')
        })
        
      }}>Delete</button>
      <button onClick={() => {
        firebase.firestore().collection('Products').doc('HuB3n0G6XunI8uoXWOQ9').set({
          Name:'updated'
        })
        
      }}>Update</button>
    </div>
  );
}
export default App;

