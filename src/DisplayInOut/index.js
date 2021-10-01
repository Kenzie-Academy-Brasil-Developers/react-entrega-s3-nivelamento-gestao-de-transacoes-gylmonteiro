import { useState } from "react";

const DisplayInOut = ({ transactions }) => {
  const [inputs, setInputs] = useState([]);
  const [flag, setFlag] = useState(true);

  const handleInputs = () => {
    setInputs(transactions.filter((fruit) => fruit.quantity >= 0));
    setFlag(false);
  };

  const handleOutput = () => {
    setInputs(transactions.filter((fruit) => fruit.quantity < 0));
    setFlag(true);
  };

  return (
    <>
      <h1>Display</h1>
      {flag ? (
        <>
          <button onClick={handleInputs}>Mostrar Entradas</button>
          {inputs.length > 0 && <h2>Saídas</h2>}
        </>
      ) : (
        <>
          <button onClick={handleOutput}>Mostrar Saídas</button>
          <h2>Entradas</h2>
        </>
      )}

      {inputs.map((fruit, index) => (
        <li key={index}>
          Nome: {fruit.name}, qtd: {fruit.quantity}, valor: {fruit.price}
        </li>
      ))}

      <h2>Todas as movimentações</h2>

      {transactions.map((fruit, index) => (
        <li key={index}>
          Nome: {fruit.name}, qtd: {fruit.quantity}, valor: {fruit.price}
        </li>
      ))}
    </>
  );
};

export default DisplayInOut;
