"use client";
import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { PostsWithMeta, Post as _Post } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { PostWrapper } from "@/components/PostWrapper";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export const PostContainer = () => {
  const [data, setData] = useState<_Post[]>();
  const [meta, setMeta] = useState<any>();
  const [isButtonLoading, setButtonLoading] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    api("posts", {
      limit: 6,
      include: "tags,authors",
      order: "published_at DESC",
    }).then(({ data }) => {
      setData([...data.posts]);
      setMeta(data.meta);
      setLoading(false);
    });
  }, []);

  const loadMore = async () => {
    setButtonLoading(true);
    await api("posts", {
      page: meta?.pagination?.next,
      limit: 6,
      include: "tags,authors",
      order: "published_at DESC",
    }).then(({ data: res }) => {
      setData([...data!, ...res.posts]);
      setMeta(res.meta);
      router.refresh();
      setButtonLoading(false);
      console.log(meta);
    });
  };

  return (
    <div className="mt-5">
      {!isLoading ? (
        <PostWrapper>
          {data?.map((i: _Post, key: number) => (
            <Post.Default post={i as _Post & any} key={key} description />
          ))}
        </PostWrapper>
      ) : (
        <LoadingSkeleton />
      )}
      {meta?.pagination?.page !== meta?.pagination?.pages && (
        <div className="flex items-center justify-center mt-10">
          <Button
            disabled={isButtonLoading}
            onClick={loadMore}
            className="rounded-full pt-[2em] border-none h-10 pb-[2em] w-[150px] bg-[#f9c345] text-black hover:bg-[#fcd780fd]"
          >
            {!isButtonLoading ? (
              "Load more"
            ) : (
              <Loader2 className="animate-spin" size={18} />
            )}
          </Button>
        </div>
      )}
    </div>
  );
};
