import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MainBtn from "../ui/Buttons/MainBtn"
import featureImage1 from "/images/Index/Features/feature-image-01.jpg"
import featureImage2 from "/images/Index/Features/feature-image-02.jpg"
import featureImage3 from "/images/Index/Features/feature-image-03.jpg"
import featureImage4 from "/images/Index/Features/feature-image-04.jpg"
import featureImage5 from "/images/Index/Features/feature-image-05.jpg"
import featureImage6 from "/images/Index/Features/feature-image-06.jpg"
import featureImage7 from "/images/Index/Features/feature-image-07.jpg"
import featureImage8 from "/images/Index/Features/feature-image-03.jpg"
import { Bath, BedDouble, ChefHat, Flame, Lightbulb, Palette, Sofa, Square } from "lucide-react"
import FeatureCard from "../../components/ui/Cards/FeatureCard.jsx"
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const featureRef = useRef();

    useGsapScrollAnim(featureRef, () => {
        gsap.from(".feature-content", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".feature-content",
                start: "top 88%",
                toggleActions: "play none none none",
            }
        });

        gsap.from(".feature-btn", {
            scale: 0.85,
            opacity: 0,
            duration: 0.6,
            delay: 0.25,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".feature-content",
                start: "top 88%",
                toggleActions: "play none none none",
            }
        });

        gsap.from(".feature-card", {
            y: 50,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".feature-card",
                start: "top 90%",
                toggleActions: "play none none none",
            }
        });
    });

    return (
        <div ref={featureRef} className="bg-light-yellow">
            <div className="container py-[8%] mx-auto px-4 space-y-10">
                <div className="feature-content section-container lg:items-center!">
                    <div>
                        <span className="title-span">Our Features</span>
                        <h2 className="heading-1 mb-5">
                            <span className="text-coffee">Modern ideas </span> <br />
                            for home
                        </h2>
                        <p className="pera-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus non ratione vitae.
                        </p>
                    </div>
                    <MainBtn path="services" text={"Read More"} className="bg-black! text-white! feature-btn" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <FeatureCard image={featureImage1} Icon={BedDouble} title="Bedrooms" description="Comfortable and elegant bedroom designs that create a peaceful and relaxing environment for rest and rejuvenation." />
                    <FeatureCard image={featureImage2} Icon={ChefHat} title="Kitchens" description="Modern kitchens designed for functionality and style, combining smart layouts with beautiful finishes." />
                    <FeatureCard image={featureImage3} Icon={Lightbulb} title="Lighting" description="Creative lighting solutions that enhance mood, highlight interiors, and bring warmth to every space." />
                    <FeatureCard image={featureImage4} Icon={Square} title="Windows" description="Stylish window designs that maximize natural light while improving ventilation and aesthetic appeal." />
                    <FeatureCard image={featureImage5} Icon={Bath} title="Bathrooms" description="Luxury bathroom interiors that blend comfort, elegance, and modern functionality for a refreshing experience." />
                    <FeatureCard image={featureImage6} Icon={Palette} title="Decoration" description="Beautiful decorative elements that add personality, charm, and artistic expression to your living spaces." />
                    <FeatureCard image={featureImage7} Icon={Flame} title="Fireplaces" description="Elegant fireplaces designed to create a warm and inviting atmosphere in modern homes." />
                    <FeatureCard image={featureImage8} Icon={Sofa} title="Living Rooms" description="Sophisticated living room interiors crafted for comfort, style, and memorable moments with family and guests." />
                </div>
            </div>
        </div>
    );
};

export default Features;
