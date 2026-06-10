import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapScrollAnim
 * Runs animFactory inside a gsap.context scoped to `ref`,
 * refreshes ScrollTrigger after layout settles, and cleans up on unmount.
 *
 * Two-pass refresh strategy:
 *  - 100ms: catches most elements after first paint
 *  - 400ms: catches any late-loading images / ScrollSmoother re-init
 *
 * Usage:
 *   const ref = useRef();
 *   useGsapScrollAnim(ref, () => {
 *     gsap.from(".my-el", { opacity: 0, scrollTrigger: { ... } });
 *   });
 */
function useGsapScrollAnim(ref, animFactory, deps = []) {
  useEffect(() => {
    if (!ref?.current) return;

    // Create context scoped to ref — animFactory runs INSIDE the context
    const ctx = gsap.context(animFactory, ref.current);

    // First pass — after initial paint
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    // Second pass — after ScrollSmoother re-init (App.jsx runs at 50ms)
    const t2 = setTimeout(() => ScrollTrigger.refresh(true), 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useGsapScrollAnim;
