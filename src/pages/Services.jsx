import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowRight, PhoneCall } from "lucide-react"
import MainBtn from "../components/ui/Buttons/MainBtn"
import PageBanner from "../components/ui/PageBanner"
import aboutImg1 from "/images/AboutPage/about-image-01.jpg"
import aboutImg2 from "/images/AboutPage/about-image-02.jpg"

import ServiceCard from "../components/ui/ServiceCard"
import services from "../assets/Data/Services.json"

import faqImage1 from "/images/Faqs/faq-image-01.jpg"
import faqImage2 from "/images/Faqs/faq-image-02.jpg"

import feature1 from "/images/Services/feature-01.png"
import feature2 from "/images/Services/feature-02.png"
import feature3 from "/images/Services/feature-03.png"

import Testimonials from "../components/ui/Testimonials"

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const aboutRef = useRef();
    const serviceRef = useRef();
    const ctaRef = useRef();
    const storeRef = useRef();
    const featureRef = useRef();
    const testimonialRef = useRef();

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const images = aboutRef.current.querySelectorAll("img");
    //         const heading = aboutRef.current.querySelector("h2");
    //         const spanTitle = aboutRef.current.querySelector(".title-span");
    //         const para = aboutRef.current.querySelector(".pera-text");
    //         const listItems = aboutRef.current.querySelectorAll("ul li");
    //         const button = aboutRef.current.querySelector("button");
    //         const phone = aboutRef.current.querySelector(".phone-call");

    //         // Animate images
    //         gsap.from(images[0], {
    //             x: -50,
    //             opacity: 0,
    //             duration: 1,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: images[0],
    //                 start: "top 90%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //         gsap.from(images[1], {
    //             scale: 0.8,
    //             opacity: 0,
    //             duration: 1,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: images[1],
    //                 start: "top 90%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //         // Animate text
    //         gsap.from(spanTitle, {
    //             y: 20,
    //             opacity: 0,
    //             duration: 0.6,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: spanTitle,
    //                 start: "top 95%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //         gsap.from(heading, {
    //             y: 20,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: 0.1,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: heading,
    //                 start: "top 95%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //         gsap.from(para, {
    //             y: 20,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: 0.2,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: para,
    //                 start: "top 95%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //         // Animate list items staggered
    //         gsap.from(listItems, {
    //             x: -20,
    //             opacity: 0,
    //             stagger: 0.15,
    //             duration: 0.6,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: listItems[0],
    //                 start: "top 95%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //         // Animate button
    //         gsap.from(button, {
    //             y: 20,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: 0.3,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: button,
    //                 start: "top 95%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //         gsap.from(phone, {
    //             y: 20,
    //             opacity: 0,
    //             duration: 0.8,
    //             delay: 0.3,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: phone,
    //                 start: "top 95%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //     }, aboutRef);

    //     return () => ctx.revert();
    // }, []);

    // useEffect(() => {
    //     if (!serviceRef.current) return;

    //     const ctx = gsap.context(() => {

    //         const heading = serviceRef.current.querySelector(".content");
    //         const headingItems = serviceRef.current.querySelectorAll(".content > *");
    //         const cards = serviceRef.current.querySelectorAll(".service-grid > *");

    //         // 🔥 Heading animation
    //         if (headingItems.length) {
    //             gsap.from(headingItems, {
    //                 y: 30,
    //                 opacity: 0,
    //                 stagger: 0.2,
    //                 duration: 0.7,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: heading,
    //                     start: "top 85%",
    //                     toggleActions: "play none none none",
    //                 },
    //             });
    //         }

    //         // 🔥 Cards animation (one by one)
    //         if (cards.length) {
    //             gsap.from(cards, {
    //                 y: 50,
    //                 opacity: 0,
    //                 stagger: 0.25,
    //                 duration: 0.8,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: serviceRef.current,
    //                     start: "top 85%",
    //                     toggleActions: "play none none none",
    //                 },
    //             });
    //         }

    //     }, serviceRef);

    //     return () => ctx.revert();
    // }, []);

    // useEffect(() => {
    //     if (!ctaRef.current) return;

    //     const ctx = gsap.context(() => {

    //         const items = ctaRef.current.querySelectorAll(".content > *");

    //         gsap.from(items, {
    //             y: 40,
    //             opacity: 0,
    //             stagger: 0.2,
    //             duration: 0.7,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ctaRef.current,
    //                 start: "top 85%",
    //                 toggleActions: "play none none none",
    //             },
    //         });

    //     }, ctaRef);

    //     return () => ctx.revert();
    // }, []);

    // useEffect(() => {
    //     if (!storeRef.current) return;

    //     const ctx = gsap.context(() => {

    //         const image = storeRef.current.querySelector(".faq-image");
    //         const content = storeRef.current.querySelector(".content");
    //         const contentItems = storeRef.current.querySelectorAll(".content > *");

    //         // 🔥 LEFT IMAGE
    //         if (image) {
    //             gsap.from(image, {
    //                 x: -60,
    //                 opacity: 0,
    //                 duration: 0.8,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: image,
    //                     start: "top 85%",
    //                     toggleActions: "play none none none",
    //                 },
    //             });
    //         }

    //         // 🔥 RIGHT CONTENT (stagger)
    //         if (contentItems.length) {
    //             gsap.from(contentItems, {
    //                 x: 60,
    //                 opacity: 0,
    //                 stagger: 0.2,
    //                 duration: 0.7,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: content,
    //                     start: "top 85%",
    //                     toggleActions: "play none none none",
    //                 },
    //             });
    //         }

    //     }, storeRef);

    //     return () => ctx.revert();
    // }, []);

    // useEffect(() => {
    //     if (!featureRef.current) return;

    //     const ctx = gsap.context(() => {

    //         const cards = featureRef.current.querySelectorAll(".feature-grid > *");

    //         if (cards.length) {
    //             gsap.from(cards, {
    //                 y: 60,
    //                 opacity: 0,
    //                 stagger: 0.25,   // 👈 one by one
    //                 duration: 0.8,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: featureRef.current,
    //                     start: "top 85%",
    //                     toggleActions: "play none none none",
    //                 },
    //             });
    //         }

    //     }, featureRef);

    //     return () => ctx.revert();
    // }, []);

    // useEffect(() => {
    //     if (!testimonialRef.current) return;

    //     const ctx = gsap.context(() => {

    //         const headingItems = testimonialRef.current.querySelectorAll(".content > *");
    //         const slides = testimonialRef.current.querySelectorAll(".swiper-slide");

    //         // 🔥 Heading animation
    //         if (headingItems.length) {
    //             gsap.from(headingItems, {
    //                 y: 30,
    //                 opacity: 0,
    //                 stagger: 0.2,
    //                 duration: 0.7,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: testimonialRef.current,
    //                     start: "top 85%",
    //                     toggleActions: "play none none none",
    //                 },
    //             });
    //         }

    //         // 🔥 Swiper Slides animation
    //         if (slides.length) {
    //             gsap.from(slides, {
    //                 y: 60,
    //                 opacity: 0,
    //                 stagger: 0.25,
    //                 duration: 0.8,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: testimonialRef.current,
    //                     start: "top 80%",
    //                     toggleActions: "play none none none",
    //                 },
    //             });
    //         }

    //     }, testimonialRef);

    //     return () => ctx.revert();
    // }, []);

    return (
        <>
            <PageBanner
                title="Our Services"
                currentPage="Our Services"
            />

            <div ref={aboutRef} className='container py-[8%] mx-auto px-4 gap-14 section-container items-center!'>
                <div className='rounded-sm w-full lg:w-1/2 relative'>
                    <img src={aboutImg1} alt="about-image" className="rounded-sm w-full lg:w-auto" />
                    <img src={aboutImg2} alt="about-image" className=" absolute hidden md:block
                    right-4 -bottom-10 md:-bottom-12 lg:-bottom-16 xl:-bottom-20 w-40 md:w-52 lg:w-64 xl:w-90 rounded-sm shadow-lg" />
                </div>

                <div className="about-content w-full lg:w-1/2">
                    <span className="title-span">design studio</span>

                    <h2 className="heading-1 mb-5">
                        <span className="text-coffee">We create stunning</span> <br />
                        home designs
                    </h2>

                    <span className="text-xl lg:text-2xl font-medium block pb-10">Using modern technologies of 3D modeling</span>
                    <p className="pera-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non incididunt ut.
                    </p>

                    <div className="centered-row gap-8">
                        <MainBtn path="/about" text={"About Us"} className="bg-black! text-white!" />
                        <div className="centered-row gap-2 text-lg font-medium phone-call">
                            <span className="bg-white p-3 rounded-sm shadow-2xl">
                                <PhoneCall size={25} />
                            </span>
                            +91 12345 67890
                        </div>
                    </div>
                </div>
            </div>

            <div ref={serviceRef} className="container py-[8%] mx-auto px-4 gap-10 lg:gap-14">
                <div className="text-center w-full mb-10 content">
                    <span className="title-span">Premium quality</span>
                    <h2 className="heading-1 mb-5">
                        Our services make your <br />
                        <span className="text-coffee"> life comfortable </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 service-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index} {...service}
                        />
                    ))}

                </div>
            </div>

            <div ref={ctaRef} className="bg-primary text-white">
                <div className="container section-container mx-auto px-4 py-[4%] gap-8 lg:gap-10 content">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl max-w-2xl font-medium">Schedule an appointment to meet or email us your questions</h2>

                    <MainBtn path="/contact" text={"Contact Us"} />
                </div>
            </div>

            <div ref={storeRef} className="container py-[8%] mx-auto px-4 section-container items-center! gap-10 lg:gap-14">
                <div className="faq-image w-full lg:w-1/2 centered-row sm:flex-row flex-col gap-5 h-auto sm:h-90 xl:h-120">
                    <img src={faqImage1} alt="faq-image" className="section-image rounded-sm" />
                    <img src={faqImage2} alt="faq-image" className="section-image rounded-sm" />
                </div>

                <div className="content w-full lg:w-1/2">
                    <span className="title-span">Modern Solutions</span>

                    <h2 className="heading-1 mb-5">
                        Timeless, quality interior
                        <span className="text-coffee"> design </span> <br />
                    </h2>

                    <p className="pera-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>

                    <MainBtn path="/shop" text={"Visit Our Online Store"} className="bg-black! text-white! w-60!" />

                </div>

            </div>

            <div ref={featureRef} className="container py-[8%] mx-auto px-4">
                <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                    <div className="group">
                        <img src={feature1} alt="feature-icon" className="mx-auto mb-8" />

                        <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                            Worldwide shipping
                        </h3>

                        <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>

                    </div>

                    <div className="group">
                        <img src={feature2} alt="feature-icon" className="mx-auto mb-8" />

                        <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                            Buyer protection
                        </h3>

                        <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>

                    </div>

                    <div className="group">
                        <img src={feature3} alt="feature-icon" className="mx-auto mb-8" />

                        <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                            Customer support
                        </h3>

                        <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>

            <div ref={testimonialRef} className="bg-light-yellow">
                <div className="container py-[8%] mx-auto px-4">
                    <div className="text-center w-full mb-10 content">
                        <span className="title-span">our testimonials</span>
                        <h2 className="heading-1 mb-5">
                            Feedback from
                            <span className="text-coffee"> clients </span>
                        </h2>
                    </div>

                    <div className="testimonial-wrapper">
                        <Testimonials />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services