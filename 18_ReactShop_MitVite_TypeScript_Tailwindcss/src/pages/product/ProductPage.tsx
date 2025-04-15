import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProductByID } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function productPage() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    cartItems,
    getProductQty,
    handleRemoveProduct
  } = useShoppingCartContext();

  useEffect(() => {
    getProductByID(params.id as string).then((result) => {
      setProduct(result);
    });
  }, []);

  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h1 className="line-clamp-1 font-bold w-52">{product?.title} </h1>
            <div>
              <p className="line-clamp-1 font-bold w-52 mb-5">
                Preis : 720.95 {product?.price} $
              </p>
              <p>{product?.description}</p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-orange-300">
            <img className="rounded w-full" src={product?.image} alt="" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                className="mt-2 w-full !py-2"
                variant="primary"
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
              >
               In den Warenkorb
              </Button>
            ) : (
              <>
                <div className="grid grid-cols-3">
                  <Button
                    className="mt-2 w-full"
                    variant="primary"
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    +
                  </Button>
                  <span className="flex justify-center items-center">
                    {" "}
                    {getProductQty(parseInt(params.id as string))}{" "}
                  </span>

                  <Button
                    className="mt-2 w-full"
                    variant="primary"
                    onClick={() => {
                      handleDecreaseProductQty(parseInt(params.id as string));
                    }}
                  >
                    -
                  </Button>
                </div>
                <Button
                  className="mt-2 w-full !py-2"
                  variant="danger"
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                >
                  Löschen
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default productPage;
