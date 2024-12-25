import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import productImage from "@/assets/product-image.png";
import { div } from "framer-motion/client";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Reactjs from '@/assets/React.png';
import Images from '@/assets/image.png';

export const Project = () => {
    return (
        <div className="container py-5">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center mb-10">My Projects.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    src={Images.src}
                    title="Tech Mastermind"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    githubLink="https://github.com/HimanshuS10/TechMasterMind-Website"
                    websiteLink="https://techmastermind.ca/"
                />
                <ProjectCard
                    src={Images.src}
                    title="React Dashboard"
                    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    githubLink="https://github.com/HimanshuS10/TechMasterMind-Website"
                    websiteLink="https://techmastermind.ca/"
                />
                <ProjectCard
                    src={Images.src}
                    title="E-commerce Platform"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    githubLink="https://github.com/HimanshuS10/TechMasterMind-Website"
                    websiteLink="https://techmastermind.ca/"
                />
            </div>
        </div>
    )
};


