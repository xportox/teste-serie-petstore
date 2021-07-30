import EstiloGlobal from "./EstilosGlobais";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import { ListaCategorias } from "./components/Categoria";
import Container from "./components/container/Container";
import Heading from "./components/container/Heading";
import { ListaProdutos } from "./components/produtos/Produto";
import { ListaBanners } from "./components/Banner";
import { Newsletter } from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <ListaCategorias />
      <Container>
        <Heading>Novidades</Heading>
        <ListaProdutos numItens="4" />
      </Container>
      <Container>
        <ListaBanners />
      </Container>
      <Container>
        <Heading>Destaques</Heading>
        <ListaProdutos numItens="8" />
      </Container>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
