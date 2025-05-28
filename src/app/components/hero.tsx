export default function Hero() {
    return (
    <section id="home" className="h-screen w-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Ethan Cantrell</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">Web Developer • Audio Engineer • Creative Collaborator</p>
        <p className="max-w-xl text-gray-400 mb-8">I help musicians and makers bring their ideas to life with custom code, crisp mixes, and eye-catching design.</p>
        <div className="flex gap-4">
        <a href="#projects" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">View My Work</a>
        <a href="#contact" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">Contact Me</a>
        </div>
    </section>
    )
}