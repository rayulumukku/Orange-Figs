import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from 'sonner';
import { X } from 'lucide-react';

import { cloudinaryOpt } from '../data/mock';

// Email recipients for registration popup
const PRIMARY_EMAIL = "go9346089096@gmail.com";
const CC_EMAILS = "dasaradharam109@gmail.com";

export const RegistrationPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    // Popup image: high-res for clarity (w=1200), preload for crisp display
    const popupImg = cloudinaryOpt("https://res.cloudinary.com/dg5qkp09h/image/upload/v1772797665/DSC07638_l4fttd.jpg", 1200);
    useEffect(() => {
        const img = new Image();
        img.src = popupImg;
    }, [popupImg]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = localStorage.getItem('hasSeenRegistrationPopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${PRIMARY_EMAIL}?_=${Date.now()}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify({
                    _subject: `New Registration from ${formData.name} - Orange Figs`,
                    _cc: CC_EMAILS,
                    "Name": formData.name,
                    "Phone No.": formData.phone,
                    "Email ID": formData.email,
                    _template: "table",
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success('Thank you for registering! We will contact you soon.');
                localStorage.setItem('hasSeenRegistrationPopup', 'true');
                setIsOpen(false);
                setFormData({ name: '', phone: '', email: '' });
            } else {
                throw new Error(result.message || "Failed to send");
            }
        } catch (error) {
            console.error('Failed to send registration:', error);
            toast.error("Failed to submit. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent hideClose className="w-[90vw] sm:max-w-[850px] p-0 overflow-y-auto overflow-x-hidden border-[4px] border-orange-400 rounded-3xl md:rounded-[3.5rem] bg-white shadow-2xl flex flex-col md:flex-row h-auto md:h-[520px] max-h-[90vh]">
                {/* Left side: Image */}
                <div className="relative w-full md:w-1/2 h-40 md:h-full bg-gray-100 flex-shrink-0">
                    <img
                        src={popupImg}
                        alt="Cooking"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    {/* Wavy Separator for Desktop */}
                    <div className="absolute top-0 -right-1 h-full w-24 z-10 hidden md:block">
                        <svg viewBox="0 0 100 500" preserveAspectRatio="none" className="h-full w-full fill-white">
                            <path d="M0,0 C50,150 50,350 0,500 L100,500 L100,0 Z" />
                        </svg>
                    </div>
                </div>

                {/* Right side: Form */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center text-center relative flex-shrink-0">
                    <DialogClose className="absolute right-3 top-3 md:right-6 md:top-6 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors">
                        <X size={20} />
                    </DialogClose>

                    <div className="space-y-5 md:space-y-6 max-w-[320px] mx-auto">
                        <div className="flex flex-col items-center gap-2 md:gap-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                Get latest updates!
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="h-12 px-6 rounded-full border-orange-200 bg-orange-50/30 text-center text-base font-medium focus:ring-2 focus:ring-orange-400/30"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <Input
                                type="tel"
                                name="phone"
                                placeholder="Phone No."
                                required
                                className="h-12 px-6 rounded-full border-orange-200 bg-orange-50/30 text-center text-base font-medium focus:ring-2 focus:ring-orange-400/30"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                required
                                className="h-12 px-6 rounded-full border-orange-200 bg-orange-50/30 text-center text-base font-medium focus:ring-2 focus:ring-orange-400/30"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-xl shadow-xl shadow-orange-500/30 transition-all active:scale-95 disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Register"}
                            </Button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
