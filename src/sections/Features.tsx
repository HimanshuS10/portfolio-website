"use client";

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import expand from "@/assets/expand.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";
import HeroContent from "./HeroContent";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Expand your reach",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 1000,
  },
];

const FeatureTab = (props: typeof tabs[number] & ComponentPropsWithoutRef<"div"> & { selected: boolean }) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLootieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current) {
      return;
    }

    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);

  const handleTabHover = () => {
    if (dotLootieRef.current === null) {
      return;
    }
    dotLootieRef.current.seek(0);
    dotLootieRef.current.play();
  };

  return (
    <motion.div
      className={`border ${
        props.selected ? "border-[#2b60ff]" : "border-white/15"
      } flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative cursor-pointer`}
      onClick={props.onClick}
    >
      <div ref={tabRef} onMouseEnter={handleTabHover} className="h-12 w-12 border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer ref={dotLootieRef} src={props.icon} className="h-5 w-5" autoplay />
      </div>
      <motion.div
        style={{
          maskImage,
        }}
        className="absolute inset-0 -m-px rounded-xl border border-[#2b60ff]"
      ></motion.div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#2b60ff] font-semibold">new</div>}
    </motion.div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(-1); // -1 represents full image view
  const BackgroundPositionX = useMotionValue(50);
  const BackgroundPositionY = useMotionValue(50);
  const BackgroundSizeX = useMotionValue(100);

  const backgroundPosition = useMotionTemplate`${BackgroundPositionX}% ${BackgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${BackgroundSizeX}% auto`;

  const handleTabChange = (index: number) => {
    setSelectedTab(index);

    if (index === -1) {
      // Full image view
      animate(BackgroundPositionX, 50, {
        duration: 0.5,
        ease: "easeInOut",
      });
      animate(BackgroundPositionY, 50, {
        duration: 0.5,
        ease: "easeInOut",
      });
      animate(BackgroundSizeX, 100, {
        duration: 0.5,
        ease: "easeInOut",
      });
    } else {
      // Zoom to specific section
      animate(BackgroundPositionX, tabs[index].backgroundPositionX, {
        duration: 0.5,
        ease: "easeInOut",
      });
      animate(BackgroundPositionY, tabs[index].backgroundPositionY, {
        duration: 0.5,
        ease: "easeInOut",
      });
      animate(BackgroundSizeX, tabs[index].backgroundSizeX, {
        duration: 0.5,
        ease: "easeInOut",
      });
    }
  };

  return (
    <section className="py-15 md:py-20">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">Elevate your SEO efforts.</h2>
        <p className="text-white/70 text-lg md:text-xl md:max-w-2xl mx-auto tracking-tight text-center">
          From small startups to large companies, we help optimize your SEO strategy.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              selected={selectedTab === tabIndex}
              onClick={() => handleTabChange(tabIndex)}
              key={tab.title}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg max-h-screen md:h-[60vh]"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          />
        </div>
      </div>
    </section>
  );
};
