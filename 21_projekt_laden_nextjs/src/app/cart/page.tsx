"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/contaxt/ShoppingCartContext";
import { formatNumberWithCommas } from "@/utilities/number";
import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>([]);

  useEffect(() => {
    axios(`http://localhost:3004/products`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  return (
    <Container>
      <h1 className="my-4">سبد خرید</h1>

      <div className="">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="border shadow-md p-4 mt-4">
        <h3>
          قیمت کل :{" "}
          <span>
            {formatNumberWithCommas(
              cartItems.reduce((total, item) => {
                const selectedProduct = data.find(
                  (product) => product.id == item.id.toString()
                );

                return total + (selectedProduct?.price || 0) * item.qty;
              }, 0)
            )}
            $
          </span>
        </h3>
        <h3>
          سود شما ازین خرید : <span>45$</span>{" "}
        </h3>
        <h3>
          قیمت نهایی : <span>45$</span>{" "}
        </h3>
        <div>
          <button className="bg-amber-200 px-4 py-1 rounded mr-4">اعمال</button>
          <input
            className="border"
            placeholder="کد تخفیف را وارد کنید"
            type="text"
          />
        </div>
      </div>
    </Container>
  );
}

export default Cart;
