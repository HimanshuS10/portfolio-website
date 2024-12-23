import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return <section className="h-[492px] flex items-center"
    style={{
      backgroundImage: `url(${starsBg.src})`,
    }}
  >
    <div className="absolute h-64 w-64 rounded-full bg-purple-500 border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="container relative">
      <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
      <p className="text-lg text-white/70 mt-5 text-center">Lormpasdd asd dsf jjasdf jasd fidfasd fsdf asduif asdfasdfuasdf asdfb asdfiasdfjasd adfuhkzasd asdasdasd </p>
      <div className="flex justify-center mt-5">
        <Button>Join WaitList</Button>
      </div>

    </div>
  </section>;
};
