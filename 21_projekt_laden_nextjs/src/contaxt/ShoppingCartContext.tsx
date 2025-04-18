"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
  cartItems: CartItems[];
  handleIncreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  cartTotalQty: number;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
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

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const isNotProductExist =
        currentItems.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }]; //then add a new one to the cart.
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            //if product already exists in the cart:
            return {
              ...item, //hold the previous plus increasing its quantity by 1.
              qty: item.qty + 1
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
              qty: item.qty - 1 // Decrease the quantity
            };
          } else {
            return item; // Return other items unchanged
          }
        });
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id); // Remove the item from the cart
    });
  };



/*   Daten abrufen(Get data or Fetch data):
  Dies wird nur einmal ausgeführt,und zwar beim Neuladen der Seite oder wenn Benutzer die Seite zum ersten Mal besucht. Falls bereits Daten im localStorage vorhanden sind, werden sie abgerufen, mit JSON.parse in ein Objekt umgewandelt und in die Variable storedCartItems(also den Warenkorb) geladen.
   */
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

/*
Daten setzen(Store data Or Set data):
Immer wenn sich cartItems ändert, wird useEffect erneut ausgeführt
Dann wird das Item im localStorage gesetzt:
Die Daten werden mit JSON.stringify in einen String umgewandelt, da localStorage nur Strings speichern kann. 
Die Daten werden in einen String umgewandelt und unter dem Namen cartItems im localStorage gespeichert,jedes Mal, wenn sich [cartItems] ändert: 
*/
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); //Jedes Mal diese sich ändert,führt useEffect() wieder durch.

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        getProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        handleRemoveProduct
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
