import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: WaterPreservation,
})

const WaterDropIcon = () => (
  <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C14 0 2 14.5 2 22C2 28.627 7.373 34 14 34C20.627 34 26 28.627 26 22C26 14.5 14 0 14 0Z" fill="url(#drop-grad)" />
    <path d="M14 8C14 8 7 17 7 22C7 25.866 10.134 29 14 29" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
    <defs>
      <linearGradient id="drop-grad" x1="14" y1="0" x2="14" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
  </svg>
)

const WaveIcon = () => (
  <svg viewBox="0 0 40 24" width="40" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12 Q10 4 20 12 Q30 20 40 12" stroke="#2dd4bf" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M0 18 Q10 10 20 18 Q30 26 40 18" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

const tips = [
  {
    icon: '💧',
    title: 'Fix Leaky Faucets',
    desc: 'A single dripping faucet wastes up to 3,000 gallons per year. A leaky toilet can waste 200 gallons per day.',
    saving: '3,000 gal/yr',
    color: 'var(--teal-bright)',
  },
  {
    icon: '🚿',
    title: 'Shorter Showers',
    desc: 'Each minute you cut from your shower saves roughly 2.5 gallons. Going from 10 minutes to 5 saves 9,000+ gallons yearly.',
    saving: '9,125 gal/yr',
    color: 'var(--sky-accent)',
  },
  {
    icon: '🌱',
    title: 'Smart Irrigation',
    desc: 'Water plants in the early morning or evening. Use drip irrigation and mulch to retain moisture and reduce evaporation.',
    saving: '50% less',
    color: 'var(--teal-glow)',
  },
  {
    icon: '🍽️',
    title: 'Full Loads Only',
    desc: 'Run dishwashers and washing machines only when full. Modern machines use 15–45 gallons per cycle.',
    saving: '15 gal/load',
    color: 'var(--teal-bright)',
  },
  {
    icon: '🌧️',
    title: 'Collect Rainwater',
    desc: 'A rain barrel can collect 1,300 gallons of water during peak summer months for garden use.',
    saving: '1,300 gal/mo',
    color: 'var(--sky-accent)',
  },
  {
    icon: '🪥',
    title: 'Turn Off the Tap',
    desc: 'Leaving water running while brushing teeth wastes 4 gallons per minute. Two minutes, twice daily = 2,920 gal/yr.',
    saving: '2,920 gal/yr',
    color: 'var(--teal-glow)',
  },
]

const facts = [
  {
    stat: '97.5%',
    label: 'of Earth\'s water is saltwater',
    detail: 'Only 2.5% is freshwater — and of that, most is locked in glaciers and ice caps.',
  },
  {
    stat: '0.3%',
    label: 'of all water is accessible to humans',
    detail: 'Surface water in rivers, lakes, and swamps is what we can actually use.',
  },
  {
    stat: '2B+',
    label: 'people lack access to safe water',
    detail: 'Over 2 billion people globally live without safe drinking water in their homes.',
  },
]

const impacts = [
  { label: 'Agriculture', pct: 70, desc: 'of global freshwater withdrawal' },
  { label: 'Industry', pct: 19, desc: 'of global freshwater withdrawal' },
  { label: 'Domestic Use', pct: 11, desc: 'of global freshwater withdrawal' },
]

function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="stat-number text-7xl md:text-8xl lg:text-9xl mb-3">{value}</div>
      <p className="text-sm md:text-base font-light tracking-wide" style={{ color: 'var(--text-muted)' }}>{label}</p>
    </div>
  )
}

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  )
}

export default function WaterPreservation() {
  const [activeTab, setActiveTab] = useState<'home' | 'tips' | 'facts'>('home')

  return (
    <div className="water-bg min-h-screen">
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: 'rgba(5, 15, 26, 0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(45,212,191,0.1)' }}
      >
        <div className="flex items-center gap-3">
          <WaterDropIcon />
          <span className="font-display text-lg font-semibold tracking-wide" style={{ color: 'var(--teal-glow)' }}>
            AquaFuture
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {(['home', 'tips', 'facts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="section-label cursor-pointer transition-colors"
              style={{ color: activeTab === tab ? 'var(--teal-bright)' : 'var(--text-muted)', background: 'none', border: 'none' }}
            >
              {tab}
            </button>
          ))}
        </div>
        <a
          href="#tips"
          onClick={() => setActiveTab('tips')}
          className="hidden md:block text-xs font-medium px-5 py-2 rounded-full transition-all"
          style={{
            background: 'rgba(45,212,191,0.12)',
            border: '1px solid rgba(45,212,191,0.3)',
            color: 'var(--teal-bright)',
          }}
        >
          Take Action
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Ambient orbs */}
        <div
          className="hero-orb animate-shimmer"
          style={{
            width: '600px', height: '600px',
            top: '-200px', right: '-150px',
            background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="hero-orb animate-shimmer"
          style={{
            width: '400px', height: '400px',
            bottom: '0px', left: '-100px',
            background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)',
            animationDelay: '1.5s',
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <div className="section-label animate-fade-up mb-6">
                <WaveIcon />
                <span className="ml-3">School Project — Water Sciences 2026</span>
              </div>

              <h1 className="font-display animate-fade-up-delay-1 font-light leading-none tracking-tight mb-8"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: 'var(--cream)' }}>
                Every<br />
                <em className="teal-glow-text font-normal">Drop</em><br />
                Counts.
              </h1>

              <p className="animate-fade-up-delay-2 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
                style={{ color: 'var(--text-muted)' }}>
                Water is Earth's most vital resource — yet billions go without. Understanding the crisis is the first step toward change.
              </p>

              <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
                <a
                  href="#crisis"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all"
                  style={{
                    background: 'linear-gradient(135deg, var(--teal-bright) 0%, var(--sky-accent) 100%)',
                    color: '#050f1a',
                  }}
                >
                  Explore the Crisis
                </a>
                <a
                  href="#tips"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(45,212,191,0.35)',
                    color: 'var(--teal-bright)',
                  }}
                >
                  Conservation Tips
                </a>
              </div>
            </div>

            {/* Hero stat card */}
            <div
              className="animate-fade-up-delay-4 animate-float hidden lg:block"
              style={{
                background: 'rgba(13,43,66,0.7)',
                border: '1px solid rgba(45,212,191,0.2)',
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(12px)',
                minWidth: '260px',
              }}
            >
              <div className="stat-number text-7xl mb-2">71%</div>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--teal-glow)' }}>of Earth's surface</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                is covered in water — yet less than 1% is drinkable freshwater accessible to humans.
              </p>
              <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(45,212,191,0.15)' }}>
                <div className="progress-bar mb-2">
                  <div className="progress-fill" style={{ width: '71%' }} />
                </div>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Surface water coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 divider-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '80px' }}>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="rgba(8,28,46,0.8)" />
          </svg>
        </div>
      </section>

      {/* ── CRISIS STATS ── */}
      <section id="crisis" className="py-24 px-6 md:px-16" style={{ background: 'rgba(8,28,46,0.8)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-6 flex items-center gap-3">
            <WaveIcon /> The Global Water Crisis
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl mb-16 max-w-2xl" style={{ color: 'var(--cream)' }}>
            The numbers are<br /><em style={{ color: 'var(--teal-bright)' }}>alarming</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {facts.map((f) => (
              <div key={f.stat} className="fact-card">
                <div className="stat-number text-5xl md:text-6xl mb-3">{f.stat}</div>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--teal-glow)' }}>{f.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.detail}</p>
              </div>
            ))}
          </div>

          {/* Water use breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display text-3xl font-light mb-8" style={{ color: 'var(--cream)' }}>
                Where Does Our<br /><em style={{ color: 'var(--sky-accent)' }}>Freshwater Go?</em>
              </h3>
              <div className="space-y-6">
                {impacts.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.label}</span>
                      <span className="font-display text-2xl font-light" style={{ color: 'var(--teal-bright)' }}>{item.pct}%</span>
                    </div>
                    <ProgressBar pct={item.pct} color={`linear-gradient(90deg, var(--teal-bright), var(--sky-accent))`} />
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(13,43,66,0.9) 0%, rgba(5,15,26,0.9) 100%)',
                border: '1px solid rgba(45,212,191,0.15)',
                borderRadius: '16px',
                padding: '2.5rem',
              }}
            >
              <div className="section-label mb-4">Did You Know?</div>
              <div className="space-y-5">
                {[
                  { q: 'It takes 1,800 gallons of water to produce one pound of beef.' },
                  { q: 'A 5-minute shower uses 10–25 gallons of water.' },
                  { q: 'By 2025, half of the world\'s population may face water scarcity.' },
                  { q: 'The average American uses 80–100 gallons of water per day.' },
                  { q: 'Globally, 80% of wastewater is discharged untreated into waterways.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div
                      className="shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center text-xs font-bold"
                      style={{ background: 'rgba(45,212,191,0.15)', color: 'var(--teal-bright)' }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ background: 'rgba(8,28,46,0.8)' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill="var(--ocean-mid)" />
        </svg>
      </div>

      {/* ── CONSERVATION TIPS ── */}
      <section id="tips" className="py-24 px-6 md:px-16" style={{ background: 'var(--ocean-mid)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-6 flex items-center gap-3">
            <WaveIcon /> Conservation Tips
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="font-display font-light text-4xl md:text-5xl" style={{ color: 'var(--cream)' }}>
              Small changes,<br /><em style={{ color: 'var(--teal-bright)' }}>massive impact</em>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
              If every American household reduced water usage by 10%, it would save 1 trillion gallons annually.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="tip-card rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: 'rgba(45,212,191,0.08)' }}
                  >
                    {tip.icon}
                  </div>
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(45,212,191,0.1)',
                      color: tip.color,
                      border: `1px solid ${tip.color}33`,
                    }}
                  >
                    Saves {tip.saving}
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{tip.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WATER CYCLE EXPLAINER ── */}
      <section className="py-24 px-6 md:px-16" style={{ background: 'var(--ocean-deep)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-6 flex items-center gap-3">
            <WaveIcon /> The Water Cycle
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl mb-16 max-w-2xl" style={{ color: 'var(--cream)' }}>
            How water moves<br /><em style={{ color: 'var(--sky-accent)' }}>through our world</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                phase: 'Evaporation',
                desc: 'The sun heats surface water in oceans, lakes, and rivers, turning liquid water into water vapor that rises into the atmosphere.',
              },
              {
                num: '02',
                phase: 'Condensation',
                desc: 'As water vapor rises and cools, it condenses around dust particles to form clouds and fog — billions of tiny water droplets.',
              },
              {
                num: '03',
                phase: 'Precipitation',
                desc: 'Water falls back to Earth as rain, snow, sleet, or hail. This is how freshwater is distributed across land and sea.',
              },
              {
                num: '04',
                phase: 'Collection',
                desc: 'Water collects in oceans, rivers, and lakes — or soaks into the ground to form underground aquifers. The cycle begins again.',
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'rgba(13,43,66,0.5)',
                  border: '1px solid rgba(45,212,191,0.1)',
                  borderRadius: '16px',
                  padding: '2rem',
                }}
              >
                <div className="font-display text-5xl font-light mb-4" style={{ color: 'rgba(45,212,191,0.25)' }}>
                  {step.num}
                </div>
                <h3 className="font-semibold mb-3 text-base" style={{ color: 'var(--teal-bright)' }}>{step.phase}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section id="facts" className="py-28 px-6 md:px-16 relative overflow-hidden">
        <div
          className="hero-orb"
          style={{
            width: '800px', height: '800px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8"
            style={{ background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.2)' }}>
            <WaterDropIcon />
          </div>
          <h2 className="font-display font-light text-4xl md:text-6xl mb-6 leading-tight" style={{ color: 'var(--cream)' }}>
            The future of water<br /><em style={{ color: 'var(--teal-bright)' }}>is in our hands</em>
          </h2>
          <p className="text-lg font-light leading-relaxed mb-12 mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '560px' }}>
            By making conscious choices every day — shorter showers, fixing leaks, thoughtful consumption — each of us can help protect the freshwater supply for generations to come.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              { title: 'At Home', actions: ['Fix dripping faucets', 'Install low-flow showerheads', 'Use water-efficient appliances', 'Collect rainwater for gardens'] },
              { title: 'At School', actions: ['Report water leaks to staff', 'Turn off taps after use', 'Start a water awareness club', 'Plant a drought-resistant garden'] },
              { title: 'In the Community', actions: ['Support water conservation laws', 'Participate in river cleanups', 'Spread awareness on social media', 'Donate to water.org or similar NGOs'] },
            ].map((col) => (
              <div
                key={col.title}
                style={{
                  background: 'rgba(13,43,66,0.6)',
                  border: '1px solid rgba(45,212,191,0.15)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                }}
              >
                <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--teal-bright)' }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.actions.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--teal-bright)', marginTop: '2px' }}>›</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-semibold"
            style={{
              background: 'linear-gradient(135deg, var(--teal-bright) 0%, var(--sky-accent) 100%)',
              color: '#050f1a',
              boxShadow: '0 0 40px rgba(45,212,191,0.3)',
            }}
          >
            <WaterDropIcon />
            Be the change — start today
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 md:px-16" style={{ background: '#030c15', borderTop: '1px solid rgba(45,212,191,0.08)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <WaterDropIcon />
            <span className="font-display text-base font-semibold" style={{ color: 'var(--teal-glow)' }}>AquaFuture</span>
          </div>
          <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            A school project on water preservation — Water Sciences, 2026
          </p>
          <p className="text-xs" style={{ color: 'rgba(127,179,200,0.4)' }}>
            Data sourced from USGS, WHO &amp; UN Water Reports
          </p>
        </div>
      </footer>
    </div>
  )
}
