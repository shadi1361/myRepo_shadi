"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number; // ID des Produkts
  qty: number; // Anzahl der Produkte
};

type TShoppingCartContext = {
  cartItems: CartItems[]; 
  handleIncreaseProductQty: (id: number) => void; 
  getProductQty: (id: number) => number; //Funktion zum Abrufen der Produktanzahl
  cartTotalQty: number; //Gesamtanzahl der Produkte im Warenkorb
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProduct: (id: number) => void; 
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {

  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children
}: ShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty; // Berechnung der Gesamtanzahl der Produkte
  }, 0);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0; // Abrufen der Produktanzahl
  };

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const isNotProductExist =
        currentItems.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }]; //Neues Produkt zum Warenkorb hinzufügen
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            // Wenn das Produkt bereits im Warenkorb existiert:
            return {
              ...item, // Behalte die vorherigen Daten und erhöhe die Anzahl um 1
              qty: item.qty + 1
            };
          } else {
         
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const isLastOne = currentItems.find((item) => item.id == id)?.qty === 1; // Überprüfen, ob es das letzte Produkt ist

      if (isLastOne) {
        return currentItems.filter((item) => item.id != id); // Produkt entfernen, wenn es das letzte ist
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1 
            };
          } else {
            return item; // Andere Produkte unverändert zurückgeben
          }
        });
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id); // Produkt aus dem Warenkorb entfernen
    });
  };

  /*
  Daten abrufen (Get data or Fetch data):
  Dies wird nur einmal ausgeführt, und zwar beim Neuladen der Seite oder wenn Benutzer die Seite zum ersten Mal besucht. 
  Falls bereits Daten im localStorage vorhanden sind, werden sie abgerufen, mit JSON.parse in ein Objekt umgewandelt und in die Variable storedCartItems (also den Warenkorb) geladen.
  */
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  /*
  Daten setzen (Store data or Set data):
  Immer wenn sich cartItems ändert, wird useEffect erneut ausgeführt.
  Dann wird das Item im localStorage gesetzt:
  Die Daten werden mit JSON.stringify in einen String umgewandelt, da localStorage nur Strings speichern kann. 
  Die Daten werden in einen String umgewandelt und unter dem Namen cartItems im localStorage gespeichert, jedes Mal, wenn sich [cartItems] ändert.
  */
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); // Jedes Mal, wenn sich cartItems ändert, wird useEffect erneut ausgeführt.

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
