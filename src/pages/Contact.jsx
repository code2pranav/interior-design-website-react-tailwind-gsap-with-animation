import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageBanner from '../components/ui/PageBanner'
import { Info, Mail, MapPin, Pencil, Phone, Send, User } from 'lucide-react'
import MainBtn from '../components/ui/Buttons/MainBtn'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef();
    

    useEffect(() => {
        if (!contactRef.current) return;

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(contactRef);
            gsap.from(q(".contact-item"), {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-left"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 List items (icons)
            gsap.from(q(".contact-list"), {
                x: -40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-left"),
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });


            gsap.from(q(".contact-right"), {
                x: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-right"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            gsap.from(q(".contact-form > *"), {
                y: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".contact-form"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <PageBanner
                title="Contact Us"
                currentPage="Contact Us"
            />

            <div ref={contactRef} className="container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14">
                <div className="lg:w-1/2 contact-left">
                    <span className="title-span contact-item">Contact Us</span>
                    <h2 className="heading-1 mb-5 contact-item">
                        <span className="text-coffee">Have questions? </span> <br />
                        Get in touch!
                    </h2>
                    <p className="pera-text contact-item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates maiores omnis modi asperiores! Ut ex facilis deserunt at repellat.
                    </p>
                    <ul className="space-y-5">

                        <li className="flex items-center gap-4 group contact-list">

                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-yellow-400 to-yellow-200 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <MapPin className="text-white w-5 h-5" />
                            </div>

                            <p className="text-gray-700">29 Nicolas str, New York, 987597-50</p>

                        </li>

                        <li className="flex items-center gap-4 group contact-list">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-green-500 to-green-300 transition duration-300 group-hover:scale-110 group-hover:-rotate-6">
                                <Phone className="text-white w-5 h-5" />
                            </div>
                            <span className="text-gray-700">+1 800 555 25 69</span>
                        </li>

                        <li className="flex items-center gap-4 group contact-list">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-blue-300 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <Mail className="text-white w-5 h-5" />
                            </div>

                            <span className="text-gray-700">info@email.com</span>

                        </li>

                    </ul>
                </div>
                <div className="w-full lg:w-1/2 contact-right">
                    <form className="w-full space-y-10 contact-form">

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <User className="w-5 h-5 text-gray-700" />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="bg-transparent w-full outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <Mail className="w-5 h-5 text-gray-700" />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-transparent w-full outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <Phone className="w-5 h-5 text-gray-700" />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="bg-transparent w-full outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center border-b border-gray-400 pb-3 gap-3">
                                <Info className="w-5 h-5 text-gray-700" />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="bg-transparent w-full outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-start border-b border-gray-400 pb-3 gap-3">
                            <Pencil className="w-5 h-5 text-gray-700 mt-1" />
                            <textarea
                                rows="3"
                                placeholder="How can we help you? Feel free to get in touch!"
                                className="bg-transparent w-full outline-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <MainBtn type='submit' text={"Get in Touch"} className='bg-black! text-white!' />

                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" className="w-4 h-4" />
                                I agree to the <span className="underline">Privacy Policy</span>.
                            </label>

                        </div>

                    </form>
                </div>
            </div>

            <div className="w-full h-100 sm:h-150 lg:h-180">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331783483!2d73.09068536311617!3d22.322240635404626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1773645862621!5m2!1sen!2sin" width="100%" height="100%"></iframe>
            </div>
        </>
    )
}

export default Contact