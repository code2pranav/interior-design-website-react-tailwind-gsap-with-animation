import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useParams } from "react-router-dom";
import services from "../assets/Data/Services.json";
import PageBanner from "../components/ui/PageBanner";

import galleryImage1 from "/images/Gallery/gallery-image-05.jpg"
import galleryImage2 from "/images/Gallery/gallery-image-06.jpg"
import galleryImage3 from "/images/Gallery/gallery-image-08.jpg"
import MainBtn from "../components/ui/Buttons/MainBtn";
import { Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
    const serviceDetailRef = useRef();
    const { id } = useParams();

    const service = services.find((item) => item.id === Number(id));

    if (!service) return <p>Service not found</p>;

    useEffect(() => {
        if (!serviceDetailRef.current) return;

        const ctx = gsap.context(() => {

            const mainImage = serviceDetailRef.current.querySelector(".main-image");
            const title = serviceDetailRef.current.querySelector(".main-title");
            const paras = serviceDetailRef.current.querySelectorAll(".para");
            const galleryImgs = serviceDetailRef.current.querySelectorAll(".gallery-img");
            const bottomImage = serviceDetailRef.current.querySelector(".bottom-image");
            const formTitle = serviceDetailRef.current.querySelector(".form-title");
            const form = serviceDetailRef.current.querySelector(".contact-form");
            const inputs = serviceDetailRef.current.querySelectorAll(".input-wrapper");
            const contactItems = serviceDetailRef.current.querySelectorAll(".contact-item");
            const button = serviceDetailRef.current.querySelector(".submit-btn");

            if (mainImage) {
                gsap.from(mainImage, {
                    scale: 1.1,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: mainImage,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (title) {
                gsap.from(title, {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            paras.forEach((para) => {
                gsap.from(para, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: para,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            });

            if (galleryImgs.length) {
                gsap.from(galleryImgs, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: galleryImgs[0],
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (bottomImage) {
                gsap.from(bottomImage, {
                    scale: 1.05,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bottomImage,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (formTitle) {
                gsap.from(formTitle, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: formTitle,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (inputs.length) {
                gsap.from(inputs, {
                    y: 25,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: form,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (contactItems.length) {
                gsap.from(contactItems, {
                    x: 40,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contactItems[0],
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            if (button) {
                gsap.from(button, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: 0.4,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: button,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            }

        }, serviceDetailRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <PageBanner
                title="Service Details"
                currentPage="Service Details"
                productName={service.title}
            />

            <div ref={serviceDetailRef} className="container mx-auto px-4 py-[8%]">
                <div className="section-container gap-10 lg:gap-14 items-start!">
                    <div className="w-full lg:w-[70%] content">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="main-image w-full h-full object-cover rounded"
                        />

                        <h3 className="main-title text-3xl lg:text-4xl font-semibold pt-8 pb-5">{service.title}</h3>
                        <p className="text-paragraph pb-8 para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium unde quae officiis, dignissimos sit quis adipisci voluptas consectetur explicabo blanditiis illo, quidem delectus.
                        </p>

                        <div className="gallery centered-row justify-between flex-col lg:flex-row  gap-3 w-full h-auto lg:h-90">
                            <div className="image group overflow-hidden rounded-sm h-full w-full gallery-img">
                                <img src={galleryImage1} alt="gallery-image" className="section-image group-hover:scale-110 transition-all duration-300" />
                            </div>
                            <div className="image group overflow-hidden rounded-sm h-full w-full gallery-img">
                                <img src={galleryImage2} alt="gallery-image" className="section-image group-hover:scale-110 transition-all duration-300" />
                            </div>
                        </div>

                        <p className="text-paragraph para py-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque nihil aspernatur! Voluptates ad laboriosam in, iure dolore facilis dolor dolorem doloremque fugiat iusto. Ducimus nulla commodi non placeat nemo possimus illum, veritatis iusto consequuntur atque! Accusamus aliquam praesentium officia.
                        </p>

                        <p className="text-paragraph para pb-8">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A rem perspiciatis praesentium distinctio, enim, similique aspernatur consectetur voluptatum facilis autem dolores, necessitatibus repudiandae! Labore repudiandae repellat fuga hic iure et deleniti, molestiae velit facere modi voluptas ad eos impedit provident quasi sed voluptatibus? Perspiciatis laudantium harum consequatur obcaecati aliquam optio!
                        </p>

                        <div className="h-auto lg:h-150">
                            <img src={galleryImage3} alt="gallery-image" className="section-image bottom-image" />
                        </div>

                        <p className="text-paragraph py-8 para">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quasi vero blanditiis assumenda vel, qui, voluptate repellat odio quibusdam ad dolorum? Modi at atque a impedit sed. Harum veniam est laudantium fugiat deleniti ab quod perferendis sit atque, culpa voluptas dicta adipisci neque officia omnis hic quae, aliquid quos voluptates qui exercitationem accusantium! Dignissimos debitis obcaecati odio mollitia autem rem!
                        </p>
                    </div>
                    <div className="w-full lg:w-[30%] bg-white shadow p-5 lg:p-8 rounded-sm lg:sticky h-full top-0 right-0">
                        <h4 className="form-title">Get in Touch</h4>

                        <form className="space-y-8 mt-10 contact-form">
                            <div className="input-wrapper pb-2 relative">
                                <input type="text" placeholder="Name" className="input-box w-full outline-none" required />
                            </div>

                            <div className="input-wrapper pb-2 relative">
                                <input type="email" placeholder="Email" className="input-box w-full outline-none" required />
                            </div>

                            <div className="input-wrapper pb-2 relative">
                                <input type="text" placeholder="Message" className="input-box w-full outline-none" required />
                            </div>

                            <MainBtn type="submit" text={"Get In Touch"} className="submit-btn bg-black! text-white! shadow-none! rounded-sm! mt-6" />
                        </form>

                        <div className="contact-info">
                            <h3 className="text-2xl font-medium pt-8 pb-8 form-title">Contact Info</h3>
                            <ul className="space-y-6 max-w-md">

                                <li className="flex items-start gap-4 group contact-item">
                                    <div className="p-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white transition-transform duration-300 group-hover:scale-110">
                                        <MapPin size={20} />
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold block">United Kingdom —</span>
                                        221B Baker Street, Office 302 <br />
                                        London, UK NW1 6XE
                                    </p>
                                </li>

                                <li className="flex items-center gap-4 group contact-item">
                                    <div className="p-3 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110">
                                        <Mail size={20} />
                                    </div>

                                    <p className="text-gray-700">info@email.com</p>
                                </li>

                                <li className="flex items-center gap-4 group contact-item">
                                    <div className="p-3 rounded-full bg-linear-to-r from-orange-500 to-red-500 text-white transition-transform duration-300 group-hover:scale-110">
                                        <Phone size={20} />
                                    </div>

                                    <p className="text-gray-700">+91 12345 67890</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceDetails