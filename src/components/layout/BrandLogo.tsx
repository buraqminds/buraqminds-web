import { siteContent } from "@/content/site";
import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
};

export default function BrandLogo({
  className = "h-10 w-[132px] origin-left scale-125 object-contain sm:h-12 sm:w-[150px]",
  height = 48,
  width = 240,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={siteContent.logo}
      alt={siteContent.name}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
