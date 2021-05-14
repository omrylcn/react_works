import React, { useState } from 'react';

const Review = () => {

  const [index, setIndex] = useState(0);
  //console.log("index", index);

  //console.log("title", title, "category", category, "price", price, "img", img, "desc", desc);

  return (
    <>
      <img src="./images/food_image.jpeg" alt="food_image" className="mx-auto d-block" />
      <h3 style={{ "text-align": "center" }}>Hamburger Menu</h3>
    </>

  )
}

export default Review;