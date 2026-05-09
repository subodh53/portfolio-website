export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
        <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center hover:scale-105 transition-transform duration-300">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Background circle */}
            <circle cx="100" cy="100" r="90" fill="url(#gradient)" opacity="0.1" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--accent)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Desk */}
            <rect x="15" y="135" width="170" height="10" rx="2" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="2" />
            
            {/* Main monitor (center) */}
            <g className="animate-float">
              <rect x="60" y="50" width="80" height="55" rx="3" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="2" />
              <rect x="65" y="55" width="70" height="45" fill="var(--background)" />
              {/* Code lines */}
              <g className="animate-pulse">
                <rect x="70" y="62" width="40" height="3" rx="1" fill="var(--accent)" opacity="0.8">
                  <animate attributeName="width" values="40;55;40" dur="2s" repeatCount="indefinite" />
                </rect>
                <rect x="70" y="68" width="25" height="3" rx="1" fill="var(--text-secondary)" opacity="0.6" />
                <rect x="70" y="74" width="50" height="3" rx="1" fill="var(--text-secondary)" opacity="0.6" />
                <rect x="70" y="80" width="35" height="3" rx="1" fill="var(--accent)" opacity="0.8">
                  <animate attributeName="width" values="35;50;35" dur="2.5s" repeatCount="indefinite" />
                </rect>
              </g>
              {/* Stand */}
              <rect x="95" y="105" width="10" height="15" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="2" />
              <rect x="85" y="120" width="30" height="5" rx="2" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="2" />
            </g>
            
            {/* Secondary monitor (left) */}
            <g className="animate-float" style={{ animationDelay: '0.3s' }}>
              <rect x="20" y="60" width="40" height="30" rx="2" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="1.5" />
              <rect x="23" y="63" width="34" height="24" fill="var(--background)" />
              <rect x="26" y="68" width="20" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="26" y="73" width="15" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="26" y="78" width="18" height="2" rx="1" fill="var(--accent)" opacity="0.6" />
            </g>
            
            {/* Tertiary monitor (right) */}
            <g className="animate-float" style={{ animationDelay: '0.6s' }}>
              <rect x="140" y="60" width="40" height="30" rx="2" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="1.5" />
              <rect x="143" y="63" width="34" height="24" fill="var(--background)" />
              <rect x="146" y="68" width="18" height="2" rx="1" fill="var(--accent)" opacity="0.6">
                <animate attributeName="width" values="18;25;18" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="146" y="73" width="12" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="146" y="78" width="15" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
            </g>
            
            {/* Keyboard */}
            <g className="animate-float" style={{ animationDelay: '0.2s' }}>
              <rect x="70" y="125" width="60" height="10" rx="2" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="1.5" />
              <rect x="73" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="80" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="87" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="94" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="101" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="108" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="115" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
              <rect x="122" y="127" width="5" height="2" rx="1" fill="var(--text-secondary)" opacity="0.6" />
            </g>
            
            {/* Floating code symbols */}
            <g>
              <text x="10" y="35" fontSize="16" fill="var(--accent)" opacity="0.6" className="animate-float">
                &lt;/&gt;
              </text>
              <text x="170" y="45" fontSize="12" fill="var(--accent)" opacity="0.5" className="animate-float" style={{ animationDelay: '1s' }}>
                { }
              </text>
              <text x="15" y="175" fontSize="14" fill="var(--accent)" opacity="0.5" className="animate-float" style={{ animationDelay: '0.5s' }}>
                ;
              </text>
              <text x="170" y="180" fontSize="12" fill="var(--accent)" opacity="0.6" className="animate-float" style={{ animationDelay: '1.5s' }}>
                ()
              </text>
            </g>
          </svg>
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
