import React, { useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    User,
    Mail,
    Baby,
    Cake,
    MessageSquare,
    ChevronDown,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

// Services for dropdown - matches Services section
const CONTACT_SERVICES = [
    { id: "birthday", label: "Birthday Celebrations", color: "#FA4A38" },
    { id: "kids-club", label: "Kids Cooking Club", color: "#B42A63" },
    { id: "summer-camp", label: "Orange Figs Summer Camp", color: "#3BC7D5" },
    { id: "masterclasses", label: "Chef-Led Masterclasses", color: "#366BC4" },
];

const PRIMARY_EMAIL = "go9346089096@gmail.com";
const CC_EMAILS =
    "Chakradhar@theculinarylounge.com";
export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        childName: "",
        childAge: "",
        selectedService: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const selectService = (id, label) => {
        setFormData((prev) => ({ ...prev, selectedService: label }));
        setServiceOpen(false);
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            toast.error("Please enter a valid email.");
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${PRIMARY_EMAIL}?_=${Date.now()}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        _subject: `New Inquiry from ${formData.parentName} - Orange Figs`,
                        _cc: CC_EMAILS,
                        "Parent's Name": formData.parentName,
                        Email: formData.email,
                        "Child's Name": formData.childName,
                        "Child's Age": formData.childAge,
                        "Service of Interest": formData.selectedService || "Not specified",
                        Message: formData.message,
                        _template: "table",
                    }),
                }
            );
            const result = await response.json();
            if (result.success) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                toast.success("Inquiry Sent Successfully!", {
                    description: "We'll get back to you within 24 hours.",
                });
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        parentName: "",
                        email: "",
                        childName: "",
                        childAge: "",
                        selectedService: "",
                        message: "",
                    });
                }, 5000);
            } else {
                throw new Error(result.message || "Failed to send");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            setIsSubmitting(false);
            toast.error("Failed to send inquiry", {
                description: "Please try again or contact us directly.",
            });
        }
    };

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
    };
    const item = {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="contact"
            className="relative min-h-[780px] md:min-h-[860px] flex flex-col items-center justify-center py-16 lg:py-24 overflow-hidden"
            style={{ fontFamily: "'AndesRounded', sans-serif" }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/CL4A3492%20(2).JPG')" }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(249,115,22,0.42) 0%, rgba(251,146,60,0.38) 30%, rgba(251,113,133,0.35) 60%, rgba(244,63,94,0.32) 100%)",
                }}
            />
            <div className="absolute inset-0 bg-black/8" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-20"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,237,213,0.7) 0%, transparent 65%)",
                        animation: "float-blob 12s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-18"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(254,215,170,0.6) 0%, transparent 65%)",
                        animation: "float-blob 14s ease-in-out infinite 2s",
                    }}
                />
                <div
                    className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-12"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,228,196,0.6) 0%, transparent 60%)",
                        animation: "float-blob 10s ease-in-out infinite 1s",
                    }}
                />
            </div>

            <style>{`
                @keyframes float-blob {
                    0%, 100% { transform: translate(0,0) scale(1); opacity: 0.2; }
                    50% { transform: translate(8px,-12px) scale(1.05); opacity: 0.35; }
                }
                @media (max-width: 768px) {
                    .contact-form-wrapper { backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
                    .contact-form-card { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
                }
            `}</style>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 text-center mb-10"
            >
                <p
                    className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
                    style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}
                >
                    Get In Touch
                </p>
                <h2
                    className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
                    style={{ color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
                >
                    We&apos;d Love to Hear From You
                </h2>
                <p
                    className="text-base sm:text-lg text-white/95 max-w-xl mx-auto leading-relaxed"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.25)" }}
                >
                    Have questions about our cooking classes, camps, or birthday celebrations? Drop us a message and our team will get back to you within 24 hours.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-[540px] mx-auto px-4 sm:px-6"
            >
                <div
                    className="contact-form-wrapper absolute -inset-8 rounded-[36px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                />
                <div className="mb-6">
                    <p
                        className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-2"
                        style={{
                            color: "#fff",
                            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                        }}
                    >
                        Contact
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight"
                        style={{
                            color: "#fff",
                            textShadow: "0 2px 14px rgba(0,0,0,0.45), 0 4px 28px rgba(0,0,0,0.25)",
                        }}
                    >
                        Send an inquiry
                    </h2>
                    <p
                        className="text-[15px] leading-relaxed max-w-md"
                        style={{
                            color: "rgba(255,255,255,0.98)",
                            textShadow: "0 1px 8px rgba(0,0,0,0.35)",
                        }}
                    >
                        Share your details and we&apos;ll get back to you
                        within 24 hours.
                    </p>
                </div>
                <div
                    className="contact-form-card relative rounded-[28px] p-8 sm:p-10"
                    style={{
                        background: "rgba(255,255,255,0.93)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow:
                            "0 32px 64px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.6), 0 0 80px -20px rgba(249,115,22,0.15)",
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                variants={container}
                                initial="hidden"
                                animate="show"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <motion.div
                                    variants={item}
                                    className="grid sm:grid-cols-2 gap-6"
                                >
                                    <FormField
                                        label="Parent's name"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        placeholder="e.g. Sarah Johnson"
                                        icon={User}
                                        required
                                    />
                                    <FormField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        icon={Mail}
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    variants={item}
                                    className="grid sm:grid-cols-2 gap-6"
                                >
                                    <FormField
                                        label="Child's name"
                                        name="childName"
                                        value={formData.childName}
                                        onChange={handleChange}
                                        placeholder="Optional"
                                        icon={Baby}
                                    />
                                    <FormField
                                        label="Child's age"
                                        name="childAge"
                                        type="text"
                                        value={formData.childAge}
                                        onChange={handleChange}
                                        placeholder="e.g. 8"
                                        icon={Cake}
                                    />
                                </motion.div>

                                {/* Services selection */}
                                <motion.div variants={item}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service of interest
                                    </label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setServiceOpen((o) => !o)
                                            }
                                            className="w-full h-12 pl-11 pr-10 rounded-full border border-[#E5E7EB] bg-white text-gray-900 text-[15px] text-left transition-all duration-300 hover:border-gray-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/15 outline-none flex items-center justify-between"
                                        >
                                            <span
                                                className={
                                                    formData.selectedService
                                                        ? "text-gray-900"
                                                        : "text-gray-400"
                                                }
                                            >
                                                {formData.selectedService ||
                                                    "Select a service"}
                                            </span>
                                            <ChevronDown
                                                size={18}
                                                className="text-gray-400 shrink-0 transition-transform"
                                                style={{
                                                    transform: serviceOpen
                                                        ? "rotate(180deg)"
                                                        : "rotate(0)",
                                                }}
                                            />
                                        </button>
                                        {serviceOpen && (
                                            <div
                                                className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-[#E5E7EB] bg-white shadow-lg overflow-hidden z-20"
                                                style={{
                                                    boxShadow:
                                                        "0 12px 40px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                {CONTACT_SERVICES.map(
                                                    (s) => (
                                                        <button
                                                            key={s.id}
                                                            type="button"
                                                            onClick={() =>
                                                                selectService(
                                                                    s.id,
                                                                    s.label
                                                                )
                                                            }
                                                            className="w-full px-4 py-3.5 text-left text-[15px] text-gray-800 hover:bg-gray-50 transition-colors"
                                                        >
                                                            {s.label}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    {serviceOpen && (
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={() =>
                                                setServiceOpen(false)
                                            }
                                            aria-hidden="true"
                                        />
                                    )}
                                </motion.div>

                                <motion.div variants={item}>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message
                                    </label>
                                    <div className="relative">
                                        <MessageSquare
                                            className="absolute left-4 top-4 w-4 h-4 text-gray-400 pointer-events-none"
                                            strokeWidth={1.8}
                                        />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your child and what you're looking for..."
                                            required
                                            rows={4}
                                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#E5E7EB] bg-white text-gray-900 placeholder:text-gray-400 resize-none text-[15px] transition-all duration-300 hover:border-gray-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/15 outline-none"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={item} className="pt-1">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full h-14 rounded-full font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #F97316 0%, #F85A3E 25%, #FB7185 60%, #F43F5E 100%)",
                                            color: "white",
                                            boxShadow:
                                                "0 8px 28px rgba(249,115,22,0.4), 0 2px 8px rgba(244,63,94,0.2)",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!e.currentTarget.disabled) {
                                                e.currentTarget.style.boxShadow =
                                                    "0 16px 40px rgba(249,115,22,0.5), 0 8px 20px rgba(244,63,94,0.25)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow =
                                                "0 8px 28px rgba(249,115,22,0.4), 0 2px 8px rgba(244,63,94,0.2)";
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send message
                                                <ArrowRight
                                                    size={20}
                                                    strokeWidth={2.5}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="text-center py-12 sm:py-14 space-y-5"
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                                    style={{
                                        background: "rgba(255,244,220,0.95)",
                                        color: "#F97316",
                                    }}
                                >
                                    <CheckCircle2 size={32} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    Thank you
                                </h3>
                                <p className="text-gray-600 text-[15px] max-w-sm mx-auto leading-relaxed">
                                    Thanks
                                    {formData.parentName
                                        ? ` ${formData.parentName}`
                                        : ""}
                                    . We&apos;ll be in touch within 24 hours.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

const FormField = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    icon: Icon,
    required = false,
}) => (
    <div>
        <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-2"
        >
            {label}
        </label>
        <div className="relative">
            {Icon && (
                <Icon
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    strokeWidth={1.8}
                />
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full h-12 pl-11 pr-4 rounded-full border border-[#E5E7EB] bg-white text-gray-900 placeholder:text-gray-400 text-[15px] transition-all duration-300 hover:border-gray-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/15 outline-none"
            />
        </div>
    </div>
);
