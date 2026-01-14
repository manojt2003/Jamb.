"use client";

import ContentImageSection from "@/components/content-with-image";

export default function LightSection() {
  return (
    <ContentImageSection
      heading="Lighting"
      description="Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam."
      primaryButtonText="Explore our Lighting"
      secondaryButtonText=""   // optional (see note below)
      imageSrc="/images/image3.png"
      imageAlt="Lighting"
    />
  );
}
