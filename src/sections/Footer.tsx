import Logo from "../assets/logo.svg";
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return <footer className="py-5 border border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
        <div className="flex gap-2 lg:items-center lg:flex-1">
          <Logo className="h-6 w-6" />
          <div className="font-medium">AI Startup Landing Page</div>
        </div>
        <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:justify-end lg:flex-1">
          <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Home</a>
          <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Project</a>
          <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Resume</a>
          <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">Contact</a>
          <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">asdasd</a>
        </nav>
        <div className="flex gap-5 lg:flex-1 lg:justify-end">
          <XSocial className="text-white/40 hover:text-white transition" />
          <InstaSocial className="text-white/40 hover:text-white transition" />
          <YTSocial className="text-white/40 hover:text-white transition" />
        </div>
      </div>
    </div>
  </footer>;
};
