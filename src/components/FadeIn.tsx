import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface Props {
  delay?: number;                 // Stagger between children (ms)
  transitionDuration?: number;   // Fade/transform duration (ms)
  wrapperTag?: React.ElementType; // Tag or component for wrapper
  childTag?: React.ElementType;   // Tag or component for each child
  className?: string;
  childClassName?: string;
  visible?: boolean;              // Show/hide children with animation
  distance?: number;              // TranslateY distance when hidden (px)
  easing?: string;                // CSS easing function
  onComplete?: () => void;        // Fires after final animation settles
}

export default function FadeIn({
  delay = 50,
  transitionDuration = 400,
  wrapperTag: WrapperTag = "div",
  childTag: ChildTag = "div",
  className,
  childClassName,
  visible = true,
  distance = 20,
  easing = "ease",
  onComplete,
  children,
}: PropsWithChildren<Props>) {
  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // If reduced motion, just show everything without animation
  const targetCount = prefersReducedMotion ? childrenArray.length : visible ? childrenArray.length : 0;

  const [maxIsVisible, setMaxIsVisible] = useState<number>(
    prefersReducedMotion ? childrenArray.length : 0
  );

  const stepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Step toward the target number of visible children
  useEffect(() => {
    if (prefersReducedMotion) return;

    // Clear any previous step timer
    if (stepTimer.current) {
      clearTimeout(stepTimer.current);
      stepTimer.current = null;
    }

    if (maxIsVisible === targetCount) {
      return;
    }

    const increment = targetCount > maxIsVisible ? 1 : -1;
    stepTimer.current = setTimeout(() => {
      setMaxIsVisible((prev) => prev + increment);
    }, delay);

    return () => {
      if (stepTimer.current) {
        clearTimeout(stepTimer.current);
        stepTimer.current = null;
      }
    };
  }, [delay, maxIsVisible, prefersReducedMotion, targetCount]);

  // Fire onComplete after the last transition finishes
  useEffect(() => {
    if (!onComplete) return;

    if (completeTimer.current) {
      clearTimeout(completeTimer.current);
      completeTimer.current = null;
    }

    if (maxIsVisible === targetCount) {
      completeTimer.current = setTimeout(() => {
        onComplete?.();
      }, prefersReducedMotion ? 0 : transitionDuration);
    }

    return () => {
      if (completeTimer.current) {
        clearTimeout(completeTimer.current);
        completeTimer.current = null;
      }
    };
  }, [maxIsVisible, onComplete, prefersReducedMotion, transitionDuration, targetCount]);

  // When children count shrinks, make sure maxIsVisible isn't out of bounds
  useEffect(() => {
    if (maxIsVisible > childrenArray.length) {
      setMaxIsVisible(childrenArray.length);
    }
  }, [childrenArray.length, maxIsVisible]);

  return (
    <WrapperTag className={className}>
      {childrenArray.map((child, i) => {
        const isVisible = i < maxIsVisible;
        const transition = prefersReducedMotion
          ? "none"
          : `opacity ${transitionDuration}ms ${easing}, transform ${transitionDuration}ms ${easing}`;

        return (
          <ChildTag
            key={(child as any)?.key ?? i}
            className={childClassName}
            style={{
              transition,
              transform: isVisible ? "none" : `translateY(${distance}px)`,
              opacity: isVisible ? 1 : 0,
              willChange: prefersReducedMotion ? undefined : "opacity, transform",
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
