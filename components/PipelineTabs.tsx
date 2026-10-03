"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Step = { kicker: string; title: string; desc: string };

const INTERVAL_MS = 7000;

/**
 * Attio-style step list: the active step expands and shows a progress line,
 * the panel on the right swaps to the matching product view. Auto-advances
 * until the user picks a step, and never when reduced motion is requested.
 */
export default function PipelineTabs({ steps, panels }: { steps: Step[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = auto && inView && !paused;

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % steps.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [running, active, steps.length]);

  return (
    <div
      ref={rootRef}
      className={`steps${running ? " steps-running" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="steps-list" role="tablist" aria-orientation="vertical">
        {steps.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            id={`step-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`step-panel-${i}`}
            className={`step${i === active ? " active" : ""}`}
            onClick={() => {
              setActive(i);
              setAuto(false);
            }}
          >
            <span className="step-bar" aria-hidden="true">
              <i key={`${active}-${running}`} style={{ animationDuration: `${INTERVAL_MS}ms` }} />
            </span>
            <span className="step-kicker">{s.kicker}</span>
            <span className="step-title">{s.title}</span>
            <span className="step-desc">
              <span>{s.desc}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="steps-stage">
        {panels.map((panel, i) => (
          <div
            key={i}
            role="tabpanel"
            id={`step-panel-${i}`}
            aria-labelledby={`step-tab-${i}`}
            hidden={i !== active}
            className="steps-panel"
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
