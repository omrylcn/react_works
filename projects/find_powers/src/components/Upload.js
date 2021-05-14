import React, { useContext } from "react";
import { AppContext } from "../context";


const Upload = () => {
  const { value, setValue, power, setPower, setCommit } = useContext(AppContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("set commit");
    setCommit(new Date().getTime().toString())
  }



  //console.log("value", value)
  return (
    <div className="col">
      <h5>Set Parameters</h5>
      <form onSubmit={handleSubmit} class="form-group">

        <div className="form-row">
          <div className="col-4">
            <label for="fvalue">Value :</label> &nbsp;
            <input
              className="form-control"
              type='number'
              name='value'
              value={value}
              onChange={(event) => setValue(event.target.value)}
              id='fvalue' /><br />
          </div>
        </div>
        <div className="form-row">
          <div className="col-4">
            <label for="fpower">Power :</label>&nbsp;
            <input type='number' name='power' className="form-control" value={power} onChange={(event) => setPower(event.target.value)} id='fpower' /><br />
          </div>
        </div>
        <div className="form-row">
          <div className="col-4">
            <button type="submit" className="btn btn-primary">Commit</button>
          </div>
        </div>
      </form>

    </div>
  );

};

export default Upload;