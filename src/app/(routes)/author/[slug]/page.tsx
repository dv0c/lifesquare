import { FrauncesFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { api } from "@/lib/api";
import Image from "next/image";
import { Author, Tag } from "@/types";
import { notFound } from "next/navigation";
import AuthorPosts from "../../(home)/_components/author-posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = async ({ params }: { params: { slug: string } }) => {
  const { data } = await api("authors", {
    limit: 1,
    filter: "slug:" + params.slug,
  });

  if (data.authors.length < 1) return notFound();

  const body = data.authors[0] as Author;

  return (
    <div>
      <div
        className="cover-mask"
        style={{
          backgroundImage:
            "url(https://reiro.fueko.net/content/images/size/w1600/2022/10/photo-1655721529468-d0d81b2dc489.jpeg",
        }}
      ></div>
      <div className="items-center justify-center w-full flex">
        <Avatar className=" md:w-[150px] bg-gray-300 md:h-[150px] h-[100px] w-[100px]">
          <AvatarImage
            src={body.profile_image || ""}
            className="object-cover"
          />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
      </div>
      <h1 className={cn("hero-title global-title", FrauncesFont.className)}>
        <span>{body.name}</span>
      </h1>
      <p className="hero-title !mt-1 text-2xl text-muted-foreground">
        {body.bio}
      </p>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <section className="mx-5 mb-[7vh]">
          <AuthorPosts author={decodeURIComponent(params.slug)} />
        </section>
      </div>
    </div>
  );
};

export default page;
