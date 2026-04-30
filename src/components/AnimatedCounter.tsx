import { useEffect, useRef, useState } from "react";

type Props = {
  value: string; // e.g. "50+", "300%", "10+"
  duration?: number;
  className?: string;
};

function parse(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^\d-]*)(-?\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return {
    prefix: match[1] ?? "",
    num: parseFloat((match[2] ?? "0").replace(",", ".")),
    suffix: match[3] ?? "",
  };
}

export function AnimatedCounter({ value, duration = 1600, className }: Props) {
  const { num, prefix, suffix } = parse(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(num * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(num);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [num, duration]);

  const isInt = Number.isInteger(num);
  const shown = isInt ? Math.round(display).toString() : display.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
