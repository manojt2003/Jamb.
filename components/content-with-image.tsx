"use client";

import { easeInOut, motion } from "motion/react";

type ContentImageSectionProps = {
  heading: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; // optional: image left / right
};

export default function ContentImageSection({
  heading,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageSrc,
  imageAlt = "",
  reverse = false,
}: ContentImageSectionProps) {
  return (
    <section className="bg-[#F5F3EF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="
              font-serif
              text-[clamp(26px,4vw,38px)]
              leading-[1.25]
              text-[#1A1A1A]
              mb-8
            "
            >
              {heading}
            </h2>

            <p className="font-serif font-normal text-left text-[18px] leading-[30px] text-[#737373] max-w-[520px] mb-10">
              {description}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 items-center">
              <button
                className="
                  px-3 py-2
                  sm:px-4 sm:py-2
                  md:px-5 md:py-[10px]
                  border border-[#737373]
                  text-[#737373]
                  text-[clamp(11px,1.2vw,12px)]
                  tracking-[0.14em]
                  uppercase
                  leading-none
                  font-serif
                  transition
                  hover:bg-emerald-900 hover:text-white
                  w-fit
                  cursor-pointer
                "
              >
                {primaryButtonText}
              </button>

              {secondaryButtonText?.trim() && (
                <button
                  className="
        px-3 py-2
        sm:px-4 sm:py-2
        md:px-5 md:py-[10px]
        border border-[#8B8B8B]
        text-[#737373]
        text-[clamp(11px,1.2vw,12px)]
        tracking-[0.14em]
        uppercase
        leading-none
        font-serif
        transition
        cursor-pointer
        hover:bg-emerald-900 hover:text-white
        w-fit
      "
                >
                  {secondaryButtonText}
                </button>
              )}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="
            relative
            w-full
            aspect-[6/9]
            overflow-hidden
            flex
            items-center
            justify-center
  "
          >
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              initial={{
                scale: 1.08,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.06, // hover IN
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1], // luxury easeInOut
              }}
              viewport={{ once: true }}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
