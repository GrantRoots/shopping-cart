import { useState, useEffect } from "react";

function Card({ id }) {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setName(response.title);
        setPrice(response.price);
        setImageURL(response.image);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(name, price);

  return (
    <>
      <div>Card</div>
      <div>TITLE: {name}</div>
      <div>PRICE: {price}</div>
      <img src={imageURL} alt="Image" />
    </>
  );
}

export { Card };
