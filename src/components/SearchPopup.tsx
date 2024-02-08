"use client";

import { Author, Post, Tag } from "@/types";
import axios from "axios";
import Fuse from "fuse.js";
import { Ghost, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

import { motion } from "framer-motion";
import LinkWithReset from "./LinkWithReset";

interface Props {
  isOpen: any;
  setOpen: any;
}

export function SearchPopup({ isOpen, setOpen }: Props) {
  const [data, setData] = useState<any>();
  const [input, setInput] = useState<any>(data);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setInput({
        posts: [],
        authors: [],
        tags: [],
      });
    }
  }, [isOpen]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/search")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (event: any) => {
    const { value } = event.target;
    if (value.length === 0 || isLoading) {
      setInput({
        posts: [],
        authors: [],
        tags: [],
      });
      return;
    }

    const postOptions = {
      keys: ["title", "excerpt", "slug"],
      includeScore: true,
    };
    const tagOptions = {
      keys: ["name", "slug"],
      includeScore: true,
    };
    const authorOptions = {
      keys: ["name", "slug"],
      includeScore: true, // Include the score for sorting
    };

    const postFuse = new Fuse(data.posts, postOptions);
    const tagFuse = new Fuse(data.tags, tagOptions);
    const authorFuse = new Fuse(data.authors, authorOptions);

    const postResults = postFuse.search(value);
    const tagResults = tagFuse.search(value);
    const authorResults = authorFuse.search(value);

    setInput({
      posts: postResults,
      tags: tagResults,
      authors: authorResults,
    });
  };

  return (
    <>
      {isOpen && (
        <>
          <Backdrop onClick={() => setOpen(!isOpen)} />
          <Container>
            <div className="w-screen h-screen md:h-auto md:max-h-[calc(80vh-5rem)] md:w-[500px]">
              <div className="flex flex-col">
                <div>
                  <InputText handleSearch={handleSearch} />
                </div>
                <div>
                  <Results isLoading={isLoading} results={input} />
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

const Backdrop = ({ onClick }: { onClick: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      className="fixed top-0 z-10 left-0 w-screen h-screen bg-gray-400/50"
    />
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      onClick={(e: any) => e.preventDefault()}
      className="m-auto justify-center overflow-auto search--scrollable-content transform -translate-y-1/2 fixed shadow-lg border bg-white rounded-lg z-10 flex items-center"
    >
      {children}
    </div>
  );
};

const InputText = ({ handleSearch }: { handleSearch: any }) => {
  return (
    <div className="h-16 shadow flex items-center px-3">
      <Search size={18} />
      <Input
        autoFocus
        onChange={handleSearch}
        className="border-none shadow-none"
        placeholder="Search posts, tags and authors"
      />
    </div>
  );
};

const Results = ({
  results,
  isLoading,
}: {
  results: {
    posts: [{ item: Post }];
    authors: [{ item: Author }];
    tags: [{ item: Tag }];
  };
  isLoading: boolean;
}) => {
  return (
    <>
      {results?.authors.length >= 1 && isLoading === false && (
        <div className="border-b">
          <h3 className="text-xs px-5 py-3 font-semibold text-muted-foreground">
            AUTHORS
          </h3>
          <ul>
            {results?.authors?.map((item: { item: Author }, i: number) => (
              <li key={i}>
                <LinkWithReset
                  href={"/author/" + item.item.slug}
                  className="hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-100 block cursor-pointer px-5 py-3"
                >
                  <h1 className="flex gap-3 items-center">
                    <Avatar className="w-7 h-7">
                      <AvatarImage src={item.item.profile_image || ""} />
                      <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                    {item.item?.name}
                  </h1>
                </LinkWithReset>
              </li>
            ))}
          </ul>
        </div>
      )}
      {results?.tags.length >= 1 && isLoading === false && (
        <div className="border-b">
          <h3 className="text-xs px-5 py-3 font-semibold text-muted-foreground">
            TAGS
          </h3>
          <ul>
            {results?.tags?.map((item: { item: Tag }, i: number) => (
              <li key={i}>
                <LinkWithReset
                  href={"/tag/" + item.item.slug}
                  className="hover:bg-neutral-100 active:bg-neutral-100 focus:bg-neutral-100 cursor-pointer block px-5 py-3"
                >
                  <h1>
                    <span className="text-sm text-muted-foreground font-semibold mr-3">
                      #
                    </span>
                    {item.item?.name}
                  </h1>
                </LinkWithReset>
              </li>
            ))}
          </ul>
        </div>
      )}
      {results?.posts.length >= 1 && isLoading === false && (
        <div>
          <h3 className="text-xs px-5 py-3 font-semibold text-muted-foreground">
            POSTS
          </h3>
          <ul>
            {results?.posts?.map((item: { item: Post }, i: number) => (
              <li key={i}>
                <LinkWithReset
                  href={"/article/" + item.item.slug}
                  className="hover:bg-neutral-100 cursor-pointer block px-5 py-3 active:bg-neutral-100 focus:bg-neutral-100"
                >
                  <h1>{item.item?.title}</h1>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.item?.excerpt}
                  </p>
                </LinkWithReset>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoading === true && (
        <div className="flex items-center gap-3 flex-col mx-auto p-20">
          <Ghost size={30} />
          Content still fetching. Please wait...
        </div>
      )}
    </>
  );
};
