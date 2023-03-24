import { Container } from "react-bootstrap";
import pikachu from "../assets/imgs/pikachu.png"
import "../assets/css/home.css"

const Home = () => {
  return (
    <Container className="home">
      <h1>Bienvenido a la Pokédex</h1>
      <p>¡Explora la lista completa de Pokémons!</p>
      <img className="pikachu" src={pikachu} alt="pikachu_img" />
    </Container>
  );
};

export default Home;