import CartItem from "@/components/CartItem";
import Container from "@/components/Container";

function Cart() {
  return (
    <Container>
      <h1 className="my-4">سبد خرید</h1>
      <div>
        <CartItem />
        <CartItem />
        <CartItem />

        <div className="border shadow-md p-4 mt-4">
          <h3>
            قیمت کل : <span>45$</span>{" "}
          </h3>
          <h3>
            {" "}
            سود شما ازین خرید : <span>45$</span>{" "}
          </h3>
          <h3>
            قیمت نهایی : <span>45$</span>{" "}
          </h3>
          <div>
          <button className="bg-amber-200 px-4 py-1 rounded mr-4">اعمال</button>
            <input className="border" placeholder="کد تخفیف را وارد کنید" type="text" />
  
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
