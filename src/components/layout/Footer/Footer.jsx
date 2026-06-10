import { Link } from 'react-router-dom'
import SocialIcons from '../../ui/SocialIcons'
import React from "react";

const Footer = () => {
    return (
        <div className='bg-primary pt-[8%] px-4'>
            <footer className='container pb-10 mx-auto text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 border-b border-gray-50/10'>
                {/* Working Hours */}
                <div className="footer-item">
                    <h3 className='text-xl font-semibold mb-6'>Working Hours</h3>
                    <ul className='space-y-3'>
                        <li>
                            <span className='text-muted font-light'>Mon-Fri: 9 AM – 6 PM</span>
                        </li>
                        <li>
                            <span className='text-muted font-light'>Saturday: 9 AM – 4 PM</span>
                        </li>
                        <li>
                            <span className='text-muted font-light'>Sunday: Closed</span>
                        </li>
                    </ul>
                </div>

                {/* Office */}
                <div className="footer-item">
                    <h3 className='text-xl font-semibold mb-6'>Office</h3>
                    <ul>
                        <li>
                            <p className='text-muted font-light pb-5'>
                                The USA — 785 15th Street, Office 478, Boston, MD 02130
                            </p>
                        </li>
                        <li>
                            <Link to="#" className='text-muted font-light pb-2 block text-lg hover:underline transition-all duration-300 hover:text-white'>
                                info@example.com
                            </Link>
                            <span className='text-xl tracking-tight'>+91 12345 67890</span>
                        </li>
                    </ul>
                </div>

                {/* Links */}
                <div className="footer-item links">
                    <h3 className='text-xl font-semibold mb-6'>Links</h3>
                    <ul className='space-y-3 w-fit'>
                        <li className='w-fit'><Link to="/">Home</Link></li>
                        <li className='w-fit'><Link to="/about">About Us</Link></li>
                        <li className='w-fit'><Link to="/shop">Shop</Link></li>
                        <li className='w-fit'><Link to="/blogS">Blogs</Link></li>
                        <li className='w-fit'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="footer-item social">
                    <h3 className='text-xl font-semibold mb-6'>Get in Touch</h3>
                    <SocialIcons />
                </div>
            </footer>

            {/* Footer Bottom */}
            <div className="container py-6 text-muted mx-auto text-center">
                <p className='link-bottom'>
                    <Link to="https://uicode.in/" className='text-white font-semibold cursor-pointer'>
                        UIcode
                    </Link> © {new Date().getFullYear()}. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;