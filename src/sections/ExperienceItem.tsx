'use client'

import { motion } from "framer-motion"
import Image from "next/image"

interface ExperienceItemProps {
  title: string
  company: string
  logo: string
  period: string
  description: string
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  logo,
  period,
  description
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12 ml-4"
    >
      <div className="absolute w-5 h-5 bg-white rounded-full mt-1.5 -left-2.5 border border-white" />
      <div className="flex items-center mb-2">
        <div className="bg-gray-800 rounded-md p-2 mr-4">
          <Image src={logo} alt={`${company} logo`} width={40} height={40} className="rounded" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="mb-2 text-sm text-gray-400">{company} | {period}</div>
      <p className="mb-4 text-gray-300">{description}</p>
    </motion.li>
  )
}