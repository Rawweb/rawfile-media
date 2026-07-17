'use client';
import { useEffect, useRef, useState } from 'react';

export default function ApertureCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [world, setWorld] = useState('dev'); // "photo" | "dev"

  useEffect(() => {
    const panels = document.querySelectorAll('[data-aperture]');
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      setWorld(el.dataset.world === 'photo' ? 'photo' : 'dev');
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    panels.forEach((p) => {
      p.addEventListener('mouseenter', enter);
      p.addEventListener('mouseleave', leave);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      panels.forEach((p) => {
        p.removeEventListener('mouseenter', enter);
        p.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  const ring =
    world === 'photo'
      ? 'border-ink/60 bg-ink/10'
      : 'border-white/50 bg-white/10';

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed left-0 top-0 z-50 hidden md:flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition-opacity duration-200 ${ring} ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <span
        className={`h-3.5 w-3.5 rounded-full border ${
          world === 'photo' ? 'border-ink/70' : 'border-white/70'
        }`}
      />
    </div>
  );
}
