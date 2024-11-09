import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import MedsAi from "@/components/medsAi/MedsAi";
import SubmitReview from "@/components/submitReview/SubmitReview";
import Testimonials from "@/components/testimonials/Testimonials";

const page = () => {
  return (
    <>
      <Hero />
      <MedsAi/>
      <Feature />
      <HowItWorks />
      <Testimonials />
      <SubmitReview />
    </>
  );
};

export default page;
