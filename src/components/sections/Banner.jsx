import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerBg from "/images/Index/Banner/banner-bg.jpg";
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const playRef = useRef(null);
    const bannerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        if (playRef.current) {
            playRef.current.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
        }
    };

    const handleMouseLeave = () => {
        if (playRef.current) {
            playRef.current.style.transform = "translate(0,0)";
        }
    };

    useGsapScrollAnim(bannerRef, () => {
        gsap.from(playRef.current, {
            y: 50,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: bannerRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });

        gsap.fromTo(
            bannerRef.current,
            { scale: 0.92 },
            {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    });

    return (
        <div className="container py-20 mx-auto px-4">
            <div
                ref={bannerRef}
                className="banner relative rounded-lg overflow-hidden bg-center bg-cover"
                style={{ backgroundImage: `url(${bannerBg})`, height: "700px" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="overlay absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div
                        ref={playRef}
                        className="play border w-28 h-28 flex justify-center items-center border-white rounded-full text-white uppercase tracking-widest cursor-pointer"
                    >
                        play
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
