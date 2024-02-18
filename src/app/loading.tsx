import { Loader2 } from "lucide-react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-screen h-screen justify-center flex-col gap-5 flex items-center">
      <Image
        src={"/logo_without_name.png"}
        alt="logo"
        width={150}
        height={34}
      />
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default Loading;
