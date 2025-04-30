import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";
import React from "react";

async function Store() {
  const result = await fetch(`http://localhost:3004/products`);
  const data = (await result.json()) as IProductItemProps[];

  return (
    <Container>
      <div className="py-4">
        {/* Centering the Search component */}
        <div className="flex justify-center items-center py-2">
          <Search />
        </div>
        <div className="grid grid-cols-4 gap-4 py-4">
          {data.map((item) => (
            <Link key={item.id} href={`/store/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
export default Store;
