import { useRef } from 'react'
import type { ReactNode, PointerEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/** Pulls its child slightly toward the pointer. Disabled for reduced motion and touch. */
export function Magnetic({ children }: { children: ReactNode }) {
  const off = useReducedMotion(); const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 }); const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 })
  const move = (e: PointerEvent<HTMLDivElement>) => { if (off || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.35) }
  return <motion.div style={{ x, y }} onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0) }} className="inline-block">{children}</motion.div>
}

/** Subtle perspective tilt that follows the pointer (mouse only). */
export function Tilt({ children }: { children: ReactNode }) {
  const off = useReducedMotion(); const ref = useRef<HTMLDivElement>(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 }); const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const move = (e: PointerEvent<HTMLDivElement>) => { if (off || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect(); ry.set(((e.clientX - r.left) / r.width - 0.5) * 5); rx.set(-((e.clientY - r.top) / r.height - 0.5) * 5) }
  return <motion.div ref={ref} style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }} onPointerMove={move} onPointerLeave={() => { rx.set(0); ry.set(0) }}>{children}</motion.div>
}
