"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/contaxt/ShoppingCartContext";
import { formatNumberWithCommas } from "@/utilities/number";
import axios from "axios";
import { useEffect, useState } from "react";

interface IDiscountData {
  id: number;
  code: string;
  percentage: number;
}

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    axios(`http://localhost:3004/products`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  // Berechnung des Gesamtpreises vor Anwendung des Rabatts
  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = data.find(
      (product) => product.id == item.id.toString()
    );
    return total + (selectedProduct?.price || 0) * item.qty;
  }, 0);

  // Um auf den Rabattcode zuzugreifen, muss beim Klick des Nutzers auf den Eingabe-Button eine Anfrage an das Backend gesendet werden:
  const handleSubmitDiscount = () => {
    axios(`http://localhost:3004/discounts?code=${discountCode}`).then(
      (result) => {
        const data = result.data as IDiscountData[];

        const discountedPrice = (totalPrice * data[0].percentage) / 100; // Berechnung des Rabatts
        const finalPrice = totalPrice - discountedPrice; // Endpreis
        setFinalPrice(finalPrice);
        setDiscountedPrice(discountedPrice);
      }
    );
  };

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
          قیمت کل : <span>{formatNumberWithCommas(totalPrice)}$</span>
        </h3>
        <h3>
          سود شما ازین خرید :{" "}
          <span>{formatNumberWithCommas(discountedPrice)}$</span>{" "}
        </h3>
        <h3>
          قیمت نهایی : <span>{formatNumberWithCommas(finalPrice)}$</span>{" "}
        </h3>
        <div>
          <button
            onClick={handleSubmitDiscount}
            className="bg-amber-200 px-4 py-1 rounded mr-4"
          >
            اعمال
          </button>
          <input
            className="border"
            placeholder="کد تخفیف را وارد کنید"
            type="text"
            onChange={(e) => setDiscountCode(e.target.value)}
          />
        </div>
      </div>
    </Container>
  );
}

export default Cart;
