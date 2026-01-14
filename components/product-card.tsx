"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
};

export function ProductCard({
  image,
  title,
  subtitle,
  width,
  height,
}: ProductCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      className="h-full"
    >
      <Card
        className="
    h-full
    bg-transparent
    shadow-none
    rounded-none
    border-[#ECEBE7]
  "
      >
        <CardContent className="p-4 flex flex-col items-center text-center">
          {/* IMAGE FRAME (STATIC) */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              maxWidth: width,
              aspectRatio: `${width} / ${height}`,
            }}
          >
            {/* IMAGE (MOVES INSIDE) */}
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { scale: 1.08, opacity: 0 }
              }
              whileInView={
                prefersReducedMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }
              }
              whileHover={prefersReducedMotion ? undefined : { scale: 1.06 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1], // luxury easing
              }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </motion.div>
          </div>

          {/* TEXT */}
          <div className="mt-3">
            <p
              className="
                font-serif
                text-[clamp(12px,1.2vw,14px)]
                leading-[1.2]
                text-[#737373]
              "
            >
              {title}
            </p>

            <p
              className="
                mt-0.5
                font-serif
                text-[clamp(11px,1vw,13px)]
                leading-[1.2]
                text-[#737373]
              "
            >
              {subtitle}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
