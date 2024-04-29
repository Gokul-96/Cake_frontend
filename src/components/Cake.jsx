import React, { useState } from "react";

function Cake({ cake }) {
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Egg");
  const [weight, setWeight] = useState("500");

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  // Function to calculate price based on category, weight, and quantity
  const calculatePrice = () => {
    // Find the correct price array based on the selected category
    const priceArray = cake.Category.includes(category) ? cake[`Prices${category}`] : null;
    
    if (!priceArray) {
      return "Price not available";
    }

    // Find the price for the selected weight
    const weightPrice = priceArray.find((price) => price[weight]);
    
    if (!weightPrice) {
      return "Price not available for this weight";
    }

    // Calculate total price based on selected weight and quantity
    const totalPrice = weightPrice[weight] * quantity;
    return `₹ ${totalPrice}`;
  };

function addtocart()
{}



  return (
    <div style={{margin: "70px"}} className="shadow p-3 mb-5 bg-white rounded">
      <h1>{cake.Name}</h1>
      <img
        src={cake.image}
        className="img-fluid"
        style={{ height: "300px", width: "300px" }}
        alt={cake.Name}
      />
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Category</p>
          <select className="form-control" value={category} onChange={handleCategoryChange}>
            {cake.Category.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Weight(g/Kg)</p>
          <select className="form-control" value={weight} onChange={handleWeightChange}>
            {cake.Weight.map((weight, index) => (
              <option key={index} value={weight}>
                {weight}
              </option>
            ))}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select className="form-control" value={quantity} onChange={handleQuantityChange}>
            {[...Array(10).keys()].map((x, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="border border-dark mt-2"> Price: {calculatePrice()} </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn btn btn-danger" onclick={addtocart}> ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Cake;