import Image from "next/image";
import { HEADER_LOGO_LIGHT, HEADER_LOGO_DARK } from "@/lib/assets";

/** Dual light/dark logo — renders the correct variant via CSS. */
export function Logo() {
  return (
    <>
      <Image
        src={HEADER_LOGO_LIGHT}
        alt="Logicode"
        width={175}
        height={40}
        priority
        unoptimized
        className="h-10 w-auto object-contain dark:hidden"
      />
      <Image
        src={HEADER_LOGO_DARK}
        alt="Logicode"
        width={175}
        height={40}
        priority
        unoptimized
        className="h-10 w-auto object-contain hidden dark:block"
      />
    </>
  );
}
