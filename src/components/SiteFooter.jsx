import React from 'react'

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-semibold">Furniture24</div>
            <div className="text-sm text-white/70">India’s most premium luxury furniture brand</div>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#virtual" className="hover:text-white">Virtual Room</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} Furniture24. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-20 h-40 pointer-events-none" style={{ background: 'radial-gradient(50%_100% at 50% 0%, rgba(200,162,126,0.18), transparent)' }} />
    </footer>
  )
}
