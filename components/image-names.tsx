import Link from "next/link";
import { names } from "@/lib/images-names";

export default function Names() {
  return (
    <section className="bg-[#F6F3EE] py-10">
      <nav className="flex items-center justify-center mx-auto">
        <ul
          className="
            flex flex-wrap
            justify-center
            items-center
            gap-0 sm:gap-4
            font-serif
            text-[13px]
            sm:text-[15px]
            md:text-[18px]
            text-[#8A8A8A]
            bg-[#9C9C9D];
"
        >
          {names.map((item, index) => (
            <li
              key={item.name}
              className="flex items-center font-normal hover:text-[#1A1A1A] transition-colors duration-300"
            >
              {item.name}

              {/* Divider */}
              {index < names.length - 1 && (
                <span className="mx-2 sm:mx-3 text-[#B0B0B0]">|</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
