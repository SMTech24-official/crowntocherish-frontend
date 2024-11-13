import { articles } from "@/lib/blogs";

const stored = [...articles];

export const GET = async () => {
  return Response.json(stored, {
  });
};



export async function POST(request) {
  const newArticles = await request.json();
  articles.push(newArticles);
  return Response.json({
    message: "success",
  });
}
