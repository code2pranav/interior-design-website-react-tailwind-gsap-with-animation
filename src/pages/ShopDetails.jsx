
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useParams } from "react-router-dom";
import ProductData from "../assets/Data/ProductData.json";
import { Facebook, Instagram, Minus, Plus, Twitter } from "lucide-react";
import MainBtn from "../components/ui/Buttons/MainBtn";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ProductCard from "../components/ui/Cards/ProductCard";
import PageBanner from "../components/ui/PageBanner";
import { useCart } from "../hooks/useCart";

const ShopDetails = () => {
    const { id } = useParams();
    const product = ProductData.find(p => p.id === parseInt(id));
    const shopRef = useRef();
    const headingRef = useRef();
    const productRef = useRef();
    const peraRef = useRef();
    const { addToCart } = useCart();

    if (!product) return <p className="p-6 text-xl">Product not found!</p>;

    const [qty, setQty] = useState(1);

    const increase = () => {
        setQty(qty + 1);
    };

    const decrease = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    // Related Products
    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = shopRef.current.querySelectorAll(".product-card"); // make sure ProductCard has this class

            gsap.from(cards, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: shopRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, shopRef);

        return () => ctx.revert();
    }, []);

    // Heading 
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 50,           // slide up
                opacity: 0,      // fade in
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        }, headingRef);

        return () => ctx.revert();
    }, []);

    // Product Details
    useEffect(() => {
        const ctx = gsap.context(() => {
            const imageSection = productRef.current.querySelector(".product-image");
            const contentSection = productRef.current.querySelector(".product-content");

            // ✅ FIX: select each LI not UL
            const thumbs = productRef.current.querySelectorAll(".thumb-item");
            const thumbWrapper = productRef.current.querySelector(".thumbnail-list");

            // LEFT IMAGE
            gsap.from(imageSection, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageSection,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // RIGHT CONTENT
            const contentItems = contentSection.querySelectorAll(
                "h2, p, .quntity, button, ul li"
            );

            gsap.from(contentItems, {
                x: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentSection,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // ✅ THUMBNAILS ANIMATION (y:20 → 0)
            gsap.fromTo(
                thumbs,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: thumbWrapper, // ✅ correct trigger
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );

        }, productRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!peraRef.current) return; // ✅ safety check

        const ctx = gsap.context(() => {

            const peraText = peraRef.current.querySelectorAll(".pera-text");

            if (peraText.length) {
                gsap.fromTo(
                    peraText,
                    { x: -30, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        stagger: 0.2,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: peraText[0],
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

        }, productRef);

        return () => ctx.revert();
    }, []);


    const images = [product.image3, product.image4, product.image5];

    return (
        <>
            <PageBanner
                title="Shop Details"
                currentPage="Shop Details"
                productName={product.title}
            />

            <div ref={productRef} className="bg-light-yellow pt-[8%] px-4">
                <div className="container mx-auto px-4 section-container gap-10 lg:gap-14">
                    <div className="product-image w-full lg:w-1/2 space-y-8">
                        <Zoom>
                            <img
                                src={product.image2}
                                alt="Main product"
                                className="w-full cursor-zoom-in rounded-sm"
                            />
                        </Zoom>

                        <ul className="thumb-list centered-row justify-between gap-8 flex-col md:flex-row">
                            {images.map((img, index) => (
                                <li key={index} className="thumb-item">
                                    <Zoom>
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index}`}
                                            className="cursor-zoom-in h-55 w-full! object-cover rounded-sm"
                                        />
                                    </Zoom>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="product-content w-full lg:w-1/2">
                        <h2 className="uppercase! text-3xl sm:text-4xl lg:text-5xl font-semibold pb-5">{product.title}</h2>
                        <p className="space-x-2 text-3xl lg:text-4xl pb-8">
                            <span className="line-through text-muted">{product.oldprice} {" "}</span>
                            <span>${product.price}</span>
                        </p>
                        <p className="text-muted font-light pb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptas! Inventore corrupti vel consequatur saepe voluptatem ipsum officia fugit, modi aut dolore debitis earum deserunt cumque illum praesentium expedita ab?
                        </p>
                        <p className="text-muted font-light pb-10">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptas! Inventore corrupti vel consequatur saepe voluptatem ipsum officia fugit, modi aut dolore debitis earum deserunt cumque illum praesentium expedita ab?
                        </p>
                        <div className="centered-row flex-wrap gap-8 pb-12">
                            <div className="quntity bg-white min-w-full lg:min-w-50 centered-row justify-between">
                                <span onClick={decrease} className="cursor-pointer py-5 px-4">
                                    <Minus />
                                </span>
                                <span>{qty}</span>
                                <span onClick={increase} className="cursor-pointer py-5 px-4">
                                    <Plus />
                                </span>
                            </div>
                            <MainBtn onClick={() => addToCart(product)} text={"Add TO Cart"} className="rounded-none! shadow-none! bg-black! text-white! text-[16px]! w-full! lg:w-60! px-12! py-8!" />
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <span className="font-medium">Product Id : </span>
                                <span>{product.id}</span>
                            </li>
                            <li>
                                <span className="font-medium">Categories : </span>
                                <span>{product.categories}</span>
                            </li>
                            <li>
                                <span className="font-medium">Tages : </span>
                                <span>Chair, Color, Decor, Design, Light, Wood</span>
                            </li>
                            <li className="centered-row">
                                <span className="font-medium">Share : </span>
                                <p className="centered-row space-x-3">
                                    <Link to="https://www.facebook.com/" className="cursor-pointer">
                                        <Facebook size={22} />
                                    </Link>
                                    <Link to="https://x.com/" className="cursor-pointer">
                                        <Twitter size={22} />
                                    </Link>
                                    <Link to="https://www.instagram.com/" className="cursor-pointer">
                                        <Instagram size={22} />
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-light-yellow pt-[3%] pb-[8%]">
                <div ref={peraRef} className="container mx-auto px-4">
                    <p className="pera-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam, commodi molestiae, sint neque architecto explicabo quos magnam illum tempora mollitia facilis dicta accusantium dignissimos asperiores ad quasi. Id aliquam ex, iure, odit officiis dolorem, inventore numquam consequuntur ipsum consectetur minima distinctio consequatur illum amet fugit eveniet asperiores? Vitae necessitatibus rerum temporibus beatae consequatur ratione quod ipsa voluptatum recusandae, ab autem reprehenderit, velit amet, totam dolores accusantium. Repellat dolorum voluptatibus consequatur non iure eos, iste, ea accusamus, distinctio nisi quaerat et omnis doloribus deserunt obcaecati ipsa pariatur sunt fugiat cum voluptates unde inventore soluta id hic? Impedit molestiae explicabo rerum fuga! Excepturi aspernatur accusantium quisquam temporibus laboriosam dolorum unde, id ipsam at porro laborum facilis eius dolorem aliquam quas repellat libero, qui laudantium, consequatur reprehenderit labore soluta! Nostrum, nobis alias. Voluptatem ratione, distinctio dolorem cum quis unde ab perspiciatis dicta.
                    </p>

                    <p className="pera-text mb-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam, commodi molestiae, sint neque architecto explicabo quos magnam illum tempora mollitia facilis dicta accusantium dignissimos asperiores ad quasi. Id aliquam ex, iure, odit officiis dolorem, inventore numquam consequuntur ipsum consectetur minima distinctio consequatur illum amet fugit eveniet asperiores? Vitae necessitatibus rerum temporibus beatae consequatur ratione quod ipsa voluptatum recusandae, ab autem reprehenderit, velit amet, totam dolores accusantium. Repellat dolorum voluptatibus consequatur non iure eos, iste, ea accusamus, distinctio nisi quaerat et omnis doloribus deserunt obcaecati ipsa pariatur sunt fugiat cum voluptates unde inventore soluta id hic? Impedit molestiae explicabo rerum fuga! Excepturi aspernatur accusantium quisquam temporibus laboriosam dolorum unde, id ipsam at porro laborum facilis eius dolorem aliquam quas repellat libero, qui laudantium, consequatur reprehenderit labore soluta! Nostrum, nobis alias. Voluptatem ratione, distinctio dolorem cum quis unde ab perspiciatis dicta.
                    </p>

                    <div>
                        <div ref={headingRef} className="w-full mb-16">
                            <span className="title-span">Our shop</span>
                            <h2 className="heading-1 mb-5">
                                Related
                                <span className="text-coffee"> products </span>
                            </h2>
                        </div>

                        <div ref={shopRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
                            {ProductData.slice(12, 16).map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ShopDetails;