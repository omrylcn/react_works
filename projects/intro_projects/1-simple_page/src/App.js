import React from 'react';
import Review from './components/Review';


function App() {

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2 className="display-4 text-center">Food Page</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  )
}
export default App