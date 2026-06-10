import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from '../components/sections/Banner';
import MainBtn from '../components/ui/Buttons/MainBtn';
import PageBanner from '../components/ui/PageBanner';

import aboutImg1 from "/images/AboutPage/about-image-01.jpg";
import aboutImg2 from "/images/AboutPage/about-image-02.jpg";

import gallery from "../assets/Data/GalleryData.json";
import CountUp from "react-countup";

import Team from '../components/sections/Team';
import GallerySlider from '../components/ui/GallerySlide';
import useGsapScrollAnim from "../hooks/useGsapScrollAnim";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef();
    const galleryRef = useRef();
    const countRef = useRef();
    const [startCount, setStartCount] = useState(false);

    useGsapScrollAnim(aboutRef, () => {
        const images = aboutRef.current.querySelectorAll("img");
        const heading = aboutRef.current.querySelector("h2");
        const spanTitle = aboutRef.current.querySelector(".title-span");
        const para = aboutRef.current.querySelector(".pera-text");
        const listItems = aboutRef.current.querySelectorAll("ul li");
        const button = aboutRef.current.querySelector("button");

        if (images[0]) gsap.from(images[0], { x: -50, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: images[0], start: "top 90%", toggleActions: "play none none none" } });
        if (images[1]) gsap.from(images[1], { scale: 0.85, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: images[1], start: "top 90%", toggleActions: "play none none none" } });
        if (spanTitle) gsap.from(spanTitle, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: spanTitle, start: "top 95%", toggleActions: "play none none none" } });
        if (heading) gsap.from(heading, { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 95%", toggleActions: "play none none none" } });
        if (para) gsap.from(para, { y: 20, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: para, start: "top 95%", toggleActions: "play none none none" } });
        if (listItems?.length) gsap.from(listItems, { x: -20, opacity: 0, stagger: 0.15, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: listItems[0], start: "top 95%", toggleActions: "play none none none" } });
        if (button) gsap.from(button, { y: 20, opacity: 0, duration: 0.8, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: button, start: "top 95%", toggleActions: "play none none none" } });
    });

    useGsapScrollAnim(galleryRef, () => {
        const title = galleryRef.current.querySelector(".title-span");
        const heading = galleryRef.current.querySelector(".heading-1");
        const slider = galleryRef.current.querySelector(".gallery-slider");

        if (title) gsap.from(title, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: title, start: "top 95%", toggleActions: "play none none none" } });
        if (heading) gsap.from(heading, { y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 95%", toggleActions: "play none none none" } });
        if (slider) gsap.from(slider, { scale: 0.96, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: slider, start: "top 90%", toggleActions: "play none none none" } });
    });

    useGsapScrollAnim(countRef, () => {
        const items = countRef.current.querySelectorAll(".counter-item");
        if (items?.length) {
            gsap.fromTo(items,
                { y: 20, opacity: 0 },
                {
                    y: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power3.out",
                    scrollTrigger: {
                        trigger: countRef.current,
                        start: "top 85%",
                        onEnter: () => setStartCount(true),
                        onLeaveBack: () => setStartCount(false),
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    });

    return (
        <>
            <PageBanner title="About Us" currentPage="About Us" />

            <div ref={aboutRef} className='container py-[8%] mx-auto px-4 gap-14 section-container items-center!'>
                <div className='rounded-sm w-full lg:w-1/2 relative'>
                    <img src={aboutImg1} alt="about-image" className="rounded-sm w-full lg:w-auto" />
                    <img src={aboutImg2} alt="about-image" className="absolute hidden md:block right-4 -bottom-10 md:-bottom-12 lg:-bottom-16 xl:-bottom-20 w-40 md:w-52 lg:w-64 xl:w-90 rounded-sm shadow-lg" />
                </div>
                <div className="about-content w-full lg:w-1/2">
                    <span className="title-span">Premium quality</span>
                    <h2 className="heading-1 mb-5">
                        <span className="text-coffee">Your comfort is our </span> <br />
                        only priority
                    </h2>
                    <p className="pera-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <ul className='space-y-2 mb-10 text-muted'>
                        <li><span>Mon-Fri: 9 AM – 10 PM</span></li>
                        <li><span>Saturday: 9 AM – 6 PM</span></li>
                    </ul>
                    <MainBtn path="/shop" text={"Shop Now"} className="bg-black! text-white!" />
                </div>
            </div>

            <div ref={galleryRef} className="image-gallery py-[8%] bg-light-yellow">
                <div className="container mx-auto px-4">
                    <span className="title-span">our gallery</span>
                    <h2 className="heading-1 mb-20">Work examples</h2>
                </div>
                <div className="container mx-auto px-4 pb-[8%] relative gallery-slider">
                    <GallerySlider gallery={gallery} />
                </div>
            </div>

            <Banner />

            <div ref={countRef} className='container pb-[8%] mx-auto px-4 gap-14 section-container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 text-center'>
                <div className="counter-item">
                    <p className="text-lg text-gray-600 mb-2">Offices</p>
                    <h3 className="text-5xl font-bold">{startCount && <CountUp end={90} duration={2} />}+</h3>
                </div>
                <div className="counter-item">
                    <p className="text-lg text-gray-600 mb-2">Clients</p>
                    <h3 className="text-5xl font-bold">{startCount && <CountUp end={2548} duration={2} />}</h3>
                </div>
                <div className="counter-item">
                    <p className="text-lg text-gray-600 mb-2">Years</p>
                    <h3 className="text-5xl font-bold">{startCount && <CountUp end={25} duration={2} />}+</h3>
                </div>
                <div className="counter-item">
                    <p className="text-lg text-gray-600 mb-2">Projects</p>
                    <h3 className="text-5xl font-bold">{startCount && <CountUp end={256} duration={2} />}</h3>
                </div>
            </div>

            <Team />
        </>
    );
};

export default About;
