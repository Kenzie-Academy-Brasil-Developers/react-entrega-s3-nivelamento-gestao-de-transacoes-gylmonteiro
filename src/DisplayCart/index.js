import { ContainerCart } from "./styles";

const DisplayCart = ({ transactions }) => {
  const listInputs = transactions.filter((fruit) => fruit.quantity >= 0);
  const listOutputs = transactions.filter((fruit) => fruit.quantity < 0);

  return (
    <ContainerCart>
      <h2>
        <span>Valor Total =</span> R$
        {listInputs.reduce((acc, currentValue) => {
          return acc + currentValue.price;
        }, 0)}
      </h2>
      <h2>
        <span> Total de Saídas =</span> R$
        {listOutputs.reduce((acc, currentValue) => {
          return acc + currentValue.price;
        }, 0)}
      </h2>
    </ContainerCart>
  );
};

export default DisplayCart;
