import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

function DuckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Duck body */}
      <ellipse cx="16" cy="22" rx="12" ry="8" fill="#f59e0b" />
      {/* Duck head */}
      <circle cx="24" cy="14" r="6" fill="#f59e0b" />
      {/* Eye */}
      <circle cx="26" cy="12.5" r="1.2" fill="#0a0e17" />
      {/* Beak */}
      <path d="M29 14.5 L33 13.5 L29 16 Z" fill="#f97316" />
      {/* Wing detail */}
      <ellipse cx="13" cy="21" rx="6" ry="4" fill="#fbbf24" opacity="0.6" />
    </svg>
  )
}

function HamburgerIcon({ isOpen }) {
  return (
    <div className="hamburger-icon" aria-hidden="true">
      <span className={`hamburger-bar ${isOpen ? 'hamburger-bar--top-open' : ''}`} />
      <span className={`hamburger-bar ${isOpen ? 'hamburger-bar--mid-open' : ''}`} />
      <span className={`hamburger-bar ${isOpen ? 'hamburger-bar--bot-open' : ''}`} />
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    handleScroll() // check on mount
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <nav
      id="nav"
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav__inner">
        {/* ── Left: Duck wordmark ── */}
        <a
          href="#home"
          className="nav__brand"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Go to top"
        >
          <DuckIcon />
          <span className="nav__wordmark">The Curious Duck</span>
        </a>

        {/* ── Right: Desktop links ── */}
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="nav__resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* ── Right: Mobile — Resume + Hamburger ── */}
        <div className="nav__mobile-actions">
          <a
            href="/resume.pdf"
            className="nav__resume-btn nav__resume-btn--mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <button
            className="nav__hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <HamburgerIcon isOpen={mobileOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-menu"
        className={`nav__mobile-menu ${mobileOpen ? 'nav__mobile-menu--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <ul className="nav__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav__mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
