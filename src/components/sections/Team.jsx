import React, { useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamData from "../../assets/Data/TeamData.json";
import TeamCard from '../ui/Cards/TeamCard';
import useGsapScrollAnim from "../../hooks/useGsapScrollAnim";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
    const teamRef = useRef();
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

        const cards = teamRef.current?.querySelectorAll(".team-card");
        if (cards?.length) {
            gsap.from(cards, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: teamRef.current,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
            });
        }
    });

    return (
        <div ref={wrapperRef} className='bg-light-yellow'>
            <div className="container py-[8%] mx-auto px-4">
                <div ref={headingRef} className="text-center w-full mb-16">
                    <span className="title-span">Our team</span>
                    <h2 className="heading-1 mb-5">
                        Popular
                        <span className="text-coffee"> Architects </span>
                    </h2>
                </div>
                <div ref={teamRef} className="grid lg:grid-cols-2 xl:grid-cols-4 gap-10">
                    {TeamData.slice(3, 7).map((team) => (
                        <TeamCard key={team.id} {...team} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
