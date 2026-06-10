import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MainBtn from "../components/ui/Buttons/MainBtn";

gsap.registerPlugin(ScrollTrigger);

const Page404 = () => {
    const pageRef = useRef();

    useEffect(() => {
        if (!pageRef.current) return;

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(pageRef);

            // Animate "404"
            gsap.from(q("h1"), {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q("h1"),
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // Animate subtitle
            gsap.from(q("span"), {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q("span"),
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // Animate paragraph
            gsap.from(q("p"), {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q("p"),
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // Animate button
            gsap.from(q("button"), {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                delay: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: q("button"),
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="bg-light-yellow min-h-screen flex items-center">
            <div className="container text-center py-[12%] mx-auto px-4">
                <div className="mt-5">
                    <h1 className="text-9xl sm:text-[15rem] lg:text-[20rem] font-semibold text-heading leading-tight">404</h1>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 block">Page Not Found</span>
                    <p className="sm:max-w-50 mx-auto text-muted">
                        We're sorry, but something went wrong.
                    </p>

                    <MainBtn path="/" text={"HomePage"} className="bg-black! text-white! mt-10!" />
                </div>
            </div>
        </div>
    );
};

export default Page404;