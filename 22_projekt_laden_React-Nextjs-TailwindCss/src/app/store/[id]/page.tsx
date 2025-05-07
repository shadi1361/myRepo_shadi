import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { formatNumberWithCommas } from "@/utilities/number";
import Image from "next/image";
import React from "react";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, unknown>>;
}

async function Product({ params }: IProductProps) {
  const { id } = await params;

  const result = await fetch(`http://localhost:3004/products/${id}`);
  const data = (await result.json()) as IProductItemProps;

  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 p-4">
          <h2 className="font-bold text-2xl mb-4">{data.title}</h2>

          <p className="text-gray-700 mb-4">{data.description}</p>

          <p className="font-bold">
            Preis :<span>{formatNumberWithCommas(data.price ?? 0)}$</span>
          </p>

          <AddToCart id={id} />
        </div>

        <div className="col-span-3 relative">
        <Image
  src={data.image}
  alt="Product Image"
  fill
  style={{ objectFit: "cover" }}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority // Optimize loading for above-the-fold images
/>
        </div>
      </div>
    </Container>
  );
}

export default Product;
