import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { IProduct } from "../../types/server";

function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);


  return (
    <div>
      <Container>
        <h1 className="text-left  mt-5 font-bold ">DigitalKamera 2025 für Foto & Video</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
            <Link key={item.id} to={`/ProductPage/${item.id}` }>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
