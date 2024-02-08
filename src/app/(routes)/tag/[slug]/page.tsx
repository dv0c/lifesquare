import { FrauncesFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import TagPosts from "../../(home)/_components/tag-posts";
import { api } from "@/lib/api";
import Image from "next/image";
import { Tag } from "@/types";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { slug: string } }) => {
  const { data } = await api("tags", {
    limit: 1,
    include: "posts",
    filter: "slug:" + params.slug,
    page: 1,
  });

  if (data.tags.length < 1) return notFound();

  const body = data.tags[0] as Tag;

  return (
    <div>
      <div
        className="cover-mask"
        style={{
          backgroundImage:
            "url(https://reiro.fueko.net/content/images/size/w1600/2022/10/photo-1655721529468-d0d81b2dc489.jpeg",
        }}
      ></div>
      <Image
        className={
          "items-center md:w-[150px] bg-gray-300 object-cover md:h-[150px] h-[100px] w-[100px] flex justify-center mx-auto rounded-full border-yellow-400 border-8"
        }
        src={body.feature_image || ""}
        alt={" "}
        width={150}
        height={150}
      />
      <h1 className={cn("hero-title global-title", FrauncesFont.className)}>
        <span>{body.name}</span>
      </h1>
      <p className="hero-title !mt-1 text-2xl text-muted-foreground">
        {body.description}
      </p>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <section className="mx-5 mb-[7vh]">
          <TagPosts tag={decodeURIComponent(params.slug)} />
        </section>
      </div>
    </div>
  );
};

export default page;
