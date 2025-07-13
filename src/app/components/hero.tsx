export default function Hero() {
    return(
        <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 border-y-4">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
            >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="relative">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 neon-glow">Ethan Cantrell</h1>
                <p className="text-xl md:text-2xl text-green-300 mb-6">Web Developer</p>
                <p className="max-w-xl mb-8">I help musicians and makers bring their ideas to life with custom code, crisp mixes, and eye-catching design.</p>
                <div className="flex gap-4 justify-center">
                    <a href="#projects" className="px-6 py-3 rounded-x1 font-semibold border-2 hero-button">View My Work</a>
                    <a href="#contact" className="px-6 py-3 rounded-x1 font-semibold border-2 hero-button">Contact Me</a>
                </div>
            </div>
        </section>
    )
}