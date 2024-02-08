import { PostWrapper } from "./PostWrapper";
import { Skeleton } from "./ui/skeleton";

export const LoadingSkeleton = () => {
  const array = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <PostWrapper>
      {array.map((_, i: number) => (
        <div className="overflow-hidden" key={i}>
          <Skeleton className="rounded-2xl min-w-[120px] h-full w-full max-h-[100%] max-w-[120px] aspect-video sm:max-w-[100%] sm:aspect-auto sm:min-h-[300px] sm:max-h-[300px]" />
          <div className="flex gap-2">
            <Skeleton className="rounded-full h-6 w-20 mt-5" />
            <Skeleton className="rounded-full h-6 w-16 mt-5" />
          </div>
          <Skeleton className="w-[250px] h-4 mt-5" />
          <div className="mt-5 flex gap-2 items-center">
            <Skeleton className="w-[25px] h-[25px] rounded-full" />
            <Skeleton className="w-[100px] h-4" />
          </div>
        </div>
      ))}
    </PostWrapper>
  );
};
