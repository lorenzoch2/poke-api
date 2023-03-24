import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  const pinpokemon =
    "https://cdn.pixabay.com/photo/2016/07/21/00/38/pokemon-1531648_1280.png";
  return (
    <Navbar className="navbar">
      <Container className="container">
        <Navbar.Brand>
          <div className="img-container">
            <img src={pinpokemon} alt="pokemon" />
          </div>
        </Navbar.Brand>
        <div className="navlinks">
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
          <NavLink to="/pokemones" className={setActiveClass}>
            Pokemones
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
}
