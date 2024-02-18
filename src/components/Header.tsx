import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mb-20">
      <div className="pt-[2.5vh] justify-center flex min-h[60px] items-center gap-7 pr-[5vw] pl-[5vh]">
        <Link href={"/"}>
          <Image src={"/logo_black.png"} alt="logo" width={150} height={34} />
        </Link>
      </div>
    </header>
  );
};
