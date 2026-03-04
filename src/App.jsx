import { useState, useEffect, useRef } from 'react'

function useOnScreen(ref, threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [ref, threshold])
  return isVisible
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Pro Casino Tour" className="w-10 h-10 object-contain" />
          <span className="text-lg font-bold tracking-wide gold-text">PRO CASINO TOUR</span>
        </a>
        <div className="hidden sm:flex items-center gap-8">
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#signup" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.4 + 0.1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
      <Particles />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img
          src="/logo.png"
          alt="Pro Casino Tour Logo"
          className="w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-8 drop-shadow-[0_8px_30px_rgba(201,168,76,0.3)]"
        />
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 animate-fade-in">
          <span className="gold-text">PRO CASINO</span>{' '}
          <span className="text-white">TOUR</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Finding the Best Online Casino Players
        </p>
        <a
          href="#signup"
          className="inline-block px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-semibold rounded-full
                     hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 hover:scale-105
                     animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          Get Notified
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}

const cards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    title: 'Bar Tournaments',
    desc: 'Poker nights and blackjack showdowns at the best bars in town.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Venue Events',
    desc: 'Premium casino experiences at top venues and private events.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: 'Street Interviews',
    desc: 'Real conversations and challenges on the streets — unscripted and unfiltered.',
  },
]

function About() {
  const ref = useRef()
  const visible = useOnScreen(ref)

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">What We Do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We bring professional casino gaming outside the casino. From bar takeovers to street-level content,
            Pro Casino Tour is where entertainment meets the hustle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card rounded-2xl p-8 text-center hover:bg-white/[0.08] transition-all duration-500
                         hover:shadow-[0_0_40px_rgba(201,168,76,0.1)] hover:-translate-y-1
                         ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-500/10 text-gold-400 mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Signup() {
  const ref = useRef()
  const visible = useOnScreen(ref)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      window.location.href = `mailto:info@procasinoleague.com?subject=Pro Casino Tour - Signup&body=Please add me to the mailing list: ${email}`
      setSubmitted(true)
    }
  }

  return (
    <section id="signup" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
      <div className={`relative max-w-xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gold-text">Be The First To Know</span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Drop your email and we'll hit you up when events drop in your city.
        </p>

        {submitted ? (
          <div className="glass-card rounded-2xl p-8 gold-glow">
            <p className="text-gold-400 text-lg font-semibold">You're on the list!</p>
            <p className="text-gray-400 mt-2 text-sm">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500
                         focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-semibold rounded-full
                         hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Pro Casino Tour" className="w-8 h-8 object-contain" />
          <span className="text-sm font-semibold gold-text">PRO CASINO TOUR</span>
        </div>

        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors" aria-label="TikTok">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-3.58-1.59V6.69h3.58z"/>
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Pro Casino Tour. All rights reserved.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 px-6 pb-2 text-center">
        <p className="text-gold-500 text-xs font-semibold mb-2">21+ ONLY</p>
        <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
          <span className="font-semibold text-gray-400">Responsible Gaming:</span> Pro Casino Tour promotes responsible gaming.
          This site and its events are intended for individuals 21 years of age or older. If you or someone you know has a
          gambling problem, please call the National Problem Gambling Helpline at <a href="tel:1-800-522-4700" className="text-gold-500 hover:text-gold-400 transition-colors">1-800-522-4700</a> (call or text, available 24/7).
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Signup />
      <Footer />
    </div>
  )
}
