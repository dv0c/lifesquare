import { PostContainer } from "@/app/(routes)/(home)/_components/PostContainer";
import Post from "@/components/Post";
import { api } from "@/lib/api";
import { FC } from "react";

interface RelatedPostsProps {
  category: string;
  postSlug: string;
}

const RelatedPosts: FC<RelatedPostsProps> = async ({ category, postSlug }) => {
  const { data } = await api("posts", {
    limit: 5,
    filter: "tags:" + category,
    include: "tags,authors",
    order: "published_at DESC",
  });

  const filteredData = data?.posts.filter(
    (item: { slug: string }) => item.slug !== postSlug
  );

  return filteredData.length ? (
    <div className="border-t pt-20 my-10">
      <h1 className="font-bold mb-5">Related Posts</h1>
      <PostWrapper>
        {filteredData.map((item: any, i: number) => (
          <Post.Small post={item} key={i} />
        ))}
      </PostWrapper>
    </div>
  ) : null;
};

export default RelatedPosts;

const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid  col-span-2 grid-cols-1 gap-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
