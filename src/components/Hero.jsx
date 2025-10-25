import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const gold = '#C8A27E'

function useParallaxTilt(intensity = 20) {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const x = useSpring(rotateX, { stiffness: 120, damping: 15 })
  const y = useSpring(rotateY, { stiffness: 120, damping: 15 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      rotateY.set((px - 0.5) * intensity)
      rotateX.set((0.5 - py) * intensity)
    }
    const onLeave = () => {
      rotateX.set(0)
      rotateY.set(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [rotateX, rotateY, intensity])

  return { ref, x, y }
}

const FloatingBlob = ({ className, delay = 0, color = gold }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -8, 0], opacity: 1 }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
    className={`pointer-events-none absolute blur-md ${className}`}
    style={{ background: `radial-gradient(closest-side, ${color}, transparent 70%)` }}
  />
)

export default function Hero() {
  const { ref, x, y } = useParallaxTilt(18)
  const bgX = useTransform(x, [ -18, 18 ], [ -10, 10 ])
  const bgY = useTransform(y, [ -18, 18 ], [ -10, 10 ])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden" aria-label="Furniture24 Hero">
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 opacity-90"
      >
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(1200px 600px at 20% 10%, rgba(200,162,126,0.18), transparent), radial-gradient(900px 500px at 80% 80%, rgba(233,220,201,0.14), transparent), linear-gradient(180deg, #121212 0%, #1A1A1A 60%, #0f0f0f 100%)'
        }} />
      </motion.div>

      <FloatingBlob className="w-64 h-64 top-10 left-10" />
      <FloatingBlob className="w-80 h-80 bottom-20 right-24" color="#E9DCC9" delay={1} />
      <FloatingBlob className="w-52 h-52 top-1/3 right-1/3" color="#F9F6F2" delay={2} />

      <div ref={ref} className="relative h-full w-full flex items-center justify-center">
        <motion.div
          style={{ rotateX: y, rotateY: x }}
          className="[perspective:1000px] w-full"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
                  style={{ fontFamily: 'Manrope, Inter, system-ui' }}
                >
                  Furniture24
                  <span className="block text-2xl md:text-3xl mt-4 text-[#E9DCC9] font-light">Where Luxury Meets Comfort</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                  className="mt-6 text-[#F9F6F2]/80 max-w-xl"
                >
                  Step into a cinematic showroom. Explore modern pieces in immersive motion with precision lighting and depth.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-8 flex gap-4"
                >
                  <a href="#shop" className="group inline-flex items-center gap-2 rounded-full bg-[#C8A27E] text-[#1A1A1A] px-6 py-3 font-medium shadow-[0_10px_30px_rgba(200,162,126,0.35)] hover:shadow-[0_20px_60px_rgba(200,162,126,0.45)] transition-shadow">
                    Shop Now
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#virtual" className="inline-flex items-center gap-2 rounded-full backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border border-white/10 px-6 py-3 font-medium text-[#F9F6F2] hover:bg-white/10">
                    Enter Virtual Room
                  </a>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#E9DCC9]/10 to-white/5 border border-white/10 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0" style={{ perspective: '1200px' }}>
                    <motion.div
                      className="absolute inset-8 rounded-2xl bg-gradient-to-br from-[#F9F6F2]/10 to-[#E9DCC9]/10 border border-white/10"
                      style={{ rotateX: y, rotateY: x, transformStyle: 'preserve-3d' }}
                    >
                      <div className="absolute -right-6 -top-6 w-40 h-40 rounded-2xl bg-[#C8A27E]/20 blur-xl" />
                      <div className="absolute -left-6 -bottom-6 w-56 h-56 rounded-full bg-[#E9DCC9]/10 blur-2xl" />
                      <motion.div
                        className="absolute left-8 top-10 w-24 h-24 rounded-xl bg-white/10 border border-white/10 shadow-2xl"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transform: 'translateZ(60px)' }}
                      />
                      <motion.div
                        className="absolute right-10 bottom-10 w-36 h-36 rounded-2xl bg-white/10 border border-white/10 shadow-2xl"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transform: 'translateZ(100px)' }}
                      />
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-24 rounded-[18px] bg-gradient-to-b from-[#C8A27E] to-[#A88866] shadow-[0_25px_80px_rgba(200,162,126,0.45)]"
                        animate={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transform: 'translateZ(140px)' }}
                      />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-white/60">Live 3D depth preview</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
