
import React, { useState } from 'react';
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <div className='box'>
      <h1>Show your Name</h1>
      <button onClick={openModal}>Show</button>
      </div>

      {isModalOpen && (
        <div className="modal modalStyle">
          <div className="modal-content modalContentStyle">
            <h3>I love You</h3>
            <p>YOU LOVE ME </p>
            <button onClick={closeModal}>Yes</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;


