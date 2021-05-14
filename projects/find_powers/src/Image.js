import React, { useState } from 'react';

function ImageUpload() {
  const [state, setState] = useState({
    file: '',
    imagePreviewUrl: ''
  })

  const url = "http://localhost:5000/upload_image";


  const _handlePost = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    fetch(url, {
      method: 'POST',
      /* mode: "no-cors", */ // that is error part !
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.imagePreviewUrl)
    })
      .then(response => response.json())
      .catch(err => console.log("upload error :", err))
  }

  const _handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    console.log("e.target", e.target.files[0])

    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log("onloadend")
      setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    console.log("state", state);
    reader.readAsDataURL(file)
    console.log("reader", reader);
  }


  let { imagePreviewUrl } = state;
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = (<img
      className="rounded"
      src={imagePreviewUrl}
      style={{ "max-width": "500px", "max-height": "600px" }}
      width="100%"
      height="100%" />);
  }

  return (
    <div className="col">
      <div className="card">
        <form onSubmit={_handleSubmit}>
          <input type="file" class="form-control-file" onChange={_handleImageChange} />
        </form>
        <div className="card-body text-center">
          {console.log("last state", state)}
          {$imagePreview}
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" onClick={_handlePost} type="button">Post</button> &nbsp;
        </div>
      </div>
    </div>
  )


}

export default ImageUpload;