import React, { useState, useEffect } from "react";

const HERO_VIDEO_DESKTOP =
  "https://res.cloudinary.com/dehcbkqsf/video/upload/v1774537205/desktop_c8v52v.mp4";
const HERO_VIDEO_MOBILE =
  "https://res.cloudinary.com/dehcbkqsf/video/upload/v1774537221/mobile_ycjhqa.mp4";

const styles = `
  .hero-outer {
    font-family: 'AndesRounded', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .hero-video {
    flex: 1;
    min-height: 0;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .hero-video video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
  .hero-video-desktop {
    display: block;
  }
  .hero-video-mobile {
    display: none;
  }

  .hero-content {
    display: none;
  }
  .hero-text {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.75rem 1.5rem;
  }

  .hero-title {
    font-family: 'AndesRounded', system-ui, sans-serif;
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03em;
    color: #fff;
    margin: 0;
  }

  .hero-sub {
    font-family: 'AndesRounded', system-ui, sans-serif;
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    font-weight: 600;
    letter-spacing: -0.01em;
    color: rgba(255,255,255,0.9);
    line-height: 1.4;
    margin: 0;
  }

  .btn-explore {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%);
    color: #fff;
    text-decoration: none;
    border-radius: 9999px;
    padding: 10px 24px;
    font-family: 'AndesRounded', system-ui, sans-serif;
    font-size: 0.9375rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.25);
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
    box-shadow: 0 4px 24px rgba(249,115,22,0.35),
                0 2px 8px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.2);
  }
  .btn-explore:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 36px rgba(249,115,22,0.45),
                0 6px 16px rgba(0,0,0,0.2),
                inset 0 1px 0 rgba(255,255,255,0.25);
  }
  .btn-explore .btn-arrow {
    transition: transform 0.3s ease;
  }
  .btn-explore:hover .btn-arrow {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    .hero-video-desktop {
      display: none;
    }
    .hero-video-mobile {
      display: block;
    }
    .hero-outer {
      height: 100svh;
      height: 100dvh;
    }
    .hero-content {
      padding: 0.75rem 1.25rem;
      padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
      gap: 0.5rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .hero-title {
      font-size: clamp(1rem, 5vw, 1.25rem);
    }
    .hero-sub {
      font-size: 0.8125rem;
    }
    .btn-explore {
      padding: 8px 20px;
      font-size: 0.875rem;
    }
  }
  @media (max-width: 480px) {
    .hero-content {
      padding: 0.5rem 1rem;
    }
  }
`;

function Hero() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section className="hero-outer">
        <div className="hero-video">
          <video
            className={isMobile ? "hero-video-mobile" : "hero-video-desktop"}
            style={{ display: "block" }}
            src={isMobile ? HERO_VIDEO_MOBILE : HERO_VIDEO_DESKTOP}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            title="Orange Figs hero video"
          />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">A Space to Cook, Create, and Grow</h1>
            <p className="hero-sub">
              A thoughtfully curated culinary experience for growing minds.
            </p>
          </div>
          <a href="#why" className="btn-explore">
            Know more
            <span className="btn-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

export { Hero };
export default Hero;
