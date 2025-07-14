'use client'
 import { useInView } from "react-intersection-observer";

export default function Contact(){
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust how much of the section should be visible before triggering
  });

    return(
        <section id="contact" className="relative h-screen w-full flex flex-col items-center text-center justify-center py-12 px-4 border-y-4">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            >
                <source src="/videos/smoke-bg.mp4" type="video/mp4" />
            </video>
            <div ref={ref} className={inView ? 'relative slide-top max-w-6xl mx-auto' : 'max-w-6xl mx-auto opacity-0'}>
                <h2 className="text-4xl  font-bold mb-12">Contact Me</h2>
                <p className="max-w-2xl text-xl md:text-2xl mb-12">If you would like to get in touch with me regarding your programming and development needs, click the button below to shoot me an email!</p>
                <a href="mailto:musicalmonsterstulsa@gmail.com" className="rounded-lg p-2 text-2xl border-2 hero-button">Email Me → </a>
            </div>
        </section>
    )
}