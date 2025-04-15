import Article from "@/components/Article";
import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

export interface IGetArticles {
  id?: string;
  title?: string;
  description?: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:3001/articles");
  const data = (await result.json()) as IGetArticles[];

  return (
    <Container>
      <div className="grid grid-cols-3 gap-4 py-16">
        {data.map((item) => (
          <Link href={`/blogs/${item.id}`} key={item.id}>
            <Article key={item.id} {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Blogs;
