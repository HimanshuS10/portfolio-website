import Logo from "@/assets/logo.png";
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return <footer className="py-5 border border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
        <div className="flex gap-2 lg:items-center lg:flex-1">
          <img src={Logo.src} className="h-6 w-6" />
          <div className="font-medium">Himanshu Seervi</div>
        </div>
        <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:justify-end lg:flex-1">
          <a href="#about" className="text-white/70 hover:text-white text-xs md:text-sm transition">About</a>
          <a href="#experience" className="text-white/70 hover:text-white text-xs md:text-sm transition">Experience</a>
          <a href="#project" className="text-white/70 hover:text-white text-xs md:text-sm transition">Project</a>
          <a href="#resume" className="text-white/70 hover:text-white text-xs md:text-sm transition">Resume</a>
          <a href="#contact" className="text-white/70 hover:text-white text-xs md:text-sm transition">Contact</a>
        </nav>
      </div>
    </div>
  </footer>;
};
