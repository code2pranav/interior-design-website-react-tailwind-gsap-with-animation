import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TeamData from "../assets/Data/TeamData.json";
import PageBanner from "../components/ui/PageBanner";
import { Mail, Phone, Plus, Minus } from "lucide-react";

import SocialIcons from "../components/ui/SocialIcons"
import MainBtn from "../components/ui/Buttons/MainBtn";
import TeamSkills from "../components/ui/TeamSkills";

import data from "../assets/data.jsx"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const TeamDetails = () => {
    const teamRef = useRef();

    const { id } = useParams();

    const team = TeamData.find((t) => t.id === parseInt(id));

    const [active, setActive] = useState(0);


    useEffect(() => {
        const ctx = gsap.context(() => {

            const image = teamRef.current.querySelector(".team-image");
            const content = teamRef.current.querySelector(".team-content");
            const form = teamRef.current.querySelector(".team-contact-form");

            const about = teamRef.current.querySelector(".team-about");
            const experience = teamRef.current.querySelector(".team-experience");
            const skills = teamRef.current.querySelector(".team-skills-form");

            // LEFT IMAGE
            gsap.from(image, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // RIGHT CONTENT (stagger)
            const contentItems = content.querySelectorAll(
                "h3, span, p, ul li, .centered-row"
            );

            gsap.from(contentItems, {
                x: 50,
                opacity: 0,
                stagger: 0.12,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: content,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // FORM (bottom up)
            gsap.from(form, {
                y: 40,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: form,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // BOTTOM SECTIONS (stagger)
            gsap.from([about, experience, skills], {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: about,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

        }, teamRef);

        return () => ctx.revert();
    }, []);


    return (
        <>
            <PageBanner
                title="Team Details"
                currentPage="Team Details"
                productName={team.name}
            />

            <div ref={teamRef} className="container py-[8%] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
                    <div className="team-image rounded-sm group overflow-hidden w-full h-auto lg:h-150">
                        <img
                            src={team.image}
                            alt={team.name}
                            className="group-hover:scale-110 transition-all duration-300 section-image"
                        />
                    </div>

                    <div className="team-content">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium pb-3">{team.name}</h3>
                        <span className="text-xl text-coffee pb-5 block">{team.category}</span>
                        <p className="text-paragraph leading-relaxed pb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus esse doloremque quaerat eum est eius pariatur ipsum impedit animi.
                        </p>

                        <ul className="space-y-2 pb-8">
                            <li>
                                <span className="font-semibold text-lg">Age : </span>
                                <span className="text-muted">{team.age}</span>
                            </li>
                            <li>
                                <span className="font-semibold text-lg">Experience : </span>
                                <span className="text-muted">{team.Experience}</span>
                            </li>
                            <li>
                                <span className="font-semibold text-lg">Specialization : </span>
                                <span className="text-muted">{team.Specialization}</span>
                            </li>
                        </ul>

                        <ul className="space-y-2 pb-10">
                            <li className="centered-row gap-2">
                                <Phone size={25} className="text-coffee-light" />
                                <span className="text-muted">{team.mobnumber}</span>
                            </li>
                            <li className="centered-row gap-2">
                                <Mail size={25} className="text-coffee-light" />
                                <span className="text-muted">{team.email}</span>
                            </li>
                        </ul>

                        <SocialIcons />

                    </div>

                    <div className="team-contact-form bg-[#f3f2f2] px-5 py-8 lg:px-8 lg:py-10 rounded-sm
                                    lg:col-span-2 xl:col-span-1">

                        <h4 className="text-center text-2xl font-medium pb-10">
                            Contact me directly
                        </h4>

                        <form method="post">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-sm py-4 bg-white px-4 outline-none mb-8"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full rounded-sm py-4 bg-white px-4 outline-none mb-8"
                            />

                            <textarea
                                placeholder="Message"
                                className="w-full rounded-sm py-4 bg-white px-4 outline-none h-40 resize-none mb-8"
                            ></textarea>

                            <MainBtn
                                text={"Send Message"}
                                className="bg-black! text-white! w-full! rounded-none! shadow-none!"
                            />
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    <div className="team-about">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium pb-3">About Me</h3>
                        <p className="pb-5 text-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat nihil, necessitatibus, animi incidunt molestias quia magni cupiditate placeat tempore impedit officiis!
                        </p>

                        <p className="text-paragraph pb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error nostrum fuga tempore vitae veniam! Possimus, quisquam? Similique a quisquam explicabo? Quisquam.
                        </p>

                        <MainBtn text={"Contact Me"} className="bg-black! text-white! rounded-sm! shadow-none!" />
                    </div>

                    <div className="team-experience">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium pb-6">
                            Experience
                        </h3>

                        <ul className="space-y-4">
                            {data.experiences.map((item, index) => (
                                <li key={index} className="bg-gray-100 overflow-hidden">

                                    <div
                                        onClick={() => setActive(active === index ? null : index)}
                                        className="flex justify-between items-center px-6 py-5 cursor-pointer"
                                    >
                                        <span className="font-semibold">{item.title}</span>

                                        {active === index ? <Minus /> : <Plus />}
                                    </div>

                                    <div
                                        className={`px-6 transition-all duration-500 ease-in-out overflow-hidden
                                                  ${active === index ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
                                    >
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="team-skills-form lg:col-span-2 xl:col-span-1">
                        <TeamSkills skills={team.Skills} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default TeamDetails;