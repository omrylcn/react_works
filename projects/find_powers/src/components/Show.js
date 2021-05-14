import React, { useState, useContext } from "react";
import { AppContext } from "../context";
import Plot from 'react-plotly.js';

const ShowResult = () => {
  const { showArray } = useContext(AppContext);
  //console.log("show array", showArray);
  let y = showArray;
  let x = showArray.map((n, i) => i);

  return (
  
        <div className="col">
        <h5 align="center">Show Result</h5>
          <Plot
            data={[
              {
                x: x,
                y: y,
                type: 'bar',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
              /* { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] }, */
            ]}
            layout={{
              legend: { font: { size: 12 }, x: 0, y: 1 },
              modebar: { orientation: "h", uirevision: "hovermode" },
              /* width: 480,
              height: 480, */
              /* title: {text:'Re',x:0.5,y:0.92}, */
              margin: {
                l: 20,
                r: 20,
                b: 20,
                t: 10,
                padding: 10
              }
            }}
          />
        </div>
     
  );

};

export default ShowResult;




