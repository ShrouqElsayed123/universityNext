import FAQSection from "./components/homecomponent/FAQSection";
import Hero from "./components/homecomponent/Hero";
import HomeAbout from "./components/homecomponent/HomeAbout";
import HomeFaculties from "./components/homecomponent/HomeFaculties";
import ImageSlider from "./components/homecomponent/ImageSlider";
import StatsSection from "./components/homecomponent/StatsSection";
import UniversityProgram from "./components/homecomponent/UniversityProgram";
import VideoSection from "./components/homecomponent/VideoSection";

export default function Home() {
  return (
    <div >
      <main>
        <Hero />
        <UniversityProgram />
        <HomeAbout />
        <StatsSection />
        <VideoSection />
        <ImageSlider />
        <HomeFaculties />
        <FAQSection />
      </main>

    </div>
  );
}
