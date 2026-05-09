export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl md:text-8xl font-bold shadow-lg hover:scale-105 transition-transform duration-300">
          SV
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span style={{ color: 'var(--accent)' }}>Subodh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl" style={{ color: 'var(--text-secondary)' }}>
            Full Stack Software Developer
          </h2>
          <p className="text-lg md:text-xl max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Transforming ideas into immersive digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
