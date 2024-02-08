import { FrauncesFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Heading = () => {
  return (
    <h1 className={cn("hero-title global-title", FrauncesFont.className)}>
      <span>Hey, we’re Reiro.</span> We promote positive culture through{" "}
      <span>inspiring articles</span> on health, design, and web.
    </h1>
  );
};
