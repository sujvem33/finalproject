import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import searchIcon from "../Images/search-icon.png"

function Search({ setSearchProducts }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState({ val: "" });

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      //   console.log(searchTerm.val);

      setSearchProducts(searchTerm.val);

      navigate(`/api/products/search/${searchTerm.val}`);
    } catch (error) {
      setSearchTerm(error.message);
    }
  };
  return (
    <>
      <Form className="d-flex formsearch" onSubmit={handleFormSubmission}>
        <Form.Control
          type="search"
          placeholder="Search Products"
          className="me-2 w-150 h-25 "
          aria-label="Search"
          value={searchTerm.val}
          onChange={(e) => setSearchTerm({ val: e.target.value })}
        />

        <Button variant="secondary" type="submit" className="w-50 searchbutton">
        Search
        </Button>
      </Form>
    </>
  );
}

export default Search;

