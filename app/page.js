import Image from "next/image";
import Link from "next/link";

import bgImage from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-60">
      <Image
        src={bgImage}
        fill
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
        className="object-cover object-center"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Luxury Cabins
        </Link>
      </div>
    </main>
  );
}
