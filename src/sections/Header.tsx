import LogoIcon from "@/assets/logo.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 sticky top-0 z-10 bg-black/30 backdrop-blur-md">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
            <h1 className="text-white font-semibold">Himanshu Seervi</h1>
          </div>
          <div className="hidden md:block mr-6">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white hover:underline transition">Home</a>
              <a href="#about" className="text-white/70 hover:text-white hover:underline transition">About</a>
              <a href="#project" className="text-white/70 hover:text-white hover:underline transition">Project</a>
              <a href="#resume" className="text-white/70 hover:text-white hover:underline transition">Resume</a>
              <a href="#contact" className="text-white/70 hover:text-white hover:underline transition">Contact</a>
            </nav>
          </div>
          <div className="md:hidden">
            <Button>
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

