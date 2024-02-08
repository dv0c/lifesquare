import { Post } from "@/types";
import { FC } from "react";
import WrittenBy from "./sidebar/written-by";

interface SidebarProps {
  data: Post;
}

const Sidebar: FC<SidebarProps> = ({ data }) => {
  return (
    <div className="">
      <WrittenBy author={data.primary_author!} />
    </div>
  );
};

export default Sidebar;
