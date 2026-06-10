import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PageBanner from '../components/ui/PageBanner'
import blog1 from "/images/Index/Blogs/blog-post-01.jpg"

import blogData from "../assets/Data/Blogs.json";
import BlogListCard from '../components/ui/Cards/BlogListCard';

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {

    const blogRef = useRef();
    useEffect(() => {
        if (!blogRef.current) return;

        const ctx = gsap.context(() => {
            const blogs = blogRef.current.querySelectorAll(".blog-item");
            const sidebar = blogRef.current.querySelector(".sidebar");
            const recentItems = blogRef.current.querySelectorAll(".recent-item");
            const tags = blogRef.current.querySelectorAll(".tag-item");

            // 🔥 Blog list
            gsap.from(blogs, {
                x: -60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: blogRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Sidebar
            if (sidebar) {
                gsap.from(sidebar, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sidebar,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // 🔥 Recent posts
            if (recentItems.length) {
                gsap.from(recentItems, {
                    x: 30,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: recentItems[0],
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // 🔥 Tags
            if (tags.length) {
                gsap.from(tags, {
                    scale: 0.8,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: tags[0],
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                });
            }

        }, blogRef);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <PageBanner
                title="Our Blog"
                currentPage="Our Blog"
            />

            <div ref={blogRef} className='container mx-auto px-4 py-[8%]'>
                <div className='section-container p-0! gap-10 lg:gap-14'>
                    <div className='w-full lg:w-[70%] space-y-5 lg:space-y-8 blog-list'>
                        {blogData.map((blog) => (
                            <BlogListCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                    <div className="w-full lg:w-[30%] bg-white py-12 px-8 shadow-lg lg:sticky top-10 self-start sidebar">
                        <div className='mb-10'>
                            <h3 className="text-xl font-semibold mb-6 title">Recent Posts</h3>
                            <div className="space-y-6">
                                {blogData.slice(0, 2).map((post) => (
                                    <div key={post.id} className="flex gap-4 recent-item">

                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-20 h-20 object-cover rounded-sm"
                                        />

                                        <div>
                                            <p className="text-xs text-gray-500 uppercase mb-2">
                                                {post.category} • {post.date}
                                            </p>

                                            <h4 className="font-semibold leading-snug line-clamp-2">
                                                {post.title}
                                            </h4>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 title">Tags</h3>

                            <ul className="flex flex-wrap gap-3">
                                <li className="border px-4 py-1 text-sm hover:bg-black hover:text-white cursor-pointer transition-all duration-300 tag-item">Interior</li>
                                <li className="border px-4 py-1 text-sm hover:bg-black hover:text-white cursor-pointer transition-all duration-300 tag-item">Furniture</li>
                                <li className="border px-4 py-1 text-sm hover:bg-black hover:text-white cursor-pointer transition-all duration-300 tag-item">Design</li>
                                <li className="border px-4 py-1 text-sm hover:bg-black hover:text-white cursor-pointer transition-all duration-300 tag-item">Architecture</li>
                                <li className="border px-4 py-1 text-sm hover:bg-black hover:text-white cursor-pointer transition-all duration-300 tag-item">Modern</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blogs