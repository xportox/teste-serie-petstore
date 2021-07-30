import styled from "styled-components";

import Banner1 from "../static/banner1.jpg";
import Banner2 from "../static/banner2.jpg";
import Banner3 from "../static/banner3.jpg";

const CategoriaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  position: relative;

  background-image: url("${({ imgFundo }) => imgFundo}");
  background-size: cover;
  background-position: center;

  &:after {
    width: 100%;
    height: 100%;
    content: " ";
    position: absolute;
    background-color: hsla(0, 0%, 0%, 0.5);
  }

  & .categoria__title {
    z-index: 1;
    font-size: 26px;
    color: white;
  }
`;

const ListaCategoriasWrapper = styled.section`
  background-color: var(--laranja);
  margin: 0 auto;
  max-width: 1170px;
  padding: 20px;
  display: grid;
  grid-gap: 15px;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Categoria = ({ nome, bg }) => (
  <CategoriaWrapper imgFundo={bg}>
    <h3 className="categoria__title">{nome}</h3>
  </CategoriaWrapper>
);

const ListaCategorias = ({ categoria }) => (
  <section style={{ backgroundColor: "var(--laranja)" }}>
    <ListaCategoriasWrapper>
      <Categoria nome="Rações" bg={Banner1} />
      <Categoria nome="Brinquedos" bg={Banner2} />
      <Categoria nome="Acessórios" bg={Banner3} />
    </ListaCategoriasWrapper>
  </section>
);

export { Categoria, ListaCategorias };
