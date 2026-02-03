import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaAngleRight } from "react-icons/fa6";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { WavyBackground } from "./ui/WavyBackground";

const Hero = () => {
  return (
    <div className="pb-20 w-full pt-36 overflow-hidden relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-[75%] h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-0 left-[90%] h-[80vh] w-[25vw]"
          fill="#3b82f6"
        />
        <Spotlight className="top-28 left-10 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 h-full w-full">
        <WavyBackground />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with nextJS
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experience"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Aditya, a Full Stack Developer
          </p>
          <div className="flex justify-items-center gap-4">
            <a href="#projects">
              <MagicButton
                title="See My Work"
                position="right"
                icon={<FaAngleRight />}
              />
            </a>
            <a
              href="/aditya_gaikwad_resume_2025.pdf"
              target="_blank"
              download="Aditya_Gaikwad_Resume_2025.pdf"
            >
              <MagicButton
                title="Get Resume"
                position="right"
                icon={<IoCloudDownloadSharp />}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
