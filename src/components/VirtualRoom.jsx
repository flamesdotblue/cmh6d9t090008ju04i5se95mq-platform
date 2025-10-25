import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail } from 'lucide-react'

const gold = '#C8A27E'

const DraggableFurniture = ({ className, style, label }) => (
  <motion.div
    drag
    dragElastic={0.08}
    dragMomentum={false}
    className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
    style={style}
  >
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-white/70">{label}</div>
  </motion.div>
)

export default function VirtualRoom() {
  const roomRef = useRef(null)

  const handleAR = () => {
    alert('AR Preview: This demo triggers an AR/360° mode. In production, integrate WebXR or <model-viewer> with USDZ/GLB assets for Furniture24.')
  }

  return (
    <section id="virtual" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Virtual Room Preview</h2>
            <p className="mt-3 text-white/70 max-w-xl">Drag and place furniture in a 3D-inspired room. Experiment with layout before you buy. Launch AR to preview at home.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={handleAR} className="rounded-xl bg-[#C8A27E] text-[#1A1A1A] px-5 py-3 font-medium shadow-[0_10px_30px_rgba(200,162,126,0.35)] hover:brightness-105">Open AR / 360°</button>
              <a href="#contact" className="rounded-xl border border-white/15 px-5 py-3 bg-white/5 hover:bg-white/10">Book Design Consultation</a>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04]">
                <div className="text-sm text-white/70">Materials</div>
                <div className="font-medium">Walnut • Brass • Linen</div>
              </div>
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04]">
                <div className="text-sm text-white/70">Lighting</div>
                <div className="font-medium">Global • Spot • Ambient</div>
              </div>
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04]">
                <div className="text-sm text-white/70">Shadows</div>
                <div className="font-medium">Soft • High depth</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              ref={roomRef}
              className="relative h-[480px] w-full rounded-3xl border border-white/10 overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(233,220,201,0.07),transparent_60%),linear-gradient(180deg,#121212,#1A1A1A)]"
            >
              <div className="absolute inset-0" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)' }} />
              <div className="absolute inset-0" style={{ boxShadow: 'inset 0 -120px 200px rgba(0,0,0,0.6)' }} />

              <DraggableFurniture label="Sofa" className="w-56 h-24 rounded-2xl" style={{ left: 60, bottom: 60, position: 'absolute', background: `linear-gradient(160deg, ${gold}, #A88866)` }} />
              <DraggableFurniture label="Lamp" className="w-6 h-24 rounded-full" style={{ left: 340, bottom: 90, position: 'absolute', background: 'linear-gradient(180deg,#E9DCC9,#C8A27E)' }} />
              <DraggableFurniture label="Chair" className="w-28 h-24 rounded-2xl" style={{ left: 260, bottom: 60, position: 'absolute', background: 'linear-gradient(160deg,#d7c1a5,#b09372)' }} />
              <DraggableFurniture label="Table" className="w-36 h-16 rounded-xl" style={{ left: 180, bottom: 40, position: 'absolute', background: 'linear-gradient(180deg,#F9F6F2,#E9DCC9)' }} />

              <motion.div
                className="absolute right-6 top-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2 text-xs text-white/80"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Drag items to arrange your space
              </motion.div>
            </div>

            <div id="contact" className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04] flex items-center gap-3">
                <Phone className="text-[#C8A27E]" />
                <div>
                  <div className="text-sm text-white/70">Support</div>
                  <div className="font-medium">+91 90000 2424</div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04] flex items-center gap-3">
                <Mail className="text-[#C8A27E]" />
                <div>
                  <div className="text-sm text-white/70">Email</div>
                  <div className="font-medium">care@furniture24.in</div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.04] flex items-center gap-3">
                <MapPin className="text-[#C8A27E]" />
                <div>
                  <div className="text-sm text-white/70">Studio</div>
                  <div className="font-medium">Mumbai • Bengaluru</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
