"use client";

import { createContext, useContext, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};
type TShoppingCartContext = {
  cartItems: CartItems[];
  handleIncreaseProductQty: (id:number)=> void;
  getProductQty: (id:number)=>number;
  cartTotalQty: number;
};
const ShoppingCartContext = createContext({} as TShoppingCartContext);
export const useShoppingCartContext = () => {
  //Custom hook to use Context
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children
}: ShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);


const cartTotalQty= cartItems.reduce((totalQty,item)=>{
  return totalQty+item.qty
}, 0)

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const isNotProductExist = currentItem.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }]; //then add a new one to the cart.
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            //if product already exists in the cart:
            return {
              ...item, //hold the previous plus increasing its quantity by 1.
              qty: item.qty + 1,
            };
          } else {
            //if product already exists in the cart but not the one i m looking for:
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
     value={{ cartItems,handleIncreaseProductQty, getProductQty,cartTotalQty }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
