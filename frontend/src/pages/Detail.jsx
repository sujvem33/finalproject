import React from "react";
import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
import { eachProduct , deleteProduct} from "../utilities/products-service";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useNavigate } from "react-router-dom";

function Detail({ cart, setCart, page, setPage }) {
  const navigate = useNavigate();
  const { category } = useParams();
  const [eachproduct, seteachproduct] = useState({});

  const geteachProducts = async (category) => {
   
    const productdetails = await eachProduct(category);

    seteachproduct({
      list: productdetails.data.allProducts,
    });
  };


  const deleteOneProduct = async (id) => {
    await deleteProduct(id);
    page === true ? setPage(false) : setPage(true);

    // maybe redirect
  };


  useEffect(() => {
    geteachProducts(category);
  }, [category]);

  const productdetailList = eachproduct.list
    ? eachproduct.list.map((element) => {
        return (
          <Card style={{ width: "17rem" }} key={element._id} className="m-5">
            <Card.Img variant="top" src={`${element.image}`} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>{element.name}</Card.Title>
              {/* <Card.Text>{element.description}</Card.Text>   */}
              <Card.Text>${element.price}</Card.Text>
              <Button
                  className="delbutton"
                  onClick={() => {
                    deleteOneProduct(element._id);
                    navigate("/home");
                  }}
                >
                  DELETE
                </Button>
           <br/>
              <Button
                variant="primary"
                onClick={() => {
                  setCart([...cart, element]);
                  console.log(cart);
                }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        );
      })
    : [];

  return (
    <>
    <br />
    <a href="/api/products/:category/new" className="button">
       Add New Product
      </a>
    <Container className="d-flex p-3 justify-content-evenly flex-wrap">
      {productdetailList}
    </Container>
    </>
  );
}
export default Detail;
