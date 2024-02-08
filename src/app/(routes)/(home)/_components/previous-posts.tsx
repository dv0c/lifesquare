import { api } from "@/lib/api";
import { PostContainer } from "./PostContainer";

const PreviousPosts = async () => {
  return (
    <section className="mx-5 mb-[7vh]">
      <h1 className="text-xs font-semibold">PREVIOUS POSTS</h1>
      <PostContainer />
    </section>
  );
};

export default PreviousPosts;
