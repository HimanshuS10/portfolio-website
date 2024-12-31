import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import {Project} from "@/sections/Project";
import Resume  from "@/sections/Resume";
import About from "@/sections/About";
import Experience  from "@/sections/Experience";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      {/* <Features /> */}
      <About/>
      <Experience/>
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
