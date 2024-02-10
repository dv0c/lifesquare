import { dynamicBlurDataUrl } from "@/hooks/use-base64";
import { FrauncesFont } from "@/lib/fonts";
import { cn, formatTimeToNow } from "@/lib/utils";
import { Post, Tag } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Tags from "./Tags";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PostProps {
  description?: boolean;
  post: Post & {
    tags: Tag[];
    authors: any;
  };
}

const Post = {
  Big: ({ post }: PostProps) => {
    return (
      <article className="w-full h-auto">
        <div className="relative hover:-translate-y-2 transition-all duration-200">
          <Link href={"/article/" + post.slug}>
            <Image
              className="object-cover rounded-2xl h-full max-h-[250px] aspect-square sm:aspect-auto sm:max-h-[679px]"
              src={post.feature_image}
              alt={post.title}
              width={1920}
              height={679}
              priority
            />
          </Link>
        </div>
        <div>
          <Tags tags={post.tags} />
        </div>
        <h1
          className={cn(
            "max-w-[95%] line-clamp-3 mt-5 text-[2rem] md:text-[4rem] font-bold hover:underline underline-offset-[3px] decoration-2",
            FrauncesFont.className
          )}
          style={{ lineHeight: "1.2" }}
        >
          <Link href={"/article/" + post.slug}>{post.title}</Link>
        </h1>
        <p className="text-muted-foreground hidden sm:block sm:text-2xl line-clamp-6 mt-5 max-w-[80%]">
          {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
        </p>
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <Avatar className="w-[40px] h-[40px]">
              <AvatarImage
                src={post.authors[0].profile_image}
                className="object-cover"
              />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <Link
              href={"/author/" + post.authors[0].slug}
              className="flex flex-col group"
            >
              <span className="text-xs font-semibold group-hover:underline">
                by {post.authors[0].name}
              </span>
              <span className="text-xs">
                {formatTimeToNow(new Date(post.created_at))} ∙{" "}
                {post.reading_time} mins read
              </span>
            </Link>
          </div>
        </div>
      </article>
    );
  },
  Default: ({ post, description }: PostProps) => {
    return (
      <article className="w-full h-auto">
        <FlexWrapper>
          <div className="relative hover:-translate-y-2 transition-all duration-200">
            <Link href={"/article/" + post.slug}>
              <div>
                <Image
                  className="object-cover bg-[#f8f6f8] rounded-2xl min-w-[120px] h-full w-full max-h-[100%] max-w-[120px] aspect-video sm:max-w-[100%] sm:aspect-auto sm:min-h-[300px] sm:max-h-[300px]"
                  src={post.feature_image}
                  alt={post.title}
                  width={1920}
                  height={300}
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="sm:block hidden">
            <Tags tags={post.tags} />
          </div>
          <div className="flex-col mt-2">
            <h1
              className={cn(
                "max-w-[95%] flex-1 line-clamp-2 text-[1.3rem] md:text-[2rem] font-bold hover:underline underline-offset-[3px] decoration-2",
                FrauncesFont.className
              )}
              style={{ lineHeight: "1.2" }}
            >
              <Link href={"/article/" + post.slug}>{post.title}</Link>
            </h1>
            {description && (
              <p className="text-muted-foreground hidden sm:block sm:text-md mt-5 max-w-[80%]">
                {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
              </p>
            )}
            <div className="mt-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage
                    src={post.authors[0].profile_image}
                    className="object-cover"
                  />
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <Link
                    href={"/author/" + post.authors[0].slug}
                    className="text-xs  hover:underline"
                  >
                    by {post.authors[0].name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FlexWrapper>
      </article>
    );
  },
  Small: ({ post, description }: PostProps) => {
    return (
      <article className="w-full h-auto">
        <FlexWrapper>
          <div className="relative hover:-translate-y-2 transition-all duration-200">
            <Link href={"/article/" + post.slug}>
              <div>
                <Image
                  className="object-cover bg-[#f8f6f8] rounded-2xl h-full w-full min-w-[120px] max-h-[100%] max-w-[120px] aspect-video sm:max-w-[100%] sm:aspect-auto sm:min-h-[200px] sm:max-h-[200px]"
                  src={post.feature_image}
                  alt={post.title}
                  width={200}
                  height={300}
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="flex-col mt-5">
            <h1
              className={cn(
                "max-w-[95%] flex-1 line-clamp-2 text-[1.3rem] md:text-[1.2rem] font-bold hover:underline underline-offset-[3px] decoration-2",
                FrauncesFont.className
              )}
              style={{ lineHeight: "1.2" }}
            >
              <Link href={"/article/" + post.slug}>{post.title}</Link>
            </h1>
            {description && (
              <p className="text-muted-foreground hidden sm:block sm:text-md mt-5 max-w-[80%]">
                {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
              </p>
            )}
            <div className="mt-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex flex-col">
                  <Link
                    href={"/author/" + post.authors[0].slug}
                    className="text-xs hover:underline"
                  >
                    by {post.authors[0].name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FlexWrapper>
      </article>
    );
  },
  Featured: ({ post, description }: PostProps) => {
    return (
      <article className="w-full hover:-translate-y-2 transition-all duration-200 h-auto sm:bg-[#f9c345] sm:p-5 rounded-2xl">
        <FlexWrapper>
          <div className="relative">
            <Link href={"/article/" + post.slug}>
              <Image
                className="object-cover rounded-xl h-full sm:min-w-[100%] min-h-[53px] max-h-[53px] max-w-[73px] aspect-video sm:max-w-[100%] sm:aspect-auto sm:min-h-[250px] sm:max-h-[250px]"
                src={post.feature_image}
                alt={post.title}
                width={1920}
                height={300}
                priority
              />
            </Link>
          </div>
          <div className="sm:block hidden">
            <Tags tags={post.tags} />
          </div>
          <div className="flex-col mt-2">
            <h1
              className={cn(
                "max-w-[95%] flex-1 line-clamp-3 sm:line-clamp-2 text-[1.1rem] md:text-[1.5rem] font-bold",
                FrauncesFont.className
              )}
              style={{ lineHeight: "1.2" }}
            >
              <Link href={"/article/" + post.slug}>{post.title}</Link>
            </h1>
            {description && (
              <p className="text-muted-foreground sm:text-xl line-clamp-3 mt-5 max-w-[80%]">
                {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
              </p>
            )}
            <div className="mt-3 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-xs">by {post.authors[0].name}</span>
                </div>
              </div>
            </div>
          </div>
        </FlexWrapper>
      </article>
    );
  },
};

export default Post;

const FlexWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex sm:items-center gap-3 sm:block">{children}</div>
);
