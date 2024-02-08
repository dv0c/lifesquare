import Post from "@/components/Post";
import { api } from "@/lib/api";
import { FrauncesFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FeaturedPosts = async () => {
  const { data } = await api("posts", {
    limit: 3,
    filter: "featured:true",
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <section className="mx-5 mb-[7vh]">
      <h1 className="text-xs font-semibold">FEATURED POSTS</h1>
      <div className="m-auto mt-5 relative z-[1] rounded-xl overflow-hidden pt-[6vh] pb-[5vw] px-[4vh] sm:px-[8vh] bg-[#f8f6f8] ">
        <img
          alt="bg-img"
          src={
            "https://reiro.fueko.net/content/images/size/w1600/2022/10/photo-1519923834699-ef0b7cde4712.jpeg"
          }
          draggable={false}
          className="m-auto z-[-1] select-none w-full object-cover absolute h-[44%] top-0 global-cover right-0 left-0 cover-mask-featured max-h-[800px] opacity-[.18]"
        />
        <div className="w-full justify-center flex flex-col gap-10">
          <div>
            <h3 className="text-center font-[500]">Editor's Choice</h3>
            <h1
              className={cn(
                "text-2xl md:text-5xl font-bold text-center m-auto max-w-lg mt-5",
                FrauncesFont.className
              )}
            >
              Get started with our best stories
            </h1>
          </div>
          <div className="flex gap-5 sm:gap-10 md:flex-nowrap flex-wrap bg-[#f9c345] sm:bg-inherit rounded-2xl p-5 sm:p-0">
            <Post.Featured post={data.posts[0]} />
            <Post.Featured post={data.posts[1]} />
            <Post.Featured post={data.posts[2]} />
          </div>
          <div className="flex justify-end w-full">
            <Link
              href={"/featured-posts"}
              className="text-sm text-muted-foreground hover:underline"
            >
              See all featured posts →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
