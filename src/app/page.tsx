import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import StarBackground from "@/components/StarBackground";
import {Project} from "@/sections/Project";
import Resume  from "@/sections/Resume";
import About from "@/sections/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      {/* <Features /> */}
      <About/>
      <Project />
      <Resume />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
