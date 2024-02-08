import Image from "next/image";
import { FC } from "react";

interface ThumbnailProps {
  credits: any;
  image: string;
  alt: string;
}

const Thumbnail: FC<ThumbnailProps> = ({ credits, image, alt }) => {
  return (
    <div>
      <Image
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className="object-cover rounded-[22px] max-h-[800px]"
      />
      <div
        className="text-xs mt-3 text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: credits }}
      ></div>
    </div>
  );
};

export default Thumbnail;
