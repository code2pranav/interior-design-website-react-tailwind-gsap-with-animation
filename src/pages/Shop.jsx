import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProductCard from "../components/ui/Cards/ProductCard";
import productsData from "../assets/Data/ProductData.json";
import { Search, ChevronDown, Filter } from "lucide-react";
import PageBanner from "../components/ui/PageBanner";
import { Icon } from "@iconify/react";


gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
    const [products, setProducts] = useState(productsData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("latest");
    const [priceRange, setPriceRange] = useState(300);
    const [selectedTag, setSelectedTag] = useState("All");

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const tags = ["All", "Discount", "Item", "Simple", "Smart", "Stock"];

    // Extract unique categories
    const allCategories = ["All", ...new Set(productsData.flatMap(p => p.categories.split(',')))];

    // --- Filtering & Sorting Logic ---
    useEffect(() => {
        let filtered = productsData.filter((product) => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || product.categories.includes(selectedCategory);
            const matchesPrice = product.price <= priceRange;
            // Filter by tags (using categories as a fallback if tags aren't in your JSON)
            const matchesTag = selectedTag === "All" || product.categories.includes(selectedTag);

            return matchesSearch && matchesCategory && matchesPrice && matchesTag;
        });

        // Sorting
        if (sortOption === "low-to-high") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "high-to-low") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === "popularity") {
            filtered.sort((a, b) => b.id - a.id);
        }

        setProducts(filtered);
        setCurrentPage(1); // Reset to page 1 when filters change
    }, [searchTerm, selectedCategory, sortOption, priceRange, selectedTag]);

    // --- Pagination Calculations ---
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll to top of grid
    };


    const sidebarRef = useRef();
    const mainRef = useRef();

    useEffect(() => {
        if (!sidebarRef.current) return;

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(sidebarRef);
            const boxes = q(".sidebar-box");

            boxes.forEach((box) => {
                const title = box.querySelector(".sidebar-title");
                const content = box.querySelector(".sidebar-content");

                // 🔥 Title
                gsap.from(title, {
                    x: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: box,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });

                // 🔥 Content
                gsap.from(content, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: box,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });

        }, sidebarRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!mainRef.current) return;

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(mainRef);

            // 🔥 Top bar
            gsap.from(q(".top-bar"), {
                y: -40,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".top-bar"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Product cards
            gsap.from(q(".product-grid > *"), {
                y: 60,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".product-grid"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Pagination
            gsap.from(q(".pagination"), {
                y: 40,
                opacity: 0,
                duration: 0.6,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".pagination"),
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // 🔥 Empty state
            gsap.from(q(".empty-state"), {
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: q(".empty-state"),
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

        }, mainRef);

        return () => ctx.revert();
    }, [currentProducts]);
    
    return (
        <>
            <PageBanner title="Shop" currentPage="Shop" />

            <div className="bg-light-yellow">
                <div className="container mx-auto px-4 py-[8%]">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* --- Main Content --- */}
                        <main ref={mainRef} className="w-full lg:w-3/4 order-1 lg:order-2">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 top-bar">
                                <p className="text-gray-500 italic">
                                    Showing {products.length > 0 ? indexOfFirstProduct + 1 : 0}–{Math.min(indexOfLastProduct, products.length)} of {products.length} results
                                </p>

                                <div className="relative group">
                                    <select
                                        className="appearance-none bg-white border px-6 py-2 pr-10 rounded shadow-sm outline-none cursor-pointer focus:ring-2 ring-teal-500/20"
                                        onChange={(e) => setSortOption(e.target.value)}
                                    >
                                        <option value="latest">Sort by latest</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="low-to-high">Price: low to high</option>
                                        <option value="high-to-low">Price: high to low</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16} />
                                </div>
                            </div>

                            {/* Product Grid */}
                            {currentProducts.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 product-grid">
                                        {currentProducts.map((item) => (
                                            <ProductCard key={item.id} product={item} />
                                        ))}
                                    </div>

                                    {/* Pagination Controls */}
                                    {totalPages > 1 && (
                                        <div className="flex justify-center items-center mt-12 gap-2 pagination">
                                            <button
                                                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="p-2 border rounded-sm hover:bg-primary hover:text-white disabled:opacity-30 transition-all cursor-pointer"
                                            >
                                                <Icon icon="mdi:chevron-left" width="24" />
                                            </button>

                                            {[...Array(totalPages)].map((_, index) => (
                                                <button
                                                    key={index + 1}
                                                    onClick={() => handlePageChange(index + 1)}
                                                    className={`w-10 h-10 border rounded-sm transition-all cursor-pointer ${currentPage === index + 1
                                                        ? "bg-primary text-white border-primary"
                                                        : "bg-white text-gray-600 hover:border-primary hover:text-primary"
                                                        }`}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}

                                            <button
                                                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                                disabled={currentPage === totalPages}
                                                className="p-2 border rounded-sm hover:bg-primary hover:text-white disabled:opacity-30 transition-all cursor-pointer"
                                            >
                                                <Icon icon="mdi:chevron-right" width="24" />
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-20 bg-white rounded-xl shadow-inner empty-state">
                                    <Filter className="mx-auto text-gray-300 mb-4" size={48} />
                                    <h3 className="text-xl font-medium text-gray-500">No products match your filters.</h3>
                                </div>
                            )}
                        </main>

                        {/* --- Sidebar --- */}
                        <aside ref={sidebarRef} className="w-full lg:w-1/4 space-y-8 order-2 lg:order-1">
                            {/* Search */}
                            <div className="bg-white p-6 rounded-sm shadow-sm sidebar-box">
                                <h3 className="text-xl font-medium mb-4 sidebar-title">Search</h3>
                                <div className="relative sidebar-content">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full border p-2 pl-10 rounded-md outline-none focus:border-primary"
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white p-6 rounded-sm shadow-sm sidebar-box">
                                <h3 className="text-xl font-medium mb-4 sidebar-title">Categories</h3>
                                <ul className="space-y-2 sidebar-content">
                                    {allCategories.map(cat => (
                                        <li
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`cursor-pointer transition-colors ${selectedCategory === cat ? 'text-primary font-bold' : 'text-gray-600 hover:text-black'}`}
                                        >
                                            {cat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price Filter */}
                            <div className="bg-white p-6 rounded-sm shadow-sm sidebar-box">
                                <h3 className="text-xl font-medium mb-4 sidebar-title">Filter by Price</h3>
                                <div className="sidebar-content">
                                    <input
                                        type="range"
                                        min="0"
                                        max="300"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="w-full accent-primary"
                                    />
                                    <div className="flex justify-between text-sm mt-2 font-medium">
                                        <span>$0</span>
                                        <span>Max: ${priceRange}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tags Filter */}
                            <div className="bg-white p-6 rounded-sm shadow-sm sidebar-box">
                                <h3 className="text-xl font-medium mb-4 sidebar-title">Tags</h3>
                                <div className="flex flex-wrap gap-2 sidebar-content">
                                    {tags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => setSelectedTag(tag)}
                                            className={`text-sm border px-3 py-1 transition-all duration-300 cursor-pointer ${selectedTag === tag
                                                ? "bg-primary text-white border-primary"
                                                : "border-gray-200 text-gray-500 hover:border-primary hover:text-primary"
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;