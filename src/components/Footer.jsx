import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Facebook,
    Youtube,
    Twitter,
} from "lucide-react";
import { contactInfo } from "../data/mock";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

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
        { icon: Instagram, href: "https://instagram.com/orangefigs" },
        { icon: Facebook, href: "https://facebook.com/orangefigs" },
        { icon: Youtube, href: "https://youtube.com/orangefigs" },
        { icon: Twitter, href: "https://twitter.com/orangefigs" },
    ];

    return (
        <footer className="bg-white mt-12 relative overflow-hidden">
            {/* Ambient Brand Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,85,0,0.03),transparent_50%)] pointer-events-none" />

            <div className="container-custom py-10 relative z-10">
                {/* Top Grid */}
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-orange-50/50 rounded-2xl flex items-center justify-center border border-orange-100/50">
                                <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
                            </div>
                            <div>
                                <div className="text-xl font-black tracking-tight text-gray-900 leading-none">
                                    <span className="gradient-text">ORANGE FIGS</span>
                                </div>
                                <div className="text-[10px] font-bold text-orange-500/80 uppercase tracking-[0.3em] mt-1 ml-0.5">
                                    Culinary School
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
                            Nurturing the next generation of culinary creators through
                            creativity, safety, and joy in every dish.
                            We are a team of passionate chefs and educators dedicated to
                            providing a fun, safe, and inspiring environment for children to
                            explore the world of cooking.
                        </p>

                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
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
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerLinks.map((group, i) => (
                            <div key={i} className="space-y-5">
                                <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                    {group.title}
                                </h4>
                                <ul className="space-y-3">
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
                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                            Contact
                        </h4>

                        <div className="space-y-4 text-sm text-gray-600 font-medium">
                            <div className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <MapPin size={14} />
                                </div>
                                <span className="pt-1">{contactInfo.address}</span>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Phone size={14} />
                                </div>
                                <span>{contactInfo.phone}</span>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Mail size={14} />
                                </div>
                                <span>{contactInfo.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-8 border-t border-orange-100/50 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-gray-500 font-medium">
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