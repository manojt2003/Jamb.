
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F0ED] text-[#333] border-t border-gray-300 pb-[env(safe-area-inset-bottom)]">
      {/* Full-width container with generous side padding and no max-width constraint */}
      <div className="max-w-[1512px] mx-auto px-6 lg:px-12 py-12 min-h-[759px]">
        {/* TOP SECTION: Contact, Email and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
          <div className="lg:col-span-3 w-[257px] h-[96px] font-sans text-[#737373] text-[14px] leading-relaxed text-left">
            <p>Tel: +44 (0) 207 730 2122</p>
            <div className="mt-3">
              <p>95–97 Pimlico Rd</p>
              <p>London SW1W 8PH</p>
            </div>
          </div>

          <div className="flex lg:col-span-4 w-[257px] h-[96px] grid grid-cols text-[#737373] font-sans text-[14px] text-left">
            <a
              href="mailto:hello@jamb.co.uk"
              className="hover:text-[#33691E] transition-colors "
            >
              hello@jamb.co.uk
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start w-full ">
            <div className="md:ml-auto max-w-md">
              <p className="font-sans text-[#737373] text-[clamp(14px,1.4vw,16px)] mb-2">
                Newsletter
              </p>

              <div className="flex border text-[#737373] border-[#B5B5B5] bg-white/20">
                <input
                  type="email"
                  placeholder="Search"
                  className="w-[401px] h-[43px] bg-transparent px-4 font-sans text-[13px] outline-none"
                />
                <button className="w-[151px] h-[43px] cursor-pointer font-sans uppercase tracking-widest text-[10px] text-[#33691E] border-l border-[#B5B5B5] hover:bg-[#33691E] hover:text-white transition-all">
                  Subscribe
                </button>
              </div>
              <label className="mt-2 w-[257px] h-[39px] flex text-[#737373] items-center gap-2 font-sans text-[12px]">
                <input
                  type="checkbox"
                  className="rounded-4xl border-checkbox text-[#737373] cursor-pointer"
                />
                I agree to our{" "}
                <span className="underline text-[#737373] cursor-pointer text-[#33691E] hover:text-[#33691E]/80">Privacy Policy</span>
              </label>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION GRID: 5-column layout on wide screens, responsive on smaller */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-2 items-start pt-2 w-full">
          {/* Column 1: Chimneypieces */}
          <div className="flex flex-col gap-10 text-left w-[257px] min-h-[435px]">
            <FooterColumn
              title="Reproduction Chimneypieces"
              items={[
                "Marble",
                "Stone",
                "Grates & Accessories",
                "Guide to Jamb Marbles",
              ]}
            />
            <FooterColumn
              title="Antique Chimneypieces"
              items={["French & Italian", "Georgian", "Regency"]}
            />
            <div className="border-t border-gray-400 pt-3 text-left">
              <Link
                href="#"
                className="font-sans font-bold text-[#333] text-[13px] hover:text-[#33691E] transition-colors block"
              >
                Sell an Antique Chimneypiece
              </Link>
            </div>
          </div>

          {/* Column 2: Lighting */}
          <div className="text-left w-[257px] min-h-[223px]">
            <FooterColumn
              title="Reproduction Lighting"
              items={[
                "Hanging Globes",
                "Hanging Lanterns",
                "Wall Lights",
                "Dish Lights",
                "Table Lamps",
                "Chains & Brackets",
              ]}
            />
          </div>

          {/* Column 3: Furniture */}
          <div className="flex flex-col gap-10 text-left w-[257px] min-h-[613px]">
            <FooterColumn
              title="Reproduction Furniture"
              items={["Seating", "Tables", "Mirrors", "The Pantry Collection"]}
            />
            <FooterColumn
              title="Antique Furniture"
              items={[
                "Seating",
                "Tables",
                "Desks",
                "Bookcases & Cabinets",
                "Chests",
                "Mirrors",
                "Fire Accessories",
              ]}
            />
          </div>

          {/* Column 4: Journal */}
          <div className="text-left w-[257px] min-h-[223px]">
            <FooterColumn
              title="Journal"
              items={[
                "Praesentium",
                "Voluptatibus",
                "Accusamus",
                "Iusto",
                "Dignissimos",
              ]}
            />
          </div>

          {/* Column 5: About */}
          <div className="text-left w-[257px] min-h-[223px]">
            <FooterColumn
              title="About"
              items={[
                "Founders",
                "Team",
                "History",
                "Galleries",
                "Workshops",
                "Showrooms",
                "Terms & Conditions",
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-full group">
      <h3 className="font-sans text-[15px] text-[#000000] font-bold text-[#333] mb-1 border-t border-gray-400 pt-0.5 leading-tight">
        {title}
      </h3>
      <ul className="font-sans text-[12px] text-[#737373] space-y-0">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="text-[#737373] hover:text-[#33691E] transition-colors block">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


