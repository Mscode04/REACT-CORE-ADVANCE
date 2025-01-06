import React from 'react';
import './User.css';
import Messi from '../IMAGES/MESSI.jpg'
import Ny from '../IMAGES/NAYMER.jpg'
import Cr from '../IMAGES/CR7.jpg'
function User() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={Messi} className="card-img-top" alt="John Doe" />
            <div className="card-body text-center">
              <div className="pro">
              <h5 className="con-pro"> <span>Name:</span>   <span>Messi</span></h5>
              <p className="con-pro"> <span>Job: </span>    <span>Software Engineer</span></p>
              <p className="con-pro"> <span>Company:</span> <span>TechCorp</span> </p>
              </div>
              <div className="social-icons mb-3">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://plus.google.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-google"></i>
                </a>
              </div>
              <a href="#" className="btn btn-vt">View Profile</a>
            </div>
          </div>
        </div>


        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={Ny} className="card-img-top" alt="John Doe" />
            <div className="card-body text-center">
              <div className="pro">
              <h5 className="con-pro"> <span>Name:</span>   <span>Naymer</span></h5>
              <p className="con-pro"> <span>Job: </span>    <span>Software Engineer</span></p>
              <p className="con-pro"> <span>Company:</span> <span>TechCorp</span> </p>
              </div>
              <div className="social-icons mb-3">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://plus.google.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-google"></i>
                </a>
              </div>
              <a href="#" className="btn btn-vt">View Profile</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={Cr} className="card-img-top" alt="John Doe" />
            <div className="card-body text-center">
              <div className="pro">
              <h5 className="con-pro"> <span>Name:</span>   <span>Ronaldo</span></h5>
              <p className="con-pro"> <span>Job: </span>    <span>Software Engineer</span></p>
              <p className="con-pro"> <span>Company:</span> <span>TechCorp</span> </p>
              </div>
              <div className="social-icons mb-3">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://plus.google.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mx-1">
                  <i className="fab fa-google"></i>
                </a>
              </div>
              <a href="#" className="btn btn-vt">View Profile</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default User;