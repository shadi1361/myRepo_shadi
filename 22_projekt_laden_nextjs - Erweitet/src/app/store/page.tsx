import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Link from "next/link";
import React from "react";


async function Store() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3004";
  const result = await fetch(`${baseUrl}/products`);
  const data = (await result.json()) as IProductItemProps[];

  return (
    <Container>
      <div className="flex flex-col min-h-screen mt-0 relative">      
        <div className="grid grid-cols-4 gap-4 py-2 w-full">
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
