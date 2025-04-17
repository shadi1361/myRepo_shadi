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
  handleDecreaseProductQty:(id:number)=>void;
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
    setCartItems((currentItems) => {
      const isNotProductExist = currentItems.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }]; //then add a new one to the cart.
      } else {
        return currentItems.map((item) => {
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

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const isLastOne = currentItems.find((item) => item.id == id)?.qty === 1; // Fixed syntax and added optional chaining
  
      if (isLastOne) {
        return currentItems.filter((item) => item.id != id); // Remove the item if it's the last one
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1, // Decrease the quantity
            };
          } else {
            return item; // Return other items unchanged
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
     value={{ cartItems,handleIncreaseProductQty, getProductQty,cartTotalQty,handleDecreaseProductQty }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
