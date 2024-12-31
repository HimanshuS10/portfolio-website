import Image from 'next/image'
import Himanshu from '@/assets/Himanshu.png'

export default function AboutPage() {
    return (
        <div id='about' className='container mx-auto'>
            <div className="min-h-screen -mt-20 flex items-center justify-center">
                <div className="max-w-6xl w-full p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-left mb-5">About Us</h1>
                            <p className="text-white/70">
                                Hi, I'm Himanshu Seervi, I'm second-year Software Engineering student at the University of Guelph. With almost a year of experience in web design and development at <a href="https://guelphentrepreneurshipsociety.com/" className='underline decoration-blue-500 hover:underline hover:decoration-blue-800 duration-150'> Guelph Entrepreneurship Society</a>, and an additional four months focused on developing <a href="https://www.aveva.com/en/products/aveva-pi-vision/" className='underline decoration-blue-500 hover:underline hover:decoration-blue-800 duration-150'>PI Vision</a> Data Interface Web Application at <a href="https://algoma.com/" className='underline decoration-blue-500 hover:underline hover:decoration-blue-800 duration-150'>Algoma Steel</a>, I’ve honed my skills in crafting innovative and efficient digital solutions.
                            </p>
                            <p className="text-white/70 mt-4">
                                Beyond academics and work, I am an entrepreneur and the founder of <a href="https://techmastermind.ca/" className='underline decoration-blue-500 hover:underline hover:decoration-blue-800 duration-150'> Tech MasterMind</a>, an online blogging platform. Tech MasterMind is dedicated to showcasing the success stories and inspiring journeys of accomplished software engineers. By sharing their challenges, lessons, and triumphs, the platform aims to motivate and guide aspiring engineers to reach their full potential.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src={Himanshu.src}
                                alt="About Us"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

