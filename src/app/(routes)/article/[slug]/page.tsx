import { api } from "@/lib/api";
import { Post, PrimaryAuthor, Tag } from "@/types";
import { notFound } from "next/navigation";
import { env } from "process";
import { FC } from "react";
import Content from "./_components/Content";
import Creator from "./_components/Creator";
import RelatedPosts from "./_components/RelatedPosts";
import Share from "./_components/Share";
import Sidebar from "./_components/Sidebar";
import Thumbnail from "./_components/Thumbnail";
import Heading from "./_components/heading";

interface pageProps {
  params: {
    slug: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const { data } = await api("posts", {
    filter: "slug:" + params.slug,
    include: "tags,authors",
  });
  const body = data.posts[0] as Post & {
    tags: Tag[];
    primary_author: PrimaryAuthor;
  };

  if (body?.primary_author == undefined || body?.id == undefined)
    return notFound();

  return (
    <div className="mt-10 px-5 sm:px-10 lg:px-0">
      <div
        className="cover-mask"
        style={{
          backgroundImage:
            "url(https://reiro.fueko.net/content/images/size/w1600/2022/10/kim-daniels-P2qImp_Mr2Y-unsplash.jpg)",
        }}
      />
      <div className="max-w-5xl mx-auto overflow-hidden">
        <Heading
          title={body.title}
          description={body.excerpt}
          tags={body.tags}
        />
        <div className="my-5 flex gap-3 flex-wrap justify-between items-center">
          <Creator
            author={body.primary_author}
            date={{ createdAt: body.created_at, read: body.reading_time }}
          />
          <Share
            url={env.NEXT_PUBLIC_DOMAIN + "/article/" + body.slug}
            post={body}
          />
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto overflow-hidden mt-5">
        <Thumbnail
          credits={body.feature_image_caption}
          alt={body.feature_image_alt as string}
          image={body.feature_image}
        />
      </div>
      <div className="max-w-5xl mx-auto mt-10 overflow-hidden">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className=" w-full sm:w-[80%]">
            <Content body={body.html} />
          </div>
          <div className="sm:w-[30%] mt-10 sm:mt-0 w-full">
            <Sidebar data={data.posts[0]} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto overflow-hidden">
        {body?.tags[0]?.slug && (
          <RelatedPosts postSlug={body.slug} category={body.tags[0].slug} />
        )}
      </div>
    </div>
  );
};

export default page;
