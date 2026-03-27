import React, { useEffect, useState } from "react";
import { cloudinaryOpt } from "../data/mock";

const css = `
  @keyframes sj-left  { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
  @keyframes sj-right { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:translateX(0)} }
  @keyframes sj-up    { from{opacity:0;transform:translateY(24px)}  to{opacity:1;transform:translateY(0)} }
  @keyframes sj-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes sj-bob   { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-14px) rotate(3deg)} }
  @keyframes sj-shine { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes sj-glow  { 0%,100%{box-shadow:0 8px 32px rgba(253,216,113,0.45)} 50%{box-shadow:0 8px 32px rgba(253,216,113,0.45),0 0 0 10px rgba(253,216,113,0.0)} }
  .sj-wrap { opacity:1; transition:opacity .25s ease }
  .sj-wrap.on { opacity:1 }
  .sj-wrap.on .s1 { animation:sj-up    .55s cubic-bezier(.34,1.4,.64,1) .05s both }
  .sj-wrap.on .s2 { animation:sj-left  .65s cubic-bezier(.34,1.4,.64,1) .15s both }
  .sj-wrap.on .s3 { animation:sj-left  .65s cubic-bezier(.34,1.4,.64,1) .25s both }
  .sj-wrap.on .s4 { animation:sj-up    .65s cubic-bezier(.34,1.56,.64,1) .35s both }
  .sj-wrap.on .s5 { animation:sj-right .75s cubic-bezier(.34,1.4,.64,1) .20s both }
  .sj-wrap.on .s6 { animation:sj-up    .55s cubic-bezier(.34,1.56,.64,1) .50s both }
  .sj-wrap.on .s7 { animation:sj-up    .55s cubic-bezier(.34,1.56,.64,1) .62s both }
  .sj-float { animation:sj-float 3.6s ease-in-out infinite }
  .sj-bob   { animation:sj-bob   5s   ease-in-out infinite }
  .sj-btn { animation: sj-glow 2.5s ease-in-out infinite; transition: transform .22s cubic-bezier(.34,1.56,.64,1); }
  .sj-btn:hover { transform: translateY(-4px) scale(1.05); animation: none; box-shadow: 0 20px 50px rgba(253,216,113,0.7) !important; }
  .sj-title { background: linear-gradient(90deg, white 30%, #FDD871 48%, white 62%); background-size: 220% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: sj-shine 4s linear infinite; }
  .sj-blob { transition: transform .3s cubic-bezier(.34,1.4,.64,1), box-shadow .3s ease; }
  .sj-blob:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 28px 64px rgba(0,0,0,0.18) !important; }
`;

export default function StartJourneyBanner() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(t);
    }, []);

    const scrollToContact = (e) => {
        e.preventDefault();
        const el = document.getElementById("contact");
        if (el) {
            window.history.pushState(null, "", "#contact");
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <style>{css}</style>
            <div className={`sj-wrap w-full overflow-hidden ${mounted ? "on" : ""}`} style={{ background: "var(--cream, #f7f5f2)" }}>
                {/* Top wave */}
                <svg viewBox="0 0 1440 44" xmlns="http://www.w3.org/2000/svg" className="block w-full" style={{ marginBottom: "-2px" }}>
                    <path fill="#FFF6ED" d="M0,0 C360,44 1080,0 1440,28 L1440,0 Z" />
                </svg>

                <div
                    className="relative overflow-hidden min-h-[320px] md:min-h-[280px]"
                    style={{
                        background: "linear-gradient(130deg,#FCAB52 0%,#FA4A38 52%,#D41450 100%)",
                    }}
                >
                    {/* Glow overlays */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse 65% 90% at 18% 50%, rgba(255,255,255,0.18) 0%, transparent 65%), radial-gradient(ellipse 45% 70% at 88% 30%, rgba(253,216,113,0.22) 0%, transparent 65%)",
                        }}
                    />

                    {/* Soft circle accents */}
                    <div className="absolute -top-[70px] -left-[70px] w-[240px] h-[240px] rounded-full bg-white/10 pointer-events-none" />
                    <div className="absolute -bottom-[90px] -right-[50px] w-[280px] h-[280px] rounded-full bg-[rgba(253,216,113,0.13)] pointer-events-none" />

                    {/* Clouds */}
                    {[
                        { className: "top-0.5 left-[11%]", w: 118, op: 0.68 },
                        { className: "top-1 right-[18%]", w: 96, op: 0.6 },
                        { className: "bottom-2.5 right-1", w: 140, op: 0.75 },
                        { className: "bottom-3 left-1", w: 80, op: 0.58 },
                    ].map((c, i) => (
                        <svg
                            key={i}
                            className={`absolute pointer-events-none ${c.className}`}
                            style={{ opacity: c.op }}
                            width={c.w}
                            height={Math.round(c.w * 0.44)}
                            viewBox="0 0 120 54"
                        >
                            <ellipse cx="60" cy="40" rx="56" ry="14" fill="white" />
                            <ellipse cx="40" cy="30" rx="28" ry="21" fill="white" />
                            <ellipse cx="74" cy="24" rx="24" ry="18" fill="white" />
                        </svg>
                    ))}

                    {/* Floating deco */}
                    <div className="sj-bob absolute top-3.5 left-[2%] text-[38px] z-[6]" style={{ filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))" }}>🧑‍🍳</div>
                    <div className="sj-float absolute top-2.5 right-[35%] text-[22px] z-[6]">🦋</div>
                    <div className="sj-float absolute bottom-4 right-[30%] text-lg z-[6]">🍴</div>
                    <div className="sj-bob absolute bottom-4 left-[15%] text-base z-[6]">✨</div>

                    {/* Content */}
                    <div
                        className="relative z-10 max-w-[1080px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
                        style={{ padding: "36px 24px 32px" }}
                    >
                        {/* LEFT */}
                        <div className="flex-1 max-w-[500px] flex flex-col gap-0 text-center md:text-left">
                            <div
                                className="s1 inline-flex items-center gap-1.5 mb-3.5 font-extrabold text-[10.5px] uppercase tracking-widest text-[#1C0A08] rounded-full px-4 py-1.5 border border-white/60 self-center md:self-start"
                                style={{
                                    fontFamily: "'AndesRounded', sans-serif",
                                    letterSpacing: "0.13em",
                                    background: "rgba(255,255,255,0.35)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                🍳 Kids Cooking Programme
                            </div>

                            <h2
                                className="s2 sj-title text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight mb-3.5"
                                style={{ fontFamily: "'AndesRounded', sans-serif", letterSpacing: "-0.03em" }}
                            >
                                Start Your
                                <br />
                                Journey Today!
                            </h2>

                            <p
                                className="s3 text-sm md:text-[14.5px] font-semibold text-white/90 max-w-[370px] mx-auto md:mx-0 mb-6 leading-relaxed"
                                style={{ fontFamily: "'AndesRounded', sans-serif", lineHeight: 1.65 }}
                            >
                                Stay updated on upcoming camps, workshops and new experiences.
                            </p>

                            <div className="s4">
                                <a
                                    href="#contact"
                                    onClick={scrollToContact}
                                    className="sj-btn inline-flex items-center gap-2.5 font-extrabold text-base py-3 px-8 rounded-full border-0 cursor-pointer"
                                    style={{
                                        fontFamily: "'AndesRounded', sans-serif",
                                        background: "#FDD871",
                                        color: "#B42A63",
                                        boxShadow: "0 8px 32px rgba(253,216,113,0.45)",
                                        letterSpacing: "0.01em",
                                    }}
                                >
                                    Keep me posted
                                    <span
                                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm"
                                        style={{ background: "#B42A63", color: "#FDD871" }}
                                    >
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — image blob */}
                        <div className="s5 relative flex-shrink-0 w-[230px] h-[230px]">
                            <div
                                className="sj-blob absolute inset-0 flex items-end justify-center overflow-hidden rounded-[44%_56%_50%_50%_/_50%_44%_56%_50%]"
                                style={{
                                    background: "linear-gradient(160deg, rgba(255,255,255,0.45) 0%, rgba(255,220,180,0.35) 100%)",
                                    backdropFilter: "blur(14px)",
                                    border: "2.5px solid rgba(255,255,255,0.75)",
                                    boxShadow: "0 16px 50px rgba(0,0,0,0.14)",
                                }}
                            >
                                <img
                                    src={cloudinaryOpt("https://res.cloudinary.com/dehcbkqsf/image/upload/v1774613401/_VPC7498_u1s2vh.jpg", 600)}
                                    alt="Young chef cooking"
                                    loading="lazy"
                                    className="w-full h-full object-cover object-[center_top] rounded-[inherit]"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        const fallback = e.target.nextElementSibling;
                                        if (fallback) fallback.classList.remove("hidden");
                                    }}
                                />
                                <div className="hidden flex-col items-center justify-center w-full h-full gap-1.5 text-center px-4">
                                    <span className="text-7xl">👨‍🍳</span>
                                    <p className="font-bold text-[10px] text-[rgba(28,10,8,0.4)]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>
                                        Add your child photo here
                                    </p>
                                </div>
                            </div>

                            {/* Rating badge */}
                            <div
                                className="s6 absolute top-1.5 -left-4 z-10 bg-white rounded-[14px] py-2 pl-2.5 pr-3.5 flex items-center gap-2 shadow-lg"
                                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.13)" }}
                            >
                                <div className="w-[34px] h-[34px] rounded-full bg-[#FDD871] flex items-center justify-center text-base flex-shrink-0">⭐</div>
                                <div>
                                    <div className="font-extrabold text-sm text-[#1C0A08] leading-none" style={{ fontFamily: "'AndesRounded', sans-serif" }}>4.9 / 5</div>
                                    <div className="text-[9.5px] font-bold text-gray-400 leading-none mt-0.5" style={{ fontFamily: "'AndesRounded', sans-serif" }}>Avg. rating</div>
                                </div>
                            </div>

                            {/* Families badge */}
                            <div
                                className="s7 absolute bottom-1 -right-3.5 z-10 bg-white rounded-[14px] py-2 pl-2.5 pr-3.5 flex items-center gap-2 shadow-lg"
                                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.13)" }}
                            >
                                <div className="w-[34px] h-[34px] rounded-full bg-[#FCAB52] flex items-center justify-center text-base flex-shrink-0">👨‍👩‍👧</div>
                                <div>
                                    <div className="font-extrabold text-sm text-[#1C0A08] leading-none" style={{ fontFamily: "'AndesRounded', sans-serif" }}>1600+</div>
                                    <div className="text-[9.5px] font-bold text-gray-400 leading-none mt-0.5" style={{ fontFamily: "'AndesRounded', sans-serif" }}>little chefs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom wave */}
                <svg viewBox="0 0 1440 44" xmlns="http://www.w3.org/2000/svg" className="block w-full" style={{ marginTop: "-2px" }}>
                    <path fill="#FFF6ED" d="M0,28 C360,0 1080,44 1440,16 L1440,44 L0,44 Z" />
                </svg>
            </div>
        </>
    );
}
