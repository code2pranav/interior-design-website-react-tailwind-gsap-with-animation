import { MoveUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        // Use ScrollSmoother if available (desktop), else native
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(0, true);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-sm shadow-lg hover:bg-coffee-light transition-all duration-300 hover:text-black cursor-pointer z-50"
                >
                    <MoveUp />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
