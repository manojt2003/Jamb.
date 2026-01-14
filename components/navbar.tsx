import { Mail, Menu, Search } from "lucide-react";
import Link from "next/link";

const mobileIcons = [
  { icon: Search, label: "Search", href: "#" },
  { icon: Mail, label: "Mail", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-emerald-900">
      <div className="max-w-7xl mx-auto px-[41px]">
        <div className="flex h-16 items-center justify-between ">
          {/* LOGO */}
          <Link href="/" aria-label="Jamb Home">
            <span
              className="
                block
                w-[108px]
                h-[45px]
                text-[40px]
                leading-[45px]
                font-normal
                hero-font
                text-gray-900
              "
            >
              Jamb.
            </span>
          </Link>

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-6">
            <Search className="w-[26px] h-[26px] stroke-[1.5] text-gray-600 hover:text-emerald-900 cursor-pointer" />
            <Mail className="w-[26px] h-[26px] stroke-[1.5] text-gray-600 hover:text-emerald-900 cursor-pointer" />
            <Menu className="w-[26px] h-[26px] stroke-[1.5] text-gray-600 hover:text-emerald-900 cursor-pointer" />
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-4">
            {mobileIcons.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} href={item.href} aria-label={item.label}>
                  <Icon className="w-[24px] h-[24px] stroke-[1.5] text-gray-700" />
                </Link>
              );
            })}

            <button aria-label="Menu">
              <Menu className="w-[28px] h-[28px] stroke-[1.5] text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
