import React from "react";
import {
  Navbar,
  // Margin,
  Nav,
  // NavDropdown,
  Container,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap";
// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import * as userService from "./../utilities/users-service";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import logoImage from "../Images/logo.png"
import userImage from "../Images/userimage.png"
import cartImage from "../Images/carticon.png"
function NavBar({ user, setUser, cart, setCategory, setSearchProducts }) {
  // Create a function responsible for login the user out
  const handleLogOut = async (e) => {
    // Call the logout function
    userService.logOut();
    // Set the user back to null
    setUser(null);
  };
  return (
    <nav>
      <Navbar bg="primary" variant={"primary"} className="Navbar">
        <Container className="wideBar">
          <div>
          <Navbar.Brand as={Link} to="/api/products" >
            <img src={logoImage} alt="logo" className="logo" />
            </Navbar.Brand>
          </div>
          <div> 
              <Search setSearchProducts={setSearchProducts} />
          </div>
          <div> 
                <Container className="userlogin">
                  {user ? (
                    <div className="userlogin">
                      <Navbar.Text>
                        Welcome {user.newUser?.name || user.currentUser?.name}
                      </Navbar.Text>
                      <Nav.Link
                        to=""
                        onClick={() => {
                          return handleLogOut();
                        }}
                      >
                        Log Out
                      </Nav.Link>
                    </div>
                  ) : (
                    <Nav.Link as={Link} to="/login" className="mx-auto">
                      <img src={userImage} alt="logo" className="userImage" />
                    </Nav.Link>
                  )}
                  </Container>
                  </div>
                <div>
                       <Nav.Link as={Link} to="/cart">
                       <img src={cartImage} alt="logo" className="cartImage" />
                       </Nav.Link>
                       <Navbar.Text>{cart.length}</Navbar.Text>
                </div>
        </Container>
        <Container className="categorybar">
        <Nav.Link
                as={Link}
                to="/api/products/coords"
                name="coords"
                className="wideBar"
                onClick={(e) => {
                  console.log("TARGET NAME IS");
                  console.log(e.target.name);
                  return setCategory(e.target.name);
                }}
              >
                Coords
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/dresses"
                name="dresses"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setCategory(e.target.name);
                }}
              >
                Dresses
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/lehengas"
                name="lehengas"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setCategory(e.target.name);
                }}
              >
                Lehengas
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/sarees"
                name="sarees"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setCategory(e.target.name);
                }}
              >
                Sarees
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/suits"
                name="suits"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setCategory(e.target.name);
                }}
              >
                Suits
              </Nav.Link>
        </Container>


      </Navbar>
    </nav>
  );
}
export default NavBar;
