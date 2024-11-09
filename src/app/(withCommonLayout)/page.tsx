import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import SubmitReview from "@/components/submitReview/SubmitReview";
import Testimonials from "@/components/testimonials/Testimonials";

const page = () => {
  return (
    <>
      <Hero />
      <Feature />
      <HowItWorks />
      <Testimonials />
      <SubmitReview />
    </>
  );
};

export default page;
