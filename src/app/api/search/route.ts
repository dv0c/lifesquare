import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { data: dt } = await api("tags", {
    limit: 100,
  });
  const { data: da } = await api("authors", {
    limit: 100,
  });
  const { data: dp } = await api("posts", {
    limit: 100,
  });
  const tags = dt.tags;
  const authors = da.authors;
  const posts = dp.posts;

  const data = {
    posts: posts,
    authors: authors,
    tags: tags,
  };

  return NextResponse.json(data);
}
