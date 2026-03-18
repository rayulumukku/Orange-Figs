import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Youtube,
    Linkedin,
} from "lucide-react";
import { contactInfo } from "../data/mock";
import { motion } from "framer-motion";
import logo from "../assets/oflogo.png";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "School",
            links: [
                { name: "Our Classes", href: "#classes" },
                { name: "Why Us", href: "#why" },
                { name: "Little Chefs (4-6)", href: "#classes" },
                { name: "Junior Culinary (7-12)", href: "#classes" },
                { name: "Teen Masterclass", href: "#classes" },
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Parents Portal", href: "#" },
                { name: "Gallery", href: "#gallery" },
                { name: "School Events", href: "#events" },
                { name: "Gift Cards", href: "#" },
                { name: "Kids Safety", href: "#why" },
                { name: "Healthy Habits", href: "#why" },
            ],
        },
    ];

    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/orangefigsofficial/?hl=en", label: "Instagram" },
        { icon: Youtube, href: "https://www.youtube.com/@orangefigsofficial8345/featured", label: "YouTube" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/orange-figs/posts/?feedView=all", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-white mt-8 mb-2 relative overflow-hidden">
            {/* Ambient Brand Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,85,0,0.03),transparent_50%)] pointer-events-none" />

            <div className="container-custom py-4 relative z-10">
                {/* Top Grid */}
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Brand */}
                    <div className="lg:col-span-5 space-y-3">
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="Orange Figs" loading="lazy" className="w-14 h-14 object-contain" />
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
                            Nurturing the next generation of culinary creators through
                            creativity, safety, and joy in every dish.
                            We are a team of passionate chefs and educators dedicated to
                            providing a fun, safe, and inspiring environment for children to
                            explore the world of cooking.
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-9 h-9 rounded-lg border border-orange-100 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-5">
                        {footerLinks.map((group, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                    {group.title}
                                </h4>
                                <ul className="space-y-1.5">
                                    {group.links.map((link, j) => (
                                        <li key={j}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-gray-600 hover:text-orange-500 font-medium transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3 space-y-2">
                        <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                            Contact
                        </h4>

                        <div className="space-y-2 text-sm text-gray-600 font-medium">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 group cursor-pointer hover:text-orange-500 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <MapPin size={14} />
                                </span>
                                <span className="pt-1">{contactInfo.address}</span>
                            </a>

                            <a
                                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                                className="flex items-center gap-3 group cursor-pointer hover:text-orange-500 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Phone size={14} />
                                </span>
                                <span>{contactInfo.phone}</span>
                            </a>

                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center gap-3 group cursor-pointer hover:text-orange-500 transition-colors"
                            >
                                <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Mail size={14} />
                                </span>
                                <span>{contactInfo.email}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-3 pt-3 border-t border-orange-100/50 flex flex-col md:flex-row items-center justify-between gap-2 text-[13px] text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                        © {currentYear} <span className="text-orange-600 font-bold">Orange Figs</span>. All rights reserved.
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#!" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                        <a href="#!" className="hover:text-orange-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};