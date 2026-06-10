import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useParams } from "react-router-dom";
import PageBanner from "../components/ui/PageBanner";
import galleryData from "../assets/Data/GalleryData.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const GalleryDetails = () => {
    const galleryRef = useRef();
    const { id } = useParams();
    const gallery = galleryData.find((g) => g.id === parseInt(id));

    if (!gallery) return <p className="text-center mt-10">Gallery not found!</p>;

    const [mainImage, setMainImage] = useState(gallery.image1);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const left = galleryRef.current.querySelector(".gallery-left");
            const right = galleryRef.current.querySelector(".gallery-right");
            const mainImage = galleryRef.current.querySelector(".main-image");
            const paragraphs = galleryRef.current.querySelectorAll(".text-paragraph");
            const images = galleryRef.current.querySelectorAll(".image");
            const lastSection = galleryRef.current.querySelectorAll(".centered-row");

            // LEFT PANEL
            if (left) {
                gsap.from(left, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: left,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // MAIN IMAGE / SWIPER
            gsap.from(mainImage, {
                scale: 0.95,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: mainImage,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // RIGHT TEXT (STAGGER)
            gsap.from(paragraphs, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: right,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // IMAGE BLOCKS
            gsap.from(images, {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: images[0],
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // LAST SECTION (TEXT + IMAGE)
            gsap.from(lastSection, {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: lastSection[0],
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

        }, galleryRef);

        return () => ctx.revert();
    }, []);
    return (
        <>
            <PageBanner
                title="Gallery Details"
                currentPage="Gallery Details"
                productName={gallery.title}
            />

            <div ref={galleryRef} className="container mx-auto px-4 py-[8%]">
                <h3 className="heading-1 mb-14">{gallery.title}</h3>
                <div className="section-container p-0! gap-10 lg:gap-14">
                    {(gallery.Client || gallery.Date || gallery.Year || gallery.Author) && (
                        <div className="w-full lg:w-[30%] lg:sticky top-[8em] left-0 gallery-left">
                            <ul className="lg:max-w-60 space-y-4">
                                {gallery.Client && (
                                    <li className="centered-row justify-between">
                                        <span className="text-heading text-lg font-semibold">Client</span>
                                        <span className="text-lg text-muted font-light">{gallery.Client}</span>
                                    </li>
                                )}
                                {(gallery.Date || gallery.Year) && (
                                    <li className="centered-row justify-between">
                                        <span className="text-heading text-lg font-semibold">
                                            {gallery.Date && gallery.Year ? "Date & Year" : gallery.Date ? "Date" : "Year"}
                                        </span>
                                        <span className="text-lg text-muted font-light">
                                            {gallery.Date && gallery.Year
                                                ? `${gallery.Date} / ${gallery.Year}`
                                                : gallery.Date
                                                    ? gallery.Date
                                                    : gallery.Year}
                                        </span>
                                    </li>
                                )}
                                {gallery.Author && (
                                    <li className="centered-row justify-between">
                                        <span className="text-heading text-lg font-semibold">Author</span>
                                        <span className="text-lg text-muted font-light">{gallery.Author}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                    <div
                        className={`gallery-right ${gallery.Client || gallery.Date || gallery.Year || gallery.Author
                            ? "w-full lg:w-[70%]"
                            : "w-full lg:w-full flex justify-center flex-col"
                            }`}
                    >
                        <div className="main-image w-full relative">
                            <div className="absolute -top-16 right-4 flex gap-4 z-10">
                                <button className="gly-prev w-12 h-12 border items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer sm:flex hidden">
                                    <ArrowLeft size={20} />
                                </button>

                                <button className="gly-next w-12 h-12 border items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer sm:flex hidden">
                                    <ArrowRight size={20} />
                                </button>
                            </div>

                            {gallery.swiperimage1 ? (
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    className="rounded  h-150 lg:h-200"
                                    navigation={{
                                        prevEl: ".gly-prev",
                                        nextEl: ".gly-next"
                                    }}
                                >
                                    {[gallery.image1, gallery.image2, gallery.image3, gallery.image4, gallery.swiperimage1, gallery.swiperimage2, gallery.swiperimage3].map(
                                        (img, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img
                                                    src={img}
                                                    alt={`${gallery.title} ${idx + 1}`}
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                            ) : (
                                <img
                                    src={mainImage}
                                    alt={gallery.title}
                                    className="w-full h-full object-cover rounded"
                                />
                            )}

                        </div>

                        <h3 className="text-3xl lg:text-4xl font-semibold pt-8 pb-5">Wood Sliding Doors</h3>
                        <p className="text-paragraph pb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium unde quae officiis, dignissimos sit quis adipisci voluptas consectetur explicabo blanditiis illo, quidem delectus.
                        </p>

                        <div className="centered-row justify-between flex-col lg:flex-row  gap-3 w-full h-auto lg:h-90">
                            <div className="image group overflow-hidden rounded-sm h-full w-full">
                                <img src={gallery.image2} alt="gallery-image" className="section-image group-hover:scale-110 transition-all duration-300" />
                            </div>
                            <div className="image group overflow-hidden rounded-sm h-full w-full">
                                <img src={gallery.image3} alt="gallery-image" className="section-image group-hover:scale-110 transition-all duration-300" />
                            </div>
                        </div>

                        <p className="text-paragraph py-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque nihil aspernatur! Voluptates ad laboriosam in, iure dolore facilis dolor dolorem doloremque fugiat iusto. Ducimus nulla commodi non placeat nemo possimus illum, veritatis iusto consequuntur atque! Accusamus aliquam praesentium officia.
                        </p>

                        <div className="centered-row justify-between flex-col xl:flex-row items-start! gap-10">

                            <div className="w-full xl:w-1/2">
                                <p className="text-paragraph pb-8">
                                    Interior design is about creating spaces that are both functional and visually appealing.
                                    By combining colors, textures, furniture, and lighting, a room can be transformed into
                                    a comfortable and stylish environment that reflects personality and lifestyle.
                                </p>

                                <h4 className="text-2xl font-medium text-heading pb-3">Elegant and Functional Spaces</h4>
                                <p className="text-paragraph pb-8">
                                    A well-designed interior balances beauty with practicality. From modern living rooms
                                    to cozy bedrooms, thoughtful layouts and carefully selected materials help create
                                    spaces that feel welcoming, organized, and timeless.
                                </p>

                                <h4 className="text-2xl font-medium text-heading pb-3">Design that Reflects Your Style</h4>
                                <p className="text-paragraph pb-8">
                                    Interior design allows you to express your unique taste through furniture, decor,
                                    lighting, and color palettes. Whether it’s minimal, contemporary, or classic, the
                                    right design choices bring harmony and comfort to every corner of your home.
                                </p>
                            </div>

                            <div className="w-full xl:w-1/2">
                                <img src={gallery.image4} alt="Interior Design" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryDetails;