"use client";

export default function Hero() {
  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-gradient min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle noise / soft light — optional */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto -mt-8">
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-slate-900 uppercase leading-[1.05]">
          Ritika Shrestha
        </h1>

        <p className="mt-6 md:mt-8 text-xl md:text-3xl text-indigo-500 font-light">
          Software Engineer
          <span className="mx-3 text-indigo-300">|</span>
          Full Stack Developer
        </p>

        {/* Optional CTA — subtle, matches minimal look */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => go("#projects")}
            className="px-7 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition shadow-sm"
          >
            View Projects
          </button>
          <button
            onClick={() => go("#contact")}
            className="px-7 py-3 bg-white/70 backdrop-blur text-slate-800 text-sm font-medium rounded-full border border-slate-200 hover:bg-white transition"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-xs tracking-widest uppercase animate-bounce">
        Scroll
      </div>
    </section>
  );
}