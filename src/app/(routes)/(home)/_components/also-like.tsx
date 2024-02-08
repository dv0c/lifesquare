import { api } from "@/lib/api";
import { PostContainer } from "./PostContainer";
import { Post as P } from "@/types";
import Post from "@/components/Post";

const AlsoLike = async () => {
  const { data } = await api("posts", {
    limit: 5,
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <section className="mx-5 mb-[7vh]">
      <h1 className="text-xs font-semibold">YOU MIGHT ALSO LIKE</h1>
      <PostWrapper>
        {data.posts.map((item: P, i: number) => (
          <Post.Small key={i} post={item as any} description={false} />
        ))}
      </PostWrapper>
    </section>
  );
};

export default AlsoLike;

const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid mt-5 col-span-2 grid-cols-1 gap-10 md:gap-5 md:grid-cols-2 lg:grid-cols-5">
      {children}
    </div>
  );
};
