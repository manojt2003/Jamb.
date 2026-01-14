import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ProductCard } from "./product-card";

type Item = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

type ProductSectionProps = {
  title: string;
  items: Item[];
  columns: number;
  imageWidth: number;
  imageHeight: number;
};

export function ProductSection({
  title,
  items,
  columns,
  imageWidth,
  imageHeight,
}: ProductSectionProps) {

  return (
    <section className="bg-[#ECEBE7] py-16 pb-8">
      {/* TITLE */}
      <h2 className="mb-10 text-center font-serif text-[18px] md:text-[20px]">
        {title}
      </h2>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="grid grid-cols-2 gap-6">
          {items.map((item, index) => {
            const isLastOdd =
              items.length % 2 === 1 && index === items.length - 1;

            return (
              <div key={item.id} className={isLastOdd ? "col-span-2" : ""}>
                <ProductCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  width={imageWidth}
                  height={imageHeight}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div
        className="hidden md:grid gap-10 px-6 max-w-7xl mx-auto"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {items.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            width={imageWidth}
            height={imageHeight}
          />
        ))}
      </div>
    </section>
  );
}
