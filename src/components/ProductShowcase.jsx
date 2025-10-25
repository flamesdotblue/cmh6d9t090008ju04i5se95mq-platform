import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const colors = {
  gold: '#C8A27E',
  charcoal: '#1A1A1A',
  cream: '#E9DCC9',
  soft: '#F9F6F2',
}

const productsSeed = [
  { id: 'sofa-luxe', name: 'Luxe Modular Sofa', color: 'Sand', category: 'Living', price: '₹1,49,000' },
  { id: 'chair-aero', name: 'Aero Lounge Chair', color: 'Mocha', category: 'Living', price: '₹69,000' },
  { id: 'desk-orbit', name: 'Orbit Work Desk', color: 'Walnut', category: 'Office', price: '₹99,000' },
  { id: 'lamp-halo', name: 'Halo Floor Lamp', color: 'Brass', category: 'Lighting', price: '₹29,000' },
  { id: 'table-aurum', name: 'Aurum Coffee Table', color: 'Oak', category: 'Living', price: '₹49,000' },
]

const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border transition-all text-sm ${active ? 'bg-white/10 text-white border-white/20' : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'}`}
  >
    {label}
  </button>
)

const ProductCard = ({ p }) => {
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="group relative min-w-[280px] max-w-[320px] rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.03] border border-white/10 p-4 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px 200px at 0% 0%, rgba(200,162,126,0.18), transparent 50%)' }} />
      <div className="aspect-square rounded-2xl relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#141414]">
        <motion.div
          drag
          dragElastic={0.06}
          dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
          whileTap={{ cursor: 'grabbing' }}
          className="absolute inset-8 rounded-xl bg-gradient-to-br from-[#C8A27E] to-[#A88866] shadow-[0_30px_80px_rgba(200,162,126,0.45)]"
        />
        <motion.div
          className="absolute right-6 top-6 w-10 h-10 rounded-full bg-white/10 border border-white/10"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{p.name}</h3>
          <div className="text-sm text-white/70">{p.price}</div>
        </div>
        <div className="mt-1 text-sm text-white/60">{p.category} • {p.color}</div>
        <div className="mt-3 flex items-center gap-1 text-[#C8A27E]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`size-4 ${i < 4 ? 'fill-current' : ''}`} />
          ))}
          <span className="ml-2 text-xs text-white/60">4.9 (182)</span>
        </div>
        <button className="mt-4 w-full rounded-xl bg-[#C8A27E] text-[#1A1A1A] py-2.5 font-medium shadow-[0_10px_30px_rgba(200,162,126,0.35)] hover:brightness-105">View in 360°</button>
      </div>
    </motion.div>
  )
}

export default function ProductShowcase() {
  const [filter, setFilter] = useState('All')
  const products = useMemo(() => {
    if (filter === 'All') return productsSeed
    return productsSeed.filter(p => p.category === filter)
  }, [filter])

  return (
    <section id="shop" className="relative py-24 md:py-28">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: 'linear-gradient(180deg, transparent, rgba(233,220,201,0.05) 20%, transparent)' }} />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Signature Collection</h2>
            <p className="mt-2 text-white/70 max-w-xl">3D interactive cards with subtle motion and realistic lighting accents. Drag inside a product to feel depth.</p>
          </div>
          <div className="flex gap-2">
            {['All','Living','Office','Lighting'].map((f) => (
              <FilterChip key={f} label={f} active={filter===f} onClick={() => setFilter(f)} />
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-6 pr-6 min-w-max">
            {products.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {['Real-time reflections','Motion blur transitions','AR-ready viewer'].map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i*0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 p-5 bg-white/[0.04] backdrop-blur-sm"
            >
              <div className="text-sm text-white/70">Feature</div>
              <div className="text-lg font-medium">{b}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
