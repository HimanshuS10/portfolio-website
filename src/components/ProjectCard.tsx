'use client'

import Image from "next/image";
import React, { useState } from "react";
import Website from "@/assets/website.png";
import Github from "@/assets/github.png";
import { Plus, Video, X } from 'lucide-react';
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  longDescription: string;
  githubLink: string;
  websiteLink: string;
  technologies?: string[];
  projectDemo: string;
}

const ProjectCard = ({ src, title, description, longDescription, githubLink, websiteLink, technologies, projectDemo }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4 flex flex-col justify-between flex-grow">
          <div>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4">
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                <img src={Website.src} alt="Website Link" className="h-7 w-7" />
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <img src={Github.src} alt="GitHub Link" className="h-7 w-7" />
              </a>
            </div>
            <button
              onClick={openModal}
              className="bg-[#2A0E61] rounded-full p-2 hover:bg-[#3A1F71] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2A0E61]"
              aria-label="Learn more about the project"
            >
              <Plus className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <motion.div
            className="bg-[#03001417] border border-[#2A0E61] rounded-lg p-6 max-w-2xl w-full mx-4 relative overflow-hidden shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/2">
                <video controls>
                  <source src={projectDemo}
                    width={1000}
                    height={1000}
                    className="w-full object-contain rounded-lg mb-3"
                    type="video/mp4" />
                </video>
                <div className="flex gap-2 mb-3">
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#2A0E61] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#3A1F71] transition-colors duration-200 text-center text-sm"
                  >
                    Visit Website
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-[#2A0E61] px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200 text-center text-sm"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-300 mb-3 text-sm max-h-24 overflow-y-auto">{longDescription}</p>
                <h3 className="text-lg font-semibold mb-2 text-white">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies && technologies.length > 0 ? (
                    technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-[#2A0E61] text-white rounded-full text-xs">
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-300 text-sm">No technologies specified</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

