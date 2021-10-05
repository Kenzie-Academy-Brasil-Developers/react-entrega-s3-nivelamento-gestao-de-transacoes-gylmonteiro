import { useState } from "react";
import DisplayCart from "../DisplayCart";
import DisplayInOut from "../DisplayInOut";
import FormAddFruist from "../FormAddFruits";

const Flux = () => {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const handleAddFruits = (item) => {
    if (item.name && item.quantity && item.price) {
      setTransactions([...transactions, item]);
    }
  };

  return (
    <>
      <DisplayCart transactions={transactions}></DisplayCart>
      <FormAddFruist handleAddFruits={handleAddFruits}></FormAddFruist>
      <DisplayInOut transactions={transactions}></DisplayInOut>
    </>
  );
};

export default Flux;
