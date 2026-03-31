import { useState, useEffect } from 'react'

function App() {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle ambient glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)',
          transform: hovered ? 'scale(1.2)' : 'scale(1)',
        }}
      />

      {/* Main content */}
      <main className="relative z-10 text-center px-6">
        <h1
          className={`font-light tracking-[-0.04em] text-[clamp(3rem,15vw,12rem)] leading-[0.85] text-white transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Hello
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ff6b35 0%, #f7c59f 50%, #ff6b35 100%)',
              backgroundSize: '200% 200%',
              animation: 'shimmer 3s ease-in-out infinite',
            }}
          >
            World
          </span>
        </h1>

        <p
          className={`mt-8 md:mt-12 text-[#666] text-sm md:text-base tracking-[0.2em] uppercase transition-all duration-1000 delay-300 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Simple as f*ck
        </p>

        {/* Decorative line */}
        <div
          className={`mt-8 mx-auto h-px bg-gradient-to-r from-transparent via-[#ff6b35]/40 to-transparent transition-all duration-1000 delay-500 ease-out ${
            mounted ? 'opacity-100 w-32 md:w-48' : 'opacity-0 w-0'
          }`}
        />
      </main>

      {/* Footer */}
      <footer
        className={`absolute bottom-6 md:bottom-8 left-0 right-0 text-center transition-all duration-1000 delay-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p
          className="text-[#444] text-[10px] md:text-xs tracking-[0.15em]"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Requested by <span className="text-[#666]">@web-user</span> · Built by <span className="text-[#666]">@clonkbot</span>
        </p>
      </footer>

      {/* CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}

export default App
