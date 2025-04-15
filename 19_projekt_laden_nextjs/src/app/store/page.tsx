import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Link from "next/link";
import React from "react";

async function Store() {
  const result = await fetch("http://localhost:3004/products");
  const data = (await result.json()) as IProductItemProps[];

  return (
    <Container>
      <h1 className="py-4">خانه</h1>

      <div className="grid grid-cols-4 gap-4 py-4 ">
        {data.map((item) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <ProductItem key={item.id} {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
