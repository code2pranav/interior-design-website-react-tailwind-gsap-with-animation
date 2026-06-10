import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import collectionImage1 from "/images/Index/Collection/collection-image-01.jpg";
import collectionImage2 from "/images/Index/Collection/collection-image-02.jpg";
import { Link } from "react-router-dom";
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
    const collectionRef = useRef();

    useGsapScrollAnim(collectionRef, () => {
        gsap.from(".collection-img-main", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: collectionRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".collection-content", {
            x: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: collectionRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".collection-play-btn", {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: collectionRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });
    });

    return (
        <div ref={collectionRef} className="collection container py-[8%] mx-auto px-4 section-container gap-10 lg:gap-14">
            <div className="collection-img-main w-full lg:w-1/2 overflow-hidden group rounded-sm max-w-full lg:max-w-150 relative mx-auto">
                <img src={collectionImage1} alt="collection-image" className="section-image group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="collection-content w-full lg:w-1/2">
                <span className="title-span">Our Collection</span>
                <h2 className="heading-1 mb-5">
                    Our sofas
                    <span className="text-coffee"> design-focused </span>
                    create style
                </h2>
                <p className="pera-text mb-20 sm:mb-40 lg:mb-60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus non ratione vitae.
                </p>
                <div className="relative flex justify-center items-center rounded-sm overflow-hidden mx-0!">
                    <img src={collectionImage2} alt="collection-image" />
                    <div className="collection-play-btn absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <Link to="https://uicode.in/" className="bg-white w-14 h-14 flex justify-center items-center rounded-sm cursor-pointer">
                            <Play size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
