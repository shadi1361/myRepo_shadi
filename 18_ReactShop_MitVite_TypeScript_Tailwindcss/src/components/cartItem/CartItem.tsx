import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProductByID } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct
  } = useShoppingCartContext();

  useEffect(() => {
    getProductByID(id).then((result) => {
      setProduct(result);
    });
  }, []);

  return (
    <div className="flex flex-row mt-4 border-b-2 pb-1 ">
      <Link to={`/productPage/${id}`}>
        <img className="rounded w-36" src={product?.image} alt="" />
      </Link>

      <div className="ml-4 ">
        <h3 className="text-lg mb-3">{product?.title}</h3>
        <div className="mt-2">
          <Button
            onClick={() => handleIncreaseProductQty(id)}
            variant="primary"
          >
            +
          </Button>
          <span className="mx-2">{qty}</span>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            variant="primary"
          >
            -
          </Button>
          <Button
            onClick={() => handleRemoveProduct(id)}
            variant="danger"
            className="ml-4"
          >
            Löschen
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
