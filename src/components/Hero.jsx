export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* ── Subtle water ripple background ── */}
      <div className="hero__water" aria-hidden="true">
        <div className="hero__ripple hero__ripple--1" />
        <div className="hero__ripple hero__ripple--2" />
        <div className="hero__ripple hero__ripple--3" />
      </div>

      <div className="hero__content">
        {/* ── Duck SVG with bob animation ── */}
        <div className="hero__duck-container" aria-hidden="true">
          <svg
            className="hero__duck"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Water shadow / reflection */}
            <ellipse cx="55" cy="105" rx="40" ry="6" fill="#f59e0b" opacity="0.1" />

            {/* Body */}
            <ellipse cx="55" cy="78" rx="38" ry="22" fill="#f59e0b" />

            {/* Wing */}
            <ellipse cx="42" cy="75" rx="20" ry="13" fill="#fbbf24" opacity="0.5" />
            <path
              d="M30 68 Q42 58 58 68"
              stroke="#e8a008"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />

            {/* Neck */}
            <path
              d="M78 72 Q85 55 82 42"
              stroke="#f59e0b"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
            />

            {/* Head */}
            <circle cx="82" cy="36" r="16" fill="#f59e0b" />

            {/* Eye */}
            <circle cx="88" cy="32" r="3" fill="#0a0e17" />
            <circle cx="89.5" cy="30.8" r="1" fill="white" opacity="0.8" />

            {/* Beak */}
            <path d="M96 36 L110 33 L96 40 Z" fill="#f97316" />

            {/* Cheek blush */}
            <circle cx="85" cy="40" r="4" fill="#fb923c" opacity="0.25" />

            {/* Tail feathers */}
            <path
              d="M18 70 Q10 60 14 50"
              stroke="#e8a008"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M22 68 Q16 56 20 48"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* ── Headline ── */}
        <h1 className="hero__name">
          Lavdeep Singh
        </h1>

        <p className="hero__tagline">
          Engineering student who'd rather chase a question than accept an answer.
        </p>

        <p className="hero__subtitle">
          Following questions wherever they lead.
        </p>

        {/* ── CTA Row ── */}
        <div className="hero__cta-row">
          <a
            href="/resume.pdf"
            className="hero__cta hero__cta--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 1v9m0 0L4.5 6.5M8 10l3.5-3.5M2 12v2h12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            Resume
          </a>
          <a
            href="https://github.com/"
            className="hero__cta hero__cta--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            className="hero__cta hero__cta--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* ── Scroll cue ── */}
        <div className="hero__scroll-cue">
          <span className="hero__scroll-text">follow the duck</span>
          <svg
            className="hero__scroll-arrow"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 4v12m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
