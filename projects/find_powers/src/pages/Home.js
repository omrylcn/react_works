import React from 'react';
import ShowResult from '../components/Show';
import Upload from '../components/Upload';

const Home = () => {
  return (
    <div className="container">
      <br />
      <h5 align="center">Power Graph</h5>
      <hr />
      <div className="row">
        <Upload />
        <ShowResult />
      </div>
    </div>
  )
};


export default Home;