import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import productImage from "@/assets/product-image.png";
import { div } from "framer-motion/client";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Reactjs from '@/assets/React.png';


const testimonials = [
  {
    text: "'Highly motivated and was a great asset to our team. Demonstrated ability to learn new tech easily and deep dive into it to produce results. Also, has ability to explain IT to various audience levels. Highly recommend adding Himanshu to your team!'",
    name: "Dan Austin",
    title: "Manager @ Algoma Steel",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Beyond Expectations</h2>
      <p className="text-white/70 text-lg text-center mt-5 md:text-xl tracking-tight max-w-sm mx-auto">
        Our revolutionized AI SEO tools have helped countless companies improve their SEO strategy and increase their productivity. But don't just take our word for it, hear what our customers have to say:
      </p>
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
