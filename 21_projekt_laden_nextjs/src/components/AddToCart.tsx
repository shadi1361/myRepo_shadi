"use client";

import { useShoppingCartContext } from "@/contaxt/ShoppingCartContext";

interface IAddToCartProps {
  id: string;
}

function AddToCart({ id }: IAddToCartProps) {
  const { cartItems, handleIncreaseProductQty,getProductQty } = useShoppingCartContext();
  console.log(cartItems);
  return (
    <div className="mt-4">
      <button
        onClick={() => handleIncreaseProductQty(parseInt(id))}
        className="px-4 py-2 rounded bg-sky-500 text-white"
      >
       +
      </button>
      <span className="mx-4">{getProductQty(parseInt(id))} </span>
      <button className="px-4 py-2 rounded bg-sky-500 text-white">-</button>
    </div>
  );
}

export default AddToCart;
