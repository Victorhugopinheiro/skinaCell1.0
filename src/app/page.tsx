import FAQ from "@/_components/faq";
import { Brands } from "@/_components/FeaturedLogos";
import Footer from "@/_components/footer";
import { GoogleMap } from "@/_components/google-map";
import Hero from "@/_components/hero";
import HowItWorks from "@/_components/HowItWorks";
import Navigation from "@/_components/navigation";
import Testimonials from "@/_components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
   <>


      <div className="fixed -z-10 min-h-screen w-full 
   bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto ">

        <Navigation />
        <Hero phoneNumber="(11) 98333-2724" message="Eae"/>
        <Brands />
        <Testimonials />
        <HowItWorks />
        <FAQ />
        <GoogleMap />
        <Footer />
      </div>
    </>
  );
}
