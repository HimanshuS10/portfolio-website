'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { MutableRefObject } from 'react';
import GDSC from '@/assets/companies/GDSC.png'
import Algoma from '@/assets/companies/Algoma.png'
import GES from '@/assets/companies/GES.png'

const jobs = [
  {
    company: 'TechCorp',
    logo: GDSC,
    title: 'Senior Developer',
    period: '2020 - Present',
    description: 'Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.'
},
{
    company: 'InnoSoft',
    logo: Algoma,
    title: 'Full Stack Engineer',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client projects. Worked on both frontend and backend using Vue.js and Python.'
},
{
    company: 'StartUp Inc.',
    logo: GES,
    title: 'Junior Developer',
    period: '2016 - 2018',
    description: 'Assisted in the development of a mobile app using React Native. Learned and applied best practices in software development.'
  }
]

interface Job {
  company: string;
  logo: string;
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
      className={`flex flex-col md:flex-row items-center border-[2px] border-[#2A0E61] bg-black rounded-lg shadow-lg overflow-hidden mb-8 ${
        isSticky ? 'sticky top-24 z-[-1]' : ''
      }`}
    >
      <div className="w-full md:w-1/3 bg-gray-100 p-8 flex justify-center items-center">
        <Image
          src={job.logo}
          alt={`${job.company} logo`}
          width={80}
          height={80}
          className='cover rounded-lg'
        />
      </div>
      <div className="w-full md:w-2/3 p-8">
        <h3 className="text-2xl font-semibold mb-2">{job.company}</h3>
        <p className="text-gray-600 mb-4">{job.title} | {job.period}</p>
        <p className="text-gray-700">{job.description}</p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const containerRef = useRef(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center mb-5">My Experience</h1>
      <div ref={containerRef} className="space-y-16 relative">
        {jobs.map((job, index) => (
          <JobCard key={job.company} job={job} index={index} containerRef={containerRef} />
        ))}
      </div>
    </div>
  )
}

