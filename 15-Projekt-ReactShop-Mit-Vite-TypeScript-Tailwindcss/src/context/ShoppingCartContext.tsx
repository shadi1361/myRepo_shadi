import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface ShoppingCartProvider {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartItems: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handleLogin: (username:string, password: string) => void;
  handleLogout: () => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem == null) {
        // Wenn das Produkt in unserem Warenkorb ist.
        return [...currentItems, { id: id, qty: 1 }]; //Dann wird das vorherige Produkt in den Warenkorb gelegt, weil dieser leer war.
      } else {
        //Wenn das Produkt in dem Warenkorb ist, aber zuerst gesucht & gefunden werden muss,dann sollte die Menge (qty) hinzugefügt werden.
        return currentItems.map((item) => {
          if (item.id == id) {
            //Wenn nochmals geklickt werden, wird die gleiche ID wiedergefunden und quantity wird erhöht.
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        //Wenn das Produkt in dem Warenkorb ist, aber zuerst gesucht & gefunden werden muss,dann sollte die Menge (qty) hinzugefügt werden.
        return currentItems.map((item) => {
          if (item.id == id) {
            //Wenn nochmals geklickt werden, wird die gleiche ID wiedergefunden und quantity wird erhöht.
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    //die Produktmenge und Hinzufügen zum Warenkorb
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id != id)
    );
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (username:string, password: string) => {
    login(username, password).finally(() => {
      let token =
        "N2IxYjUzMzQtMDkwYi00ODE0LWIzZWQtOWI4YWRkMDlkOGI4OjY0YWNmYTc4LWJmMzEtNDQ1Zi04NDI3LTgzOGJiYjEyMWRkMg==";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
