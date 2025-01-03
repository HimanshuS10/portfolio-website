import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import Image from "next/image";
import TechMasterMind from '@/assets/project/TechMasterMind.png';
import ElfMail from '@/assets/project/ElfMail.png';
import RMS from '@/assets/project/RMS.png';
// import VSCodeShortcuts from '@/assets/project/VSCodeShortcuts.png';

export const Project = () => {
    return (
        <div id='project' className="container py-5">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center mb-10">My Projects.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    src={TechMasterMind.src}
                    title="Tech MasterMind"
                    description="A website that shares inspiring stories of software engineers from around the world."
                    githubLink="https://github.com/HimanshuS10/TechMasterMind-Website"
                    websiteLink="https://techmastermind.ca/"
                    technologies={["React", "Tailwind CSS", "JSON"]}
                    longDescription="Tech MasterMind is a dynamic online platform designed to showcase inspiring stories and success journeys of software engineers and technopreneurs from around the world. Built with React.js for a highly interactive user experience, the platform leverages Tailwind CSS for responsive and modern styling. Data is efficiently managed and rendered using JSON, ensuring lightweight and seamless performance. The website is optimized for scalability and accessibility, catering to a diverse audience. It serves as a valuable resource for aspiring professionals seeking motivation and insights into the tech industry."
                    projectDemo=""
                />
                <ProjectCard
                    src={ElfMail.src}
                    title="ElfMail"
                    description="a Secret Santa name generator that randomly assigns gift recipients and sends the details via email."
                    githubLink="https://github.com/HimanshuS10/ElfMail"
                    websiteLink="https://elf-mail.netlify.app/"
                    technologies={["HTML", "Tailwind CSS", "JavaScript", "EmailJS"]}
                    longDescription="ElfMail is a delightful online Secret Santa name generator. It simplifies the process of organizing holiday gift exchanges by randomly assigning participants and notifying them via email, adding a touch of magic to your festive celebrations."
                    projectDemo=""
                />
                <ProjectCard
                    src={RMS.src}
                    title="Restaurant Management System"
                    description="A system for staff to handle orders, bookings, and bills easily."
                    githubLink="https://github.com/HimanshuS10/Restaurant-Management-System"
                    websiteLink="https://github.com/HimanshuS10/Restaurant-Management-System"
                    technologies={["Java", "Swing GUI"]}
                    longDescription="The Restaurant Management System is a Java-based application built using Java Swing for a graphical user interface (GUI) to streamline restaurant operations. The system provides a user-friendly interface for employees to manage tasks efficiently, including visualizing a real-time layout of tables to track availability and occupancy. Key features include placing food orders, assigning customer names to tables, and processing bill checkouts, all designed to enhance workflow efficiency. By leveraging the robust capabilities of Java and Swing, the application ensures reliability, responsiveness, and an intuitive experience, significantly improving staff productivity and the overall dining experience."
                    projectDemo=""
                />
            </div>
        </div>
    )
};

export default Project;

