import React from "react";
import { useState, useEffect } from "react";
import { searchProduct } from "../utilities/products-service";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchPage({ searchTerm, cart, setCart }) {
  const [eachproduct, seteachproduct] = useState({ list: [] });
  const geteachProducts = async (searchTerm) => {
    const productdetails = await searchProduct(searchTerm);
    seteachproduct({
      list: productdetails.data.searchProducts,
    });
  };

  useEffect(() => {
    geteachProducts(searchTerm);
  }, [searchTerm]);
  console.log(eachproduct.list);

  const productdetailList =
    eachproduct.list.length > 0 ? (
      eachproduct.list.map((element) => {
        return (
          <Card style={{ width: "17rem" }} key={element._id} className="m-5">
            <Card.Img variant="top" src={`${element.image}`} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>{element.name}</Card.Title>
              <Card.Text>{element.description}</Card.Text>
              <Card.Text>{element.category}</Card.Text>
              <Card.Text>${element.price}</Card.Text>
              
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
    ) : (
      <Card.Text> Nothing to show!</Card.Text>
    );

  return (
    <Container className="d-flex p-3 justify-content-evenly flex-wrap">
      {productdetailList}
    </Container>
  );
}

export default SearchPage;