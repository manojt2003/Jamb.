"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#F6F3EE]">
      {/* HERO FRAME (STATIC) */}
      <div
        className="
          relative
          w-full
          aspect-[16/9]
          min-h-[320px]
          max-h-[760px]
          overflow-hidden
        "
      >
        {/* IMAGE (MOVES INSIDE) */}
        <motion.div
          
          whileInView={{
            opacity: 1,
          }}

          className="absolute inset-0"
        >
          <Image
            src="/images/image1.png"
            alt="Antique fireplace mantel with mirror and decorative objects"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
