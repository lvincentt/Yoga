import BenefitsSection from "../components/homepage/BenefitsSection";
import CTASection from "../components/homepage/CTASection";
import HeroSection from "../components/homepage/HeroSection";
import InstructorSection from "../components/homepage/InstructorSection";
import ScheduleSection from "../components/homepage/ScheduleSection";
import TestimonialSection from "../components/homepage/TestimonialSection";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <ScheduleSection />
      <InstructorSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
