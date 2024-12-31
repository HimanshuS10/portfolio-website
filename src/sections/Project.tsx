import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import Image from "next/image";
import TechMasterMind from '@/assets/project/TechMasterMind.png';
import ElfMail from '@/assets/project/ElfMail.png';
// import VSCodeShortcuts from '@/assets/project/VSCodeShortcuts.png';

export const Project = () => {
    return (
        <div id='project' className="container py-5">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center mb-10">My Projects.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    src={TechMasterMind.src}
                    title="Tech MasterMind"
                    description="An online platform showcasing success stories of software engineers worldwide."
                    githubLink="https://github.com/HimanshuS10/TechMasterMind-Website"
                    websiteLink="https://techmastermind.ca/"
                    technologies={["React", "Tailwind CSS", "JSON"]}
                    longDescription="Tech MasterMind is an inspiring website that collects and presents success stories from software engineers around the globe. It aims to motivate and guide aspiring developers by sharing real-world experiences and career journeys."
                    projectDemo="@/assets/project/TechMasterMindDemo.mp4"
                />
                <ProjectCard
                    src={ElfMail.src}
                    title="ElfMail"
                    description="A fun and interactive Secret Santa name generator for holiday gift exchanges."
                    githubLink="https://github.com/HimanshuS10/ElfMail"
                    websiteLink="https://elfmail.vercel.app/"
                    technologies={["HTML", "Tailwind CSS", "JavaScript", "EmailJS"]}
                    longDescription="ElfMail is a delightful online Secret Santa name generator. It simplifies the process of organizing holiday gift exchanges by randomly assigning participants and notifying them via email, adding a touch of magic to your festive celebrations."
                    projectDemo="/assets/project/ElfMailDemo.mp4"
                />
                <ProjectCard
                    src={ElfMail.src}
                    title="VSCode Shortcuts Website"
                    description="A comprehensive guide to Visual Studio Code keyboard shortcuts for enhanced productivity."
                    githubLink="https://github.com/HimanshuS10/VSCodeShortcuts"
                    websiteLink="https://vscode-shortcuts.vercel.app/"
                    technologies={["React", "Tailwind CSS", "Next.js"]}
                    longDescription="The VSCode Shortcuts Website is an invaluable resource for developers looking to boost their productivity in Visual Studio Code. It offers a user-friendly interface to explore and learn essential keyboard shortcuts, helping users navigate and code more efficiently."
                    projectDemo="/assets/project/VSCodeShortcutsDemo.mp4"
                />
            </div>
        </div>
    )
};

export default Project;

