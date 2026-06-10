import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import PageBanner from "../components/ui/PageBanner"
import faqImage1 from "/images/Faqs/faq-image-01.jpg"
import faqImage2 from "/images/Faqs/faq-image-02.jpg"

import FAQItem from "../components/ui/FAQItem.jsx"
import MainBtn from "../components/ui/Buttons/MainBtn.jsx";

import work from "../assets/Data/Work.json";
import WorkCard from "../components/ui/Work.jsx";

const Faqs = () => {
    const faqRef = useRef();
    const workRef = useRef();
    const headingRef = useRef();
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            const images = faqRef.current.querySelector(".faq-image");
            const faqs = faqRef.current.querySelectorAll(".faq-content");

            if (images) {
                gsap.from(images, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: images,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (faqs.length > 0) {
                gsap.from(faqs, {
                    x: 50,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: faqs[0],
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }
        }, faqRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!headingRef.current) return;

        const ctx = gsap.context(() => {

            const headingItems = headingRef.current.querySelectorAll(".content > *");

            gsap.from(headingItems, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none", // ✅ add this
                },
            });

        }, headingRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!workRef.current) return;

        const ctx = gsap.context(() => {

            const heading = workRef.current.querySelector(".content");
            const headingItems = workRef.current.querySelectorAll(".content > *");
            const cards = workRef.current.querySelectorAll(".work-grid > *");

            if (headingItems.length) {
                gsap.from(headingItems, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 85%",
                        toggleActions: "play none none none", // ✅ add
                    },
                });
            }

            if (cards.length) {
                gsap.from(cards, {
                    y: 50,
                    opacity: 0,
                    stagger: 0.25,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: workRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none", // ✅ add
                    },
                });
            }

        }, workRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <PageBanner
                title="Faq's"
                currentPage="Faq's"
            />

            <div ref={faqRef} className="container py-[8%] mx-auto px-4 section-container items-center! gap-10 lg:gap-14">
                <div className="faq-image w-full lg:w-1/2 centered-row sm:flex-row flex-col gap-5 h-auto sm:h-90 xl:h-120">
                    <img src={faqImage1} alt="faq-image" className="section-image rounded-sm" />
                    <img src={faqImage2} alt="faq-image" className="section-image rounded-sm" />
                </div>

                <div className="faq-content w-full lg:w-1/2">
                    <FAQItem
                        question="What are the execution terms?"
                        answer="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, amet? Odio nam odit consequatur at voluptatum aliquid adipisci ipsam? Ipsam, tenetur. Blanditiis ipsam doloremque ea harum eum nihil iste molestias.
                        "
                        isOpen={openIndex === 0}
                        onClick={() => toggleFAQ(0)}
                    />
                    <FAQItem
                        question="How do I choose an architect?"
                        answer="Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia."
                        isOpen={openIndex === 1}
                        onClick={() => toggleFAQ(1)}
                    />
                    <FAQItem
                        question="Where to meet for the project review?"
                        answer="Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia."
                        isOpen={openIndex === 2}
                        onClick={() => toggleFAQ(2)}
                    />
                    <FAQItem
                        question="How much does a consultation cost?"
                        answer="Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia."
                        isOpen={openIndex === 3}
                        onClick={() => toggleFAQ(3)}
                    />
                </div>
            </div>

            <div ref={headingRef} className="bg-light-yellow py-[8%]">
                <div className="container mx-auto px-4 section-container">
                    <div className="text-center content w-full content">
                        <span className="title-span">design studio</span>
                        <h2 className="heading-1 mb-5">
                            <span className="text-coffee"> Our services make your home </span> <br />
                            comfortable and cozy
                        </h2>
                        <MainBtn path="/about" text={"Read More"} className="bg-black! text-white!" />
                    </div>
                </div>
            </div>

            <div ref={workRef} className="works container mx-auto px-4 py-[8%]">
                <div className="w-full mb-10 content">
                    <span className="title-span">Our works</span>
                    <h2 className="heading-1 mb-5">
                        Every idea is
                        <span className="text-coffee"> possible </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10  work-grid">
                    {work.slice(0, 3).map((work) => (
                        <WorkCard
                            key={work.id}
                            id={work.id}
                            number={work.number}
                            title={work.title}
                            image={work.image}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faqs