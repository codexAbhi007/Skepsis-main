"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function HashRemover() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      router.replace(pathname, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, router]);

  return null; // no UI
}
