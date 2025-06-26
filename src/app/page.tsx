import FAQ from "@/_components/faq";
import Footer from "@/_components/footer";
import { GoogleMap } from "@/_components/google-map";
import {Hero} from "@/_components/hero";
import HowItWorks from "@/_components/HowItWorks";
import {Navbar} from "@/_components/navigation";
import Testimonials from "@/_components/testimonials";
import Image from "next/image";
import { About } from "@/_components/FeaturedLogos";
import { Art } from "@/_components/atractive-store";
import { Menu } from "@/_components/menu";

export default function Home() {
  return (
   <>


      <div className="fixed -z-10 min-h-screen w-full 
   bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="  ">

        <Navbar />
        <Hero/>
        <About />
        <Art/>
        <Menu/>
        <Testimonials />
        <FAQ />
        <GoogleMap />
        <Footer />
      </div>
    </>
  );
}
