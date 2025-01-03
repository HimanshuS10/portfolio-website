'use client';
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative bg-black text-white/70"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY: bgPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(70,144,255,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          linear-gradient(to right, black, transparent 10%, transparent 90%, black),
          linear-gradient(to bottom, black, transparent 10%, transparent 90%, black)
        `
      }}></div>

      <div className="absolute inset-0 w-full pointer-events-none bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-600 border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(148,184,255)_37.7%,rgb(0,24,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(69,140,255)]"></div>

      <motion.div
        style={{
          translateY: '-50%',
          translateX: '-50%'
        }}
        animate={{
          rotate: '-1turn',
        }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: 'linear',
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-5 w-5 left-full border border-white inline-flex items-center justify-center rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        style={{
          translateY: '-50%',
          translateX: '-50%'
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: 'linear',
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border-[2px] rounded-full border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
      </motion.div>

      <motion.div
        style={{
          translateY: '-50%',
          translateX: '-50%'
        }}
        animate={{
          rotate: '-1turn',
        }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: 'linear',
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border-[3.5px] border-white/20 border-dotted top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>

      <div className="container relative mb-[200px] max-md:mt-60 z-0">
        <h1 className="text-5xl md:text-8xl text-white font-semibold tracking-tighter text-center">
          <span className="stroke-slate-400" style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5)'
          }}
          > Hi, I&apos;m Himanshu</span><br />{' '}
          <TypeAnimation
            sequence={[
              'FrontEnd Developer',
              1400,
              'University Student',
              1400,
              'Software Developer',
              1400,
            ]}
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5)'
            }}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-400"
          />
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          I&apos;m a passionate second-year software engineering student at the University of Guelph.
        </p>
        <div className="flex justify-center mt-5">
          <a href="#about">
            <Button>Get Started &rarr;</Button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};
