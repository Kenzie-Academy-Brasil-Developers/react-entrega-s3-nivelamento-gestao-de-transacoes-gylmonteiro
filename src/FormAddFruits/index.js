import { useState } from "react";
import { ContainerForm } from "./styles";
const FormAddFruist = ({ handleAddFruits }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>
      <ContainerForm>
        <h1>Cadastrar frutas</h1>
        <p>
          Para cadastrar uma entrada, as quantidades deverão ser{" "}
          <span>Positivas</span>
        </p>
        <p>
          Para cadastrar uma saída, as quantidades deverão ser{" "}
          <span>Negativas</span>
        </p>
        <input
          placeholder="Fruta"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Quantidade"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          placeholder="Preço"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={() => handleAddFruits({ name, quantity, price })}>
          Cadastrar fruta
        </button>
      </ContainerForm>
    </>
  );
};

export default FormAddFruist;
