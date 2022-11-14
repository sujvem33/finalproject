import React, { useState, useEffect } from "react";
import { updateProduct, getOneProduct } from "../utilities/products-service";
import { useParams, useNavigate } from "react-router-dom";

function EditPage() {
  
  const navigate = useNavigate();
  const categoryParam = useParams().category;
  const idParam = useParams().id;
  console.log(idParam);

  
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    const singleProduct = await getOneProduct(category, idParam);
    setProduct(singleProduct);
    console.log(singleProduct);
  };

  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [category, setCategory] = useState(categoryParam);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePictureChange = (e) => {
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

  
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const state = {name,image,category,description,price, error,};

    try {
      const formData = { ...state };
      delete formData["error"];
      const newProduct = await updateProduct(categoryParam, idParam, formData);
      navigate(`/${category}/${idParam}`);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  

  useEffect(() => {
    getProduct();
  }, []);


  return (
    <div className="newPage">
      <br/>
       <h4>Product Update Page</h4>
      <div
        className="form-container"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}>
       

        <form autoComplete="off">
          <div className="formItem">
            <label className="formItemName">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                return handleNameChange(e);
              }}
              defaultValue={product.name}
              required
              className="formItemContent"
            />
          </div>
          <div className="formItem">
            <label className="formItemName">Image Address</label>
            <input
              type="text"
              name="picture"
              onChange={(e) => {
                return handlePictureChange(e);
              }}
              defaultValue={product.image}
              placeholder="Image Address"
              className="formItemContent"
            />
          </div>
          <div className="formItem">
          <h6> Category</h6>
            <div className="formItemContent" id="radio">
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
              <label htmlFor="featured">Coords</label>
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
                }}> Dresses
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
                }}> Lehengas
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
                }}> Sarees
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
                htmlFor="dresses"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}> Suits
              </label>
            </div>
          </div>

          <div className="formItem">
            <label className="formItemName">Description</label>
            <textarea
              type="text"
              name="description"
              onChange={(e) => {
                return handleDescriptionChange(e);
              }}
              defaultValue={product.description}
              className="formItemContent"
            />
          </div>
          
          <div className="formItem">
            <label className="formItemName">Price</label>
            <input
              type="text"
              name="price"
              onChange={(e) => {
                return handlePriceChange(e);
              }}
              defaultValue={product.price}
              required
              min="0"
              className="formItemContent"
            />
          </div>
          <br/>
          <button type="submit">Update Product</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
}

export default EditPage;