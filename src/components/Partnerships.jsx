import React, { useState, useEffect } from "react";

const partners = [
    { name: "Partner 1", logo: "/partner1.jpeg" },
    { name: "Rasam", logo: "/rasamPartnerLogo.png" },
];

export const Partnerships = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    return (
        <section className="relative pt-12 pb-8 lg:pb-10 bg-white overflow-hidden">
            <style>{`
                .section-heading { opacity: 0; transform: translateY(20px); transition: all 0.7s cubic-bezier(.22,1,.36,1) 0.1s; margin-bottom: 16px; }
                .section-heading.on { opacity: 1; transform: translateY(0); }
                .section-label { opacity: 0; transform: translateY(12px); transition: all 0.6s ease 0.15s; margin-bottom: 12px; }
                .section-label.on { opacity: 1; transform: translateY(0); }
            `}</style>
            <div className="container-custom relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <p className={`section-label ${visible ? "on" : ""}`}>Our Partners</p>
                    <h2 className={`section-heading ${visible ? "on" : ""}`}>
                        Partnering with <span className="grad">Industry Leaders</span>
                    </h2>
                    <p className="text-gray-500 text-lg mt-4" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}>
                        Innovation is amplified when excellence collaborates.
                    </p>
                </div>

                {/* Static 5 logos - no animation */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-5xl mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="relative h-24 md:h-28 lg:h-32 w-40 md:w-44 rounded-xl overflow-hidden 
                              bg-white shadow-sm 
                              flex items-center justify-center p-4"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                loading="lazy"
                                className="max-w-full max-h-full object-contain object-center"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};