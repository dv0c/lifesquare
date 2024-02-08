"use client";
import { FC } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { Post, Tag } from "@/types";

interface ShareProps {
  post: Post & {
    tags: Tag[];
  };
  url: string;
}

const Share: FC<ShareProps> = ({ post, url }) => {
  return (
    <div className="space-x-2">
      <FacebookShareButton
        url={url}
        quote={post.excerpt}
        title={post.title}
        hashtag={post.tags.map((i) => i.name).toString()}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={post.title}
        hashtags={post.tags.map((i) => i.name)}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default Share;
