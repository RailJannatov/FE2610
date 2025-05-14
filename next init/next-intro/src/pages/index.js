import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1>This is my next app</h1>
      <p>this is paragraph</p>
      <Link href="/about">Click me and navigate to about page</Link>
    </div>
  );
}
