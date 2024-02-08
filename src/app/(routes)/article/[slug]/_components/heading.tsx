import Tags from "@/components/Tags";
import { FrauncesFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Tag } from "@/types";
import { FC } from "react";

interface headingProps {
  title: string;
  description: string;
  tags: any;
}

const Heading: FC<headingProps> = ({ description, tags, title }) => {
  return (
    <div className="space-y-10">
      <div className="max-w-[860px] space-y-8">
        <h1
          className={cn(
            "text-[2.5rem] md:text-[4rem] leading-[1.2] font-[680]",
            FrauncesFont.className
          )}
        >
          {title}
        </h1>
        <p className="text-muted-foreground text-[1rem] md:text-[1.4rem]">
          {description}
        </p>
        <div>
          <Tags tags={tags} className="py-2 px-4" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Heading;
