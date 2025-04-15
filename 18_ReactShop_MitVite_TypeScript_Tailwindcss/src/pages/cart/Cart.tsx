import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div className="">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="bg-orange-100 p-3 rounded align-middle mt-4">
          <p className="text-left">560,00 €: </p>
          <p className="text-left">30,00 : Rabatt </p>
          <p className="text-left font-bold">530,00 : </p>
        </div>
        <Button variant="success" className="w-52 h-10 mt-8 py-6 px-12 text-md rounded-full">
          jetzt kaufen
        </Button>
      </Container>
    </div>
  );
}

export default Cart;
