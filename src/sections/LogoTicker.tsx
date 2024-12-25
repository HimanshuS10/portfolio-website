'use client';
import { motion } from "framer-motion";
import Java from '@/assets/Java.png';
import Python from '@/assets/Python.png';
import JavaScript from '@/assets/JavaScript.png';
import Reactjs from '@/assets/React.png';
import Tailwind from '@/assets/Tailwind.png';
import Cprogram from '@/assets/C.png';

const logos = [Tailwind, Java, Cprogram, Reactjs, JavaScript, Python];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-5 px-4 md:px-8">
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap">Languages & <br /> Frameworks Experience:</h2>
        </div>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: 'linear',
            }}
            className="flex flex-nowrap gap-14 items-center"
          >
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo.src} alt="logo" className="h-8 md:h-10 w-auto object-contain" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

