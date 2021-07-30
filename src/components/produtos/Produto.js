import styled from "styled-components";
import ImgProduto from "../../static/produtos/1.png";
import Botao from "../Botao";
import dadosProdutos from "./Dados";

const ProdutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & * {
    text-align: center;
  }

  .produto__title {
    margin-top: 18px;
    font-size: 18px;
  }

  .produto__preco {
    font-size: 18px;
  }

  .produto__preco del {
    margin-right: 10px;
  }

  .produto__preco,
  .produto__parcelas {
    margin-bottom: 6px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:hover::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: " ";
    background-color: var(--roxo);
    opacity: 0.5;
    z-index: 0;
  }

  &:hover .produto__cta {
    display: unset;
    z-index: 2;
  }

  & .produto__cta {
    position: absolute;
    display: none;
  }

  & .produto__rotulo {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ListaProdutosWrapper = styled.section`
  display: grid;
  grid-gap: 25px;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BotaoRotulo = styled(Botao)`
  background-color: var(--roxo);
  padding: 5px 10px;
`;

const ListaProdutos = ({ numItens }) => (
  <ListaProdutosWrapper>
    {dadosProdutos.map(
      ({ id, titulo, promocao, parcelamento, thumbnail }, index) => {
        if (index < numItens) {
          return (
            <Produto
              id={id}
              titulo={titulo}
              promocao={promocao}
              parcelamento={parcelamento}
              thumbnail={thumbnail}
            />
          );
        }
      }
    )}
  </ListaProdutosWrapper>
);

const Produto = ({ id, titulo, promocao, parcelamento, thumbnail }) => (
  <ProdutoWrapper>
    <ImageWrapper>
      <img src={thumbnail} alt="TO-DO Imagem Produto" />
      <Botao href="#" className="produto__cta">
        Compra rápida
      </Botao>
      {promocao.rotulo ? (
        <BotaoRotulo className="produto__rotulo">{promocao.rotulo}</BotaoRotulo>
      ) : null}
    </ImageWrapper>
    <a href="#">
      <h4 className="produto__title">{titulo}</h4>
    </a>
    <h4 className="produto__preco">
      {promocao.temDesconto ? <del>R${promocao.valorOrig}</del> : null}
      {promocao.temDesconto ? (
        <strong>R${promocao.valorDesc}</strong>
      ) : (
        <strong>R${promocao.valorOrig}</strong>
      )}
    </h4>
    {parcelamento ? (
      <span className="produto__parcelas">{parcelamento}</span>
    ) : null}
  </ProdutoWrapper>
);

export { ListaProdutos, Produto };
