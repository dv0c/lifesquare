import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PrimaryAuthor } from "@/types";
import Link from "next/link";
import { FC } from "react";

interface WrittenByProps {
  author: PrimaryAuthor;
}

const WrittenBy: FC<WrittenByProps> = ({ author }) => {
  return (
    <div>
      <h1 className="text-sm font-medium mb-2">WRITTEN BY</h1>
      <hr />
      <Link href={"/author/" + author.slug} className="mt-5 group flex gap-3">
        <Avatar className="w-[70px] h-[70px] group-hover:-translate-y-[2px] transition">
          <AvatarImage src={author.profile_image} className="object-cover" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-sm truncate group-hover:underline">{author.name}</h1>
          <p className="text-muted-foreground text-xs line-clamp-3">
            {author.bio}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default WrittenBy;
