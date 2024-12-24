import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return <section className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative bg-black text-white/70"
    style={{
      backgroundImage: `url(${starsBg.src})`,
    }}
  >
<div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>
<div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-500 border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
    <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="absolute h-5 w-5 left-full border border-white inline-flex items-center justify-center rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </div>

    <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

    </div>

    <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

    <div className="container relative mt-16">
      <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
      <p className="text-lg text-white/70 mt-5 text-center">Lormpasdd asd dsf jjasdf jasd fidfasd fsdf asduif asdfasdfuasdf asdfb asdfiasdfjasd adfuhkzasd asdasdasd </p>
      <div className="flex justify-center mt-5">
        <Button>Join WaitList</Button>
      </div>

    </div>
  </section>;
};
