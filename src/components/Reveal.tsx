
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 600,
  distance = 20,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initialStyles = useRef({
    opacity: 0,
    transform: getTransform(direction, distance),
  });

  function getTransform(dir: string, dist: number): string {
    switch (dir) {
      case "up":
        return `translateY(${dist}px)`;
      case "down":
        return `translateY(-${dist}px)`;
      case "left":
        return `translateX(${dist}px)`;
      case "right":
        return `translateX(-${dist}px)`;
      default:
        return "none";
    }
  }

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = "0";
    element.style.transform = initialStyles.current.transform;
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = "1";
            element.style.transform = "translate(0, 0)";
            if (once) observer.unobserve(element);
          } else if (!once) {
            element.style.opacity = "0";
            element.style.transform = initialStyles.current.transform;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, duration, direction, distance, once]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default Reveal;
