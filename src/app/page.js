import Testimonials from "@/components/homecomponent/Testimonials";
import FAQSection from "../components/homecomponent/FAQSection";
import Hero from "../components/homecomponent/Hero";
import HomeAbout from "../components/homecomponent/HomeAbout";
import HomeFaculties from "../components/homecomponent/HomeFaculties";
import ImageSlider from "../components/homecomponent/ImageSlider";
import StatsSection from "../components/homecomponent/StatsSection";
import UniversityProgram from "../components/homecomponent/UniversityProgram";
import VideoSection from "../components/homecomponent/VideoSection";
import HomeContact from "@/components/homecomponent/HomeContact";
import BrandSlider from "@/components/homecomponent/BrandSlider";

export default function Home() {
  return (
    <div className="">
      <main  className="">
        <Hero />
        <UniversityProgram />
        <HomeAbout />
        <StatsSection />
        <VideoSection />
        <ImageSlider />
        <HomeFaculties />
        <FAQSection />
        <Testimonials />
        <HomeContact />
        <BrandSlider />
      </main>

    </div>
  );
}
