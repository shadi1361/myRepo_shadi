import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import NavBottomRight from "@/components/NavBottomRight";

async function Store() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3004";
  const result = await fetch(`${baseUrl}/products`);
  const data = (await result.json()) as IProductItemProps[];

  return (
    <Container>
      <div className="flex flex-col min-h-screen mt-10 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 w-full h-20 px-4">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex-grow flex justify-center">
            <Search />
          </div>

          <div className="flex-shrink-0">
            <NavBottomRight />
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-4 py-4 w-full">
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
