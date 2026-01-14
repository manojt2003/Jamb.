import { div } from "framer-motion/client";
import Names from "@/components/image-names";
import FireplacesSection from "@/components/sub-section1";
import HeroSection from "@/components/hero-section";
import LightSection from "@/components/sub-section2";
import {ProductSection} from "@/components/product-section";
import {chimneypieces,LatestSection,LatestFurniture,lighting,} from "@/lib/card-data";
import FurnitureSection from "@/components/sub-section3";
import {} from "@/lib/card-data";
import GrandSection from "@/components/sub-section4";

import LastSubSection from "@/components/sub-section5";
import Footer from "@/components/footer";

export default function Root() {
return (
     <div>
          <HeroSection/>
          <Names/>
          <FireplacesSection/>
          <LightSection/>
          <ProductSection
          title="Our latest chimneypieces"
          items={chimneypieces}
          columns={4}
          imageWidth={333}
          imageHeight={244}
          />

          <ProductSection
          title="Our latest lighting"
          items={lighting}
          columns={5}
          imageWidth={186}
          imageHeight={253}
          />
          <FurnitureSection/>
          <ProductSection
          title="Our latest lighting"
          items={LatestFurniture }
          columns={5}
          imageWidth={186}
          imageHeight={253}
          />
          <GrandSection/>
          <ProductSection
          title="See more of our latest stories"
          items={LatestSection }
          columns={5}
          imageWidth={196}
          imageHeight={253}
          />
          <LastSubSection />
     </div>
)
}