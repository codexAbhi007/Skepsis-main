import { content } from "@/lib/content";
import Image from "next/image";

export function SkepsisLogo() {
     return <>
      <Image
          src={content.header.logo}
          height={40}
          width={40}
          alt="Skepsis"
          className="hover:scale-110 transition-transform duration-200 ease-in-out"
        />
        <Image
          src="./logo-line.svg"
          height={5}
          width={2}
          alt="|"
          className="hover:opacity-75 transition-opacity duration-200 ease-in-out"
        />
        <span className="text-xl font-bold tracking-tight">
          <Image
            src="./heading.svg"
            height={80}
            width={80}
            alt="Skepsis"
            className="hover:rotate-3 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </span>
        </>
}