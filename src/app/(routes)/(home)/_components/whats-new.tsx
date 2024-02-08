import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";

export const revalidate = 3600;

export const WhatsNew = async () => {
  const { data } = await api("posts", {
    limit: 3,
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <section className="mx-5">
      <h1 className="text-xs font-semibold">WHAT'S NEW?</h1>
      <div className="flex m-auto gap-10 mt-5 flex-wrap sm:flex-nowrap">
        <Post.Big post={data.posts[0]} />
        <hr className="block sm:hidden text-muted-foreground w-full" />
        <div className="w-[600px] space-y-5 sm:space-y-10">
          <div className="bg-yellow-400 rounded-xl w-full p-7 hidden sm:block">
            <h3 className="text-sm ">NEWSLETTER</h3>
            <h1 className="font-semibold text-2xl sm:text-3xl mt-5">
              Get all the latest posts delivered straight to your inbox.
            </h1>
            <Input
              className="mt-5 p-5 h-14 bg-white rounded-full"
              placeholder="Your email adress"
            />
            <Button className="text-center hover:bg-gray-100 text-md mt-3 bg-white rounded-full h-12 p-5 w-full text-black">
              Subscribe
            </Button>
          </div>
          <Post.Default description={false} post={data.posts[1]} />
          <Post.Default description={false} post={data.posts[2]} />
        </div>
      </div>
    </section>
  );
};
