import React from "react"
import ProjectCard from "@/components/ProjectCard"
import Image from "next/image"
import TechMasterMind from "@/assets/project/TechMasterMind.png"
import ElfMail from "@/assets/project/ElfMail.png"
import Pricetracker from "@/assets/project/image.png"
import { Github } from "lucide-react"

export const Project = () => {
  return (
    <div id="project" className="container py-5">
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
          src={Pricetracker.src}
          title="Product Tracker"
          description="Tracks a price of a product and sends an email to user when the price drop."
          githubLink="https://github.com/HimanshuS10/product-tracker"
          websiteLink="https://github.com/HimanshuS10/product-tracker"
          technologies={["Next.js", "Tailwind CSS", "Nodemailer", "MongoDB", "Git"]}
          longDescription="Product Tracker is a web application using Next.js, Tailwind CSS, Nodemailer, MongoDB, and Git. The app allows users to monitor product prices and receive real-time email notifications through Nodemailer whenever a price drops. To ensure efficient data management and reliability, I integrated MongoDB for storing and updating product data, resulting in streamlined performance and accurate tracking."
          projectDemo=""
        />
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/HimanshuS10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <Github className="mr-2 h-5 w-5" />
          <span className="font-semibold">View More Projects</span>
        </a>
      </div>
    </div>
  )
}

export default Project
