import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCakes } from "../actions/cakeActions";
import Cake from "../components/Cake";

function Homescreen() {
  const dispatch = useDispatch();

  // Select cakes state from Redux store using useSelector
  const { cakes, error, loading } = useSelector((state) => state.cake || {});

  // Fetch cakes data on component mount using useEffect
  useEffect(() => {
    // Dispatch action to fetch all cakes
    dispatch(getAllCakes());
  }, [dispatch]); // Include dispatch as a dependency of useEffect

  // Log cakes, error, and loading status for debugging
  console.log("Cakes:", cakes);
  console.log("Error:", error);
  console.log("Loading:", loading);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong: {error.message}</h1>
        ) : cakes && cakes.length > 0 ? (
          cakes.map((cake, index) => (
            <div className="col-md-4" key={index}>
              <Cake cake={cake} />
            </div>
          ))
        ) : (
          <h1>No cakes found.</h1>
        )}
      </div>
    </div>
  );
}

export default Homescreen;