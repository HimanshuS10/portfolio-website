import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

// Contact Page
export const Contact = () => {
  return <section id="contact" className="py-20 md:py-24">
    <div className="container">
      <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" style={{
        backgroundImage: `url(${starsBg.src})`,
      }}>
        <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
          backgroundImage: `url(${gridLines.src})`,
        }}></div>
        <div className="relative">
          <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center">Contact Me</h2>
          <div>
            <p className="text-center md:text-xl max-w-xs mx-auto text-lg text-white/70 px-4 mt-5 tracking-tight">
              Email: <a href="mailto:hseervi@uoguelph.ca" className="text-blue-500 hover:underline">hseervi@uoguelph.ca</a>
            </p>
          </div>
          <div>
            <p className="text-center md:text-xl max-w-xs mx-auto text-lg text-white/70 px-4 mt-5 tracking-tight">
              LinkedIn: <a href="https://www.linkedin.com/in/himanshu-seervi/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Himanshu Seervi</a>
            </p>
          </div>
          <div>
            <p className="text-center md:text-xl max-w-xs mx-auto text-lg text-white/70 px-4 mt-5 tracking-tight">
              GitHub: <a href="https://github.com/HimanshuS10" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">HimanshuS10</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
};
