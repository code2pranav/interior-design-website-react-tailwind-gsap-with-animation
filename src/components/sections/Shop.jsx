import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductData from "../../assets/Data/ProductData.json";
import ProductCard from "../ui/Cards/ProductCard";
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";

gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
    const shopRef = useRef();
    const headingRef = useRef();
    const wrapperRef = useRef();

    useGsapScrollAnim(wrapperRef, () => {
        gsap.from(headingRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });

        const cards = shopRef.current?.querySelectorAll(".product-card");
        if (cards?.length) {
            gsap.from(cards, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: shopRef.current,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
            });
        }
    });

    return (
        <div ref={wrapperRef} className="bg-light-yellow">
            <div className="container py-[8%] mx-auto px-4">
                <div ref={headingRef} className="text-center w-full mb-16">
                    <span className="title-span">Our shop</span>
                    <h2 className="heading-1 mb-5">
                        Trending
                        <span className="text-coffee"> items </span>
                    </h2>
                </div>
                <div ref={shopRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
                    {ProductData.slice(4, 8).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
