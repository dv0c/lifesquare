import { api } from "@/lib/api";
import { TagsSlider } from "./tags-slider";

export const PopularTags = () => {
  return (
    <section className="mx-5">
      <h3 className="text-xs font-semibold">POPULAR TAGS</h3>
      <div className="mt-3">
        <Tags />
      </div>
    </section>
  );
};

const Tags = async () => {
  const { data } = await api("tags", {
    limit: 7,
    fields: "name,feature_image,slug",
    filter: "feature_image:false",
  });

  return (
    <div className="popular-tags">
      <TagsSlider data={data} />
    </div>
  );
};
