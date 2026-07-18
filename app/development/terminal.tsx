'use client';
import { useEffect, useState } from 'react';

type Line = { text: string; kind: 'cmd' | 'ok' | 'end' };

const LINES: Line[] = [
  { text: '$ npx create-rawfile', kind: 'cmd' },
  { text: "✓ importing photographer's eye", kind: 'ok' },
  { text: '✓ compiling clean TypeScript', kind: 'ok' },
  { text: '✓ optimizing for real users', kind: 'ok' },
  { text: '→ ready. ideas ship here.', kind: 'end' },
];

const colorFor = (kind: Line['kind']) =>
  kind === 'cmd' ? 'text-amber' : kind === 'ok' ? 'text-dev' : '';

export default function Terminal() {
  const [progress, setProgress] = useState({ line: 0, chars: 0 });

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduced) {
      setProgress({ line: LINES.length, chars: 0 });
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let li = 0;
    let ci = 0;

    const step = () => {
      if (li >= LINES.length) {
        setProgress({ line: LINES.length, chars: 0 });
        return;
      }
      const line = LINES[li];
      if (ci <= line.text.length) {
        setProgress({ line: li, chars: ci });
        ci++;
        timer = setTimeout(step, line.kind === 'cmd' ? 55 : 18);
      } else {
        li++;
        ci = 0;
        timer = setTimeout(step, li === 1 ? 500 : 260);
      }
    };

    step();
    return () => clearTimeout(timer);
  }, []);

  const finished = progress.line >= LINES.length;

  return (
    <div className='rounded-[10px] border border-white/10 overflow-hidden shadow-2xl shadow-black/40'>
      <div className='flex items-center gap-1.5 px-3.5 py-2.5 bg-term-bar border-b border-white/10'>
        <i className='w-2.5 h-2.5 rounded-full bg-white/25' />
        <i className='w-2.5 h-2.5 rounded-full bg-white/25' />
        <i className='w-2.5 h-2.5 rounded-full bg-white/25' />
        <span className='ml-2 font-mono text-[11px] text-muted'>
          rawfile — zsh
        </span>
      </div>

      <pre className='bg-term px-4.5 py-5 font-mono text-[13px] leading-[2] min-h-[200px] whitespace-pre-wrap text-ice'>
        {LINES.map((l, i) => {
          if (!finished && i > progress.line) return null;
          const text =
            finished || i < progress.line
              ? l.text
              : l.text.slice(0, progress.chars);
          return (
            <span key={i} className={colorFor(l.kind)}>
              {text}
              {'\n'}
            </span>
          );
        })}
        <span className='caret' />
      </pre>
    </div>
  );
}
