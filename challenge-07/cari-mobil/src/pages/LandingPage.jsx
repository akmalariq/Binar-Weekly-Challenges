// Dependencies

// Components
import NavigationBar from "../components/NavigationBar";
import MainSectionLandingPage from "../components/MainSectionLandingPage";
import OurServiceSectionLandingPage from "../components/OurServiceSectionLandingPage";
import WhyUsSectionLandingPage from "../components/WhyUsSectionLandingPage";
import TestimonialSectionLandingPage from "../components/TestimonialSectionLandingPage";
import GettingStartedSectionLandingPage from "../components/GettingStartedSectionLandingPage";
import FAQSectionLandingPage from "../components/FAQSectionLandingPage";
import FooterSectionLandingPage from "../components/FooterSectionLandingPage";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <NavigationBar />
      <MainSectionLandingPage />
      <OurServiceSectionLandingPage />
      <WhyUsSectionLandingPage />
      <TestimonialSectionLandingPage />
      <GettingStartedSectionLandingPage />
      <FAQSectionLandingPage />
      <FooterSectionLandingPage />
    </div>
  );
}
