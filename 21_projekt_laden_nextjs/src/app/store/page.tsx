import React from "react";
import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, { IProductItemProps, IProductList } from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";

interface IStoreProps {
  params?: object; // Use `object` if `params` is an object
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "2";
  const title = (await searchParams).title ?? "";

  const result = await fetch(
    `http://localhost:3004/products?_page=${page}&_per_page=${per_page}&title=${title}`
  );
  const data = (await result.json()) as IProductList;

  return (
    <Container>
      <h1 className="py-4">خانه</h1>
      <Search />
      <div className="grid grid-cols-4 gap-4 py-4">
        {data.data.map((item: IProductItemProps) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagination pageCount={data.pages} />
    </Container>
  );
}

export default Store;
