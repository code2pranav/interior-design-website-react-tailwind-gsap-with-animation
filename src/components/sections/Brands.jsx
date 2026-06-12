import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";

import client1 from "/images/Index/Brand/client-1-copyright.webp";
import client2 from "/images/Index/Brand/client-2-copyright.webp";
import client3 from "/images/Index/Brand/client-3-copyright.webp";
import client4 from "/images/Index/Brand/client-4-copyright.webp";
import client5 from "/images/Index/Brand/client-5-copyright.webp";
import client6 from "/images/Index/Brand/client-6-copyright.webp";

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
    const brandsRef = useRef();

    useGsapScrollAnim(brandsRef, () => {
        const brandDivs = brandsRef.current?.querySelectorAll("div.bg-white");
        if (brandDivs?.length) {
            gsap.set(brandDivs, { opacity: 0, y: 40 }); // 👈 explicit initial state

            gsap.to(brandDivs, {             // 👈 use gsap.to, not gsap.from
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: brandsRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse", // 👈 reverse on scroll up
                },
            });
        }
    });

    return (
        <div
            ref={brandsRef}
            className="container mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-10 pb-[8%] px-4"
        >
            {[client1, client2, client3, client4, client5, client6].map((client, index) => (
                <div
                    key={index}
                    className="bg-white h-20 shadow hover:shadow-xl transition-all duration-300 rounded-sm w-full hover:opacity-100 flex items-center justify-center will-change-transform"
                >
                    <img
                        src={client}
                        alt={`brand-${index + 1}`}
                        className="section-image object-contain lg:object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default Brands;
