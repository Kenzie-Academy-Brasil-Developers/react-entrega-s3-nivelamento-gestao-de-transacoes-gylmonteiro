const DisplayCart = ({ transactions }) => {
  const listInputs = transactions.filter((fruit) => fruit.quantity >= 0);
  const listOutputs = transactions.filter((fruit) => fruit.quantity < 0);

  return (
    <div>
      <h2>
        Valor Total = R$
        {listInputs.reduce((acc, currentValue) => {
          return acc + currentValue.price;
        }, 0)}
      </h2>
      <h2>
        {" "}
        Total de Saídas = R$
        {listOutputs.reduce((acc, currentValue) => {
          return acc + currentValue.price;
        }, 0)}
      </h2>
    </div>
  );
};

export default DisplayCart;
