import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';

const socialPosts = [
    {
        id: 1,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
        likes: '1.2k',
        comments: '45'
    },
    {
        id: 2,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1590424753062-3251f4912dff?auto=format&fit=crop&q=80',
        likes: '850',
        comments: '22'
    },
    {
        id: 3,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
        likes: '2.1k',
        comments: '110'
    },
    {
        id: 4,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1588195541006-218206263884?auto=format&fit=crop&q=80',
        likes: '1.5k',
        comments: '64'
    }
];

const SocialCard = ({ post, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.8 }}
            className="group relative aspect-[9/16] rounded-[3rem] overflow-hidden bg-gray-100 cursor-pointer shadow-premium hover:shadow-xl transition-shadow duration-700"
        >
            <div className="absolute inset-0 z-0 h-full w-full">
                <img
                    src={post.thumbnail}
                    alt="Social post"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
            </div>

            {/* Content Overlay with 3D Pop */}
            <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
                style={{ transform: "translateZ(60px)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-20 flex flex-col items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-12 group-hover:translate-y-0">
                    <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-2xl"
                    >
                        <Play fill="white" size={32} className="ml-1" />
                    </motion.div>

                    <div className="flex gap-8 text-white text-xl font-black tracking-tighter">
                        <span className="flex items-center gap-2 drop-shadow-2xl">
                            <Heart size={20} className="fill-white" /> {post.likes}
                        </span>
                        <span className="flex items-center gap-2 drop-shadow-2xl">
                            <MessageCircle size={20} className="fill-white" /> {post.comments}
                        </span>
                    </div>
                </div>
            </div>

            {/* Social Icon Corner */}
            <div
                className="absolute top-8 right-8 w-14 h-14 rounded-[1.25rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white z-20 shadow-2xl group-hover:bg-orange-500 group-hover:border-orange-400 transition-all duration-500"
                style={{ transform: "translateZ(40px)" }}
            >
                <Instagram size={28} />
            </div>
        </motion.div>
    );
};

export const SocialVideos = () => {
    return (
        <section className="pt-0 pb-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-orange-100 bg-orange-50/50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 shadow-sm"
                    >
                        <Instagram size={18} />
                        Live from the Kitchen
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9]"
                    >
                        Kitchen in <span className="gradient-text">Motion.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="pt-6"
                    >
                        <a
                            href="https://www.instagram.com/orangefigs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-white px-10 py-4 rounded-[1.5rem] font-black text-[13px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-premium hover:shadow-orange-200 flex items-center gap-4 w-fit mx-auto group"
                        >
                            Follow @orangefigs
                            <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* 3D Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {socialPosts.map((post, index) => (
                        <SocialCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
