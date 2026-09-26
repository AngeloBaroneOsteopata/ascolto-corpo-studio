import { useState, type PointerEvent, type KeyboardEvent } from 'react';

const pain = { x: 30, y: 58 };
const origin = { x: 70, y: 34 };

export function OriginDiagram() {
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [discovered, setDiscovered] = useState(false);

  function updatePointer(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
    setPointer({ x, y });
    // Measure proximity in pixels so the discovery area feels the same on small screens.
    if (Math.hypot((x - origin.x) * rect.width / 100, (y - origin.y) * rect.height / 100) < 90) {
      setDiscovered(true);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setDiscovered(true);
      setPointer(origin);
    }
    if (event.key === 'Escape') setPointer(null);
  }

  return <div
    className="origin-diagram mt-9"
    role="button"
    tabIndex={0}
    aria-label="Esplora il legame tra dove senti dolore e da dove può partire il problema. Muovi il puntatore o trascina il dito; premi Invio per rivelarlo."
    onPointerMove={updatePointer}
    onPointerDown={event => { event.currentTarget.setPointerCapture(event.pointerId); updatePointer(event); }}
    onPointerUp={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
    onPointerLeave={() => setPointer(null)}
    onBlur={() => setPointer(null)}
    onKeyDown={handleKeyDown}
  >
    <svg className="origin-trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {pointer && <line x1={pain.x} y1={pain.y} x2={pointer.x} y2={pointer.y} vectorEffect="non-scaling-stroke" />}
    </svg>
    <span className="origin-dot a" aria-hidden="true" />
    <span className="origin-label a">Dove senti il dolore</span>
    {pointer && <span className="origin-cursor" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} aria-hidden="true" />}
    {discovered && <><span className="origin-dot b" aria-hidden="true" /><span className="origin-label b">Da dove può partire il problema</span></>}
    <span className="origin-invitation">Muovi il cursore o trascina il dito</span>
  </div>;
}