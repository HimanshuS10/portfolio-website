import Image from 'next/image';
import resumeImage from '@/assets/resume.png'; // Adjust the path as needed
import resumePDF from '@/assets/resume.png'; // Adjust the path as needed

const Resume = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-white">My Resume</h2>
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-4 overflow-auto max-h-[800px]">
                        <Image
                            src={resumeImage}
                            alt="My Resume"
                            width={1000}
                            height={1414} // Assuming A4 aspect ratio, adjust as needed
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="p-4 text-center">
                    <a
                        href={resumePDF.src} // Path to your PDF file
                        download="My_Resume.pdf" // Suggested file name for download
                        className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
