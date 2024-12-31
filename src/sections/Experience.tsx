'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { StaticImageData } from 'next/image';
import { MutableRefObject } from 'react';
import GDSC from '@/assets/companies/GDSC.png'
import Algoma from '@/assets/companies/Algoma.png'
import GES from '@/assets/companies/GES.png'

const jobs = [
    {
        company: 'Google Developer Student Clubs',
        logo: GDSC,
        title: 'Digital Designer',
        period: 'October 2024 - Present',
        description: 'At GDSC (Google Developer Student Club), I created graphics for social media to promote events like HTML/CSS and React workshops. During these events, I also helped students troubleshoot issues like installing Git, debugging code, and explaining specific parts of their code.'
    },
    {
        company: 'Algoma Steel',
        logo: Algoma,
        title: 'IT and Business Process Improvement - Student',
        period: 'May 2024 - August 2024',
        description: 'At Algoma Steel, I moved all Aveva PI Process Book screens to the new PI Vision platform and developed easy-to-use dashboards that linked the most important and frequently used screens. I also ran a 1-hour training session to teach the team how to use the new system.'
    },
    {
        company: 'Guelph Entrepreneurship Society',
        logo: GES,
        title: 'Web Designer',
        period: 'January 2024 - September 2024',
        description: 'At GES, I was part of a small team responsible for building websites using WordPress and basic HTML/CSS to structure and design user-friendly web pages.'
    }
]


interface Job {
    company: string;
    logo: StaticImageData;
    title: string;
    period: string;
    description: string;
}

interface JobCardProps {
    job: Job;
    index: number;
    containerRef: MutableRefObject<HTMLDivElement | null>;
}

function JobCard({ job, index, containerRef }: JobCardProps) {
    const cardRef = useRef(null)
    const [isSticky, setIsSticky] = useState(false)

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    useEffect(() => {
        const container = containerRef.current
        const card = cardRef.current

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSticky(true)
                } else {
                    setIsSticky(false)
                }
            },
            { threshold: 1, root: container }
        )

        if (card) {
            observer.observe(card)
        }

        return () => {
            if (card) {
                observer.unobserve(card)
            }
        }
    }, [containerRef])

    return (
        <motion.div
            ref={cardRef}
            style={{ y: isSticky ? 0 : y }}
            className={`flex flex-col md:flex-row items-center border-[2px] border-[#2A0E61] bg-black rounded-lg shadow-lg overflow-hidden mb-8 ${isSticky ? 'sticky top-24 z-[-1]' : ''
                }`}
        >
            <div className="w-full md:w-1/3 bg-gray-100 flex justify-center items-center overflow-hidden">
                <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    layout="responsive"
                    width={300}
                    height={300}
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>
            <div className="w-full md:w-2/3 p-8">
                <h3 className="text-2xl font-semibold mb-2">{job.company}</h3>
                <p className="text-gray-500 mb-4">{job.title} | <span className='underline decoration-[#2A0E61]'>{job.period}</span></p>
                <p className="text-gray-400">{job.description}</p>
            </div>
        </motion.div>
    )
}

export default function Experience() {
    const containerRef = useRef(null)

    return (
        <div id='experience' className="container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center mb-5">My Experience</h1>
            <div ref={containerRef} className="space-y-16 relative">
                {jobs.map((job, index) => (
                    <JobCard key={job.company} job={job} index={index} containerRef={containerRef} />
                ))}
            </div>
        </div>
    )
}

