import { Container } from "react-bootstrap";
import "../assets/css/home.css"

const Home = () => {
  return (
    <Container className="home">
      <h1>Bienvenido a la Pokédex</h1>
      <p>¡Explora la lista completa de Pokémons!</p>
    </Container>
  );
};

export default Home;