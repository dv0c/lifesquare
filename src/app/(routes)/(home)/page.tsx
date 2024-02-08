import { SearchBar } from "@/components/SearchBar";
import { Heading } from "./_components/heading";
import { PopularTags } from "./_components/popular-tags";
import { WhatsNew } from "./_components/whats-new";
import { FeaturedPosts } from "./_components/featured-posts";
import PreviousPosts from "./_components/previous-posts";
import AlsoLike from "./_components/also-like";

const page = ({}) => {
  return (
    <div>
      <div
        className="cover-mask"
        style={{
          backgroundImage:
            "url(https://reiro.fueko.net/content/images/size/w1600/2022/10/kim-daniels-P2qImp_Mr2Y-unsplash.jpg)",
        }}
      />

      <Heading />
      <div className="flex mt-10 justify-center">
        <SearchBar />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <PopularTags />
      </div>
      <div className="mt-10 mx-auto max-w-[var(--max-width-2)]">
        <WhatsNew />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <FeaturedPosts />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <PreviousPosts />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <AlsoLike />
      </div>
    </div>
  );
};

export default page;
