//daynamic id
import Container from "@/components/Container";
import { IGetArticles } from "../page";

interface IArticleProps {
  params: { id: string };
  searchParams: Record<string, string>; // Updated type
}

async function Article(props: IArticleProps) {
  const { id } = props.params;

  const result = await fetch(`http://localhost:3001/articles/${id}`);
  if (!result.ok) {
    throw new Error(`Failed to fetch article: ${result.statusText}`);
  }

  const data = (await result.json()) as IGetArticles;

  return (
    <Container>
      <div>
        <h2 className="text-2xl font-bold my-4 text-amber-500">{data.title}</h2>
        <p>{data?.description}</p>
      </div>
    </Container>
  );
}

export default Article;
