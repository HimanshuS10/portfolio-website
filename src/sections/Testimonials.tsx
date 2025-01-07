import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import productImage from "@/assets/product-image.png";
import { div } from "framer-motion/client";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Reactjs from '@/assets/React.png';

// Not used 
const testimonials = [
  {
    text: "'Highly motivated and was a great asset to our team. Demonstrated ability to learn new tech easily and deep dive into it to produce results. Also, has ability to explain IT to various audience levels. Highly recommend adding Himanshu to your team!'",
    name: "Dan Austin",
    title: "Manager @ Algoma Steel",
    avatarImg: avatar1,
  },
];

export const Testimonials = () => {
  return <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Test</h2>
      <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex gap-5">
          {testimonials.map(testimonial => (
            <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] mt-10 max-w-xs md:max-w-md flex-none">
              <div className="text-lg tracking-tight md:text-2xl ">{testimonial.text}</div>
              <div className="flex items-center gap-3 mt-5">
                <div className="realative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)]">
                  <Image src={testimonial.avatarImg} alt={""}
                    className="h-11 w-11 rounded-lg grayscale" />
                </div>
                <div className="flex flex-col">
                  <div>
                    {testimonial.name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>


          ))}
        </div>
      </div>
    </div>
  </section>;
};
