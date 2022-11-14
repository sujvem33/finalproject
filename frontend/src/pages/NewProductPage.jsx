import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createOneProduct } from "../utilities/products-service";
import { useParams, useNavigate } from "react-router-dom";

function NewProductPage() {
  const categoryParam = useParams().category;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(categoryParam);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleimageChange = (e) => {
    setImage(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleErrorChange = (e) => {
    setError(e.target.value);
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Retrieve state
    const state = {
      name,
      image,
      category,
      description,
      price,
      error,
    };

    try {
      // Make a copy of our data
      const formData = { ...state };
      delete formData["error"];

      console.log("formData is");
      console.log(formData);

      // Send the data to our backend
      const newProduct = await createOneProduct(formData);

      // Log the data to the console
      navigate(`/${categoryParam}`);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <div className="newPage">
      <h4>New Product Page</h4>
      <div
        className="form-container"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
      >
       
        <form autoComplete="off">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              return handleNameChange(e);
            }}
            value={name}
            required
            placeholder="Name"
          />
          <label>Image Address</label>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              return handleimageChange(e);
            }}
            value={image}
            placeholder="Image Address"
          />
         <h4>Select Category</h4>
          <input
            type="radio"
            id="coords"
            name="category"
            value="coords"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
            required
            checked={category === "coords"}
          />
          <label htmlFor="coords">Coords</label>
          <input
            type="radio"
            id="dresses"
            name="category"
            value="dresses"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
            required
            checked={category === "dresses"}
          />
          <label
            htmlFor="dresses"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
          >
            Dresses
          </label>

          <input
            type="radio"
            id="lehengas"
            name="category"
            value="lehengas"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
            required
            checked={category === "lehengas"}
          />
          <label
            htmlFor="lehengas"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
          >
            Lehengas
          </label>

          <input
            type="radio"
            id="sarees"
            name="category"
            value="sarees"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
            required
            checked={category === "sarees"}
          />
          <label
            htmlFor="sarees"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
          >
            Sarees
          </label>

          <input
            type="radio"
            id="suits"
            name="category"
            value="suits"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
            required
            checked={category === "suits"}
          />
          <label
            htmlFor="suits"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
          >
            Suits
          </label>

          

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              return handleDescriptionChange(e);
            }}
            value={description}
            placeholder="Description"
          />
          <label>Price</label>
          <input
            type="text"
            name="price"
            onChange={(e) => {
              return handlePriceChange(e);
            }}
            value={price}
            required   
          />
<br/>
          <button type="submit">Add Product</button>
        </form>
      </div>

      <p className="error-message">{error}</p>
    </div>
  );
}

export default NewProductPage;