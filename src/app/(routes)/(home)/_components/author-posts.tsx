"use client";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import Post from "@/components/Post";
import { PostWrapper } from "@/components/PostWrapper";
import { api } from "@/lib/api";
import { PostsWithMeta } from "@/types";
import { FC, useEffect, useState } from "react";
import PaginationSection from "./PaginationSection";

interface Props {
  author: string;
}

const AuthorPosts: FC<Props> = ({ author }) => {
  const [data, setData] = useState<PostsWithMeta>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setClient] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [limit] = useState(10);

  useEffect(() => {
    setClient(true);
    api("posts", {
      limit,
      include: "tags,authors",
      order: "published_at DESC",
      filter: "authors:" + author,
      page: currentPage,
    }).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [currentPage]);

  return (
    <>
      <h1 className="text-xs font-semibold">
        {" "}
        {data?.posts.length! > 0 ? data?.posts.length + " POSTS" : null}
      </h1>
      <div className="mt-5">
        {isClient ? (
          <>
            {!isLoading ? (
              <>
                <PostWrapper>
                  {data?.posts.map((item: any, i: number) => (
                    <Post.Default key={i} post={item} />
                  ))}
                </PostWrapper>
                <div className="mt-10">
                  <PaginationSection
                    currentPage={currentPage}
                    postsPerPage={limit}
                    setCurrentPage={setCurrentPage}
                    totalPosts={data?.meta.pagination.total}
                  />
                </div>
              </>
            ) : (
              <LoadingSkeleton />
            )}
          </>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </>
  );
};

export default AuthorPosts;
