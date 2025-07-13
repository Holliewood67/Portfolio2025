'use client'
 import { useInView } from "react-intersection-observer";

export default function Contact(){
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust how much of the section should be visible before triggering
  });

    return(
        <section id="contact" className="h-screen w-full flex flex-col items-center text-center justify-center py-12 px-4 border-y-4">
            <div ref={ref} className={inView ? 'slide-top max-w-6xl mx-auto' : 'max-w-6xl mx-auto opacity-0'}>
                <h2 className="text-4xl  font-bold mb-12">Contact Me</h2>
                <p className="max-w-2xl text-xl md:text-2xl mb-12">If you would like to get in touch with me regarding your programming and development needs, click the button below to shoot me an email!</p>
                <a href="mailto:musicalmonsterstulsa@gmail.com" className="bg-gray-400/25 rounded-lg p-2 hover:underline hover:bg-gray-400/50 text-2xl">Email Me → </a>
            </div>
        </section>
    )
}