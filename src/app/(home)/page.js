import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import Hero from "@/components/homepage/Hero";
import MarqueeSection from "@/components/homepage/Marquee";

export default function Home() {
  return (
    <div>
      <MarqueeSection />  
      <Hero />
      <FeaturedBooks/>
    </div>
  );
}
