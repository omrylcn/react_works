import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Main Articles</h1>
            <hr className="hr-color"></hr>
            <div class="card text-left mb-4">
              {/* <img class="card-img-top" src="holder.js/100px180/" alt=""/> */}
              <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Minim non ullamco ut Lorem labore veniam non culpa sunt est.
                Lorem ullamco pariatur incididunt officia ut anim non dolore laboris elit cillum
                officia tempor. Nulla adipisicing consequat aliqua anim proident dolore eiusmod
                amet mollit in cillum Lorem ad enim. Ad cupidatat id ea dolore enim qui magna
                non commodo dolor ipsum consectetur. Dolore aliqua non fugiat esse non esse
                consectetur culpa irure fugiat minim aliqua culpa. Exercitation anim est est
                mollit pariatur laborum velit qui in ullamco. Sunt nisi aliquip ea ipsum
                deserunt esse consectetur consectetur dolor excepteur eu Lorem ad laborum.</p>
                <a className="btn btn-success btn-card">Read More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
              <div className="card-footer text-muted">
                <span>Test</span>
              </div>
            </div>
            <div class="card text-left">
              {/* <img class="card-img-top" src="holder.js/100px180/" alt=""/> */}
              <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Minim non ullamco ut Lorem labore veniam non culpa sunt est.
                Lorem ullamco pariatur incididunt officia ut anim non dolore laboris elit cillum
                officia tempor. Nulla adipisicing consequat aliqua anim proident dolore eiusmod
                amet mollit in cillum Lorem ad enim. Ad cupidatat id ea dolore enim qui magna
                non commodo dolor ipsum consectetur. Dolore aliqua non fugiat esse non esse
                consectetur culpa irure fugiat minim aliqua culpa. Exercitation anim est est
                mollit pariatur laborum velit qui in ullamco. Sunt nisi aliquip ea ipsum
                deserunt esse consectetur consectetur dolor excepteur eu Lorem ad laborum.</p>
                <a id="card-button" className="btn btn-success btn-card">Read More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
              <div className="card-footer text-muted">
                <span>Test</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">

            <div class="card">
              <h5 class="card-header card-header-bg text-white">Search</h5>
              <div class="card-body">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="enter word" />&nbsp;
                <button className="btn btn-success btn-card" type="button">Search</button>
                </div>
              </div>
            </div>

            <div class="card my-4">
              <h5 class="card-header card-header-bg text-white">Content</h5>
              <div class="card-body">
                <ul className="list-unstyled">
                  <li>
                    <a><i className="fa fa-linux" aria-hidden="true"></i>  Linux</a>
                  </li>
                  <li>
                    <a><i className="fa fa-music" aria-hidden="true"></i>  Music</a>
                  </li>
                  <li>
                    <a><i class="fa fa-futbol-o" aria-hidden="true"></i> Football</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card my4">
              <h5 class="card-header card-header-bg text-white">Image</h5>
              <div class="card-body" align="center">
                <img className="img-fluid" src="//im.vsco.co/aws-us-west-2/0c119e/3405115/5b7ac28fc44e7758f37877eb/vsco5b7ac294a96cd.jpg" alt="#budapest" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default App;