import Image from "next/image";
import Link from "next/link";

interface DesktopItem {
  id: string;
  name?: string;
  iconSrc: string;
  href: string;
  top: string;
  left: string;
}

const scatteredItems: DesktopItem[] = [
  {
    id: "folder-top",
    iconSrc: "/folder-black.png",
    href: "/projects",
    top: "18%",
    left: "52%",
  },
  {
    id: "folder-left",
    iconSrc: "/folder-grey.png",
    href: "/about",
    top: "48%",
    left: "18%",
  },
  {
    id: "folder-bottom",
    name: "nu thoughts",
    iconSrc: "/folder-yellow.png",
    href: "/blog",
    top: "70%",
    left: "62%",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh p-6">
      <header>
        <h1>Chris Cortes</h1>
      </header>
      {/* Main Canvas */}
      <main className="relative h-screen w-full flex items-center justify-center">
        {/* Centered Profile Picture */}
        <div className="relative z-10 shadow-md">
          <Image
            src="/me.jpg"
            alt="Profile photo"
            width={130}
            height={130}
            className="object-cover"
            priority
          />
        </div>

        {/* Scattered Desktop Icons */}
        {scatteredItems.map((item) => (
          <div
            key={item.id}
            className="absolute flex flex-col items-center group cursor-pointer -translate-x-1/2 -translate-y-1/2"
            style={{ top: item.top, left: item.left }}
          >
            <Link href={item.href} className="flex flex-col items-center">
              <div className="w-16 h-14 relative flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src={item.iconSrc}
                  alt={item.name || "desktop item"}
                  width={64}
                  height={56}
                  className="object-contain"
                />
              </div>
              {item.name && (
                <span className="mt-1 text-[11px] tracking-tight group-hover:underline">
                  {item.name}
                </span>
              )}
            </Link>
          </div>
        ))}
      </main>
      <footer className="flex justify-center gap-3">
        <a
          href="https://github.com/DoubleC8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-(--green) duration-300 ease-in-out"
        >
          GitHub
        </a>
        <p>/</p>
        <a
          href="https://www.linkedin.com/in/chris-cortes-45b7b6280/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-(--green) duration-300 ease-in-out"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
