import React, { useEffect, useState } from 'react';
import { Star, ArrowRight, Play, ChefHat, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FloatingElement = ({ delay, duration, children, className }) => (
    <motion.div
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className={`absolute pointer-events-none z-0 ${className}`}
    >
        {children}
    </motion.div>
);

export const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.97]);
    const yTransform = useTransform(scrollY, [0, 1000], [0, 200]);
    const springY = useSpring(yTransform, { stiffness: 100, damping: 30 });

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const textReveal = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }
        })
    };

    return (
        <motion.section style={{ opacity, scale }} className="relative min-h-[95vh] lg:min-h-screen flex bg-[#FFFBF5] overflow-hidden">
            {/* Premium Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-orange-200/20 blur-[120px]" />
                <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full bg-amber-200/15 blur-[100px]" />

                {/* Floating Abstract Shapes */}
                <FloatingElement delay={0} duration={8} className="top-1/4 left-10 text-orange-200/40">
                    <ChefHat size={120} strokeWidth={0.5} />
                </FloatingElement>
                <FloatingElement delay={2} duration={10} className="bottom-1/4 right-20 text-amber-200/40">
                    <Sparkles size={80} strokeWidth={0.5} />
                </FloatingElement>

                {/* Subtle Text Overlays */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
                    <span className="text-[30vw] font-black tracking-tighter">BAKE</span>
                </div>
            </div>

            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.025] z-0" style={{
                backgroundImage: 'radial-gradient(circle, #F97316 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <div className="container-custom relative z-10 pt-48 lg:pt-64 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Text */}
                    <div className="space-y-8">
                        <motion.div
                            custom={0} variants={textReveal} initial="hidden" animate="visible"
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-orange-100 shadow-sm"
                        >
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">The #1 Baking Kit for Kids</span>
                        </motion.div>

                        <motion.h1
                            custom={1} variants={textReveal} initial="hidden" animate="visible"
                            className="text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black leading-[0.9] tracking-tight text-gray-900"
                        >
                            Baking The<br />
                            World a <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">Better</span>
                                <motion.svg
                                    className="absolute -bottom-2 left-0 w-full h-3"
                                    viewBox="0 0 200 8"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <motion.path
                                        d="M2 5.5 C 50 1, 150 9.5, 198 4"
                                        stroke="#F97316"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
                                    />
                                </motion.svg>
                            </span><br />
                            Place.
                        </motion.h1>

                        <motion.p
                            custom={2} variants={textReveal} initial="hidden" animate="visible"
                            className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed font-medium"
                        >
                            Premium baking kits delivered monthly. Real recipes, professional tools, and family memories served in every box.
                        </motion.p>

                        <motion.div custom={3} variants={textReveal} initial="hidden" animate="visible" className="flex flex-wrap gap-5 items-center">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button onClick={() => scrollToSection('contact')}
                                    className="h-16 px-10 rounded-2xl bg-gray-900 text-white font-bold text-base shadow-2xl shadow-gray-200 hover:bg-orange-600 hover:shadow-orange-200 transition-all border-0 flex items-center gap-3 group">
                                    Start Baking Today <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </Button>
                            </motion.div>
                            <motion.button
                                whileHover={{ x: 5 }}
                                onClick={() => scrollToSection('gallery')}
                                className="flex items-center gap-4 text-gray-900 font-bold group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                                    <Play size={18} className="text-orange-500 fill-orange-500 ml-1" />
                                </div>
                                <span className="text-sm uppercase tracking-widest font-black">Watch Film</span>
                            </motion.button>
                        </motion.div>

                        {/* Social proof */}
                        <motion.div custom={4} variants={textReveal} initial="hidden" animate="visible" className="flex items-center gap-6 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-orange-100 flex items-center justify-center text-orange-600 font-black text-xs shadow-lg">
                                    12k+
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
                                </div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Rated <span className="text-orange-500">Excellent</span> by Parents</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Image */}
                    <motion.div
                        style={{ y: springY }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="relative"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-[-10%] bg-orange-400/20 rounded-[4rem] blur-[100px] animate-pulse [animation-duration:10s] z-0" />

                        {/* Liquid Shape Background */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-orange-100/40 via-amber-100/40 to-orange-50/40 blur-3xl animate-liquid z-0" />

                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 1, -1, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative rounded-[3.5rem] overflow-hidden shadow-xl z-10 border-[12px] border-white/80 backdrop-blur-sm aspect-[4/5]"
                        >
                            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80" alt="Kids cooking" className="w-full h-full object-cover scale-105" />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};
