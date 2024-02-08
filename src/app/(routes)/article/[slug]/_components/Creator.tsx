import { formatTimeToNow } from "@/lib/utils";
import { PrimaryAuthor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CreatorProps {
  author: PrimaryAuthor;
  date: {
    createdAt: string;
    read: number;
  };
}

const Creator: FC<CreatorProps> = ({ author, date }) => {
  return (
    <Link
      href={"/author/" + author.slug}
      className="flex items-center gap-x-2 group max-w-fit"
    >
      {author.profile_image ? (
        <Image
          src={author.profile_image}
          alt={author.name || "not-loaded"}
          width={45}
          height={45}
          className="object-cover group-hover:-translate-y-[1px] relative transition rounded-full max-w-[30px] max-h-[30px] sm:min-w-[45px] sm:min-h-[45px] w-[45px] h-[45px]"
        />
      ) : (
        <div className="group-hover:-translate-y-[1px] bg-gray-400 relative flex text-white items-center justify-center transition rounded-full max-w-[30px] max-h-[30px] sm:min-w-[45px] sm:min-h-[45px] w-[45px] h-[45px] ">
          ?
        </div>
      )}
      <h6 className="text-sm text-muted-foreground flex-wrap">
        <span className="flex gap-x-1 items-center">
          <span className="text-xs">by</span>
          <div className="group-hover:text-semibold w-full group-hover:underline cursor-pointer">
            {author.name}
          </div>
        </span>
        <p className="text-xs">
          {formatTimeToNow(new Date(date.createdAt))} ∙ {date.read} mins read
        </p>
      </h6>
    </Link>
  );
};

export default Creator;
