import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf, MapPin, Phone, ArrowUpRight, Instagram } from "lucide-react";
import styles from "./SiteLayout.module.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Treatments", to: "/services" },
  { label: "Our story", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Find us", to: "/contact" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <div className={styles.site}>
      <div className={styles.announcement}><Leaf size={13} /> A quieter moment, just for you <span>·</span> Viman Nagar, Pune</div>
      <header className={styles.header}>
        <Link to="/" className={styles.brand} onClick={() => setMenuOpen(false)} aria-label="Saumya Spa home">
          <span className={styles.brandMark}><Leaf size={23} strokeWidth={1.35} /></span>
          <span className={styles.brandWords}><strong>saumya</strong><small>SPA · WELLNESS · RITUALS</small></span>
        </Link>
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
          {navItems.map(item => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={location.pathname === item.to || (item.to === "/services" && location.pathname.startsWith("/services")) ? styles.active : ""}>{item.label}</Link>)}
          <Link to="/book" className={styles.navBook} onClick={() => setMenuOpen(false)}>Book a visit <ArrowUpRight size={15} /></Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}><Link to="/" className={styles.brand}><span className={styles.brandMark}><Leaf size={23} strokeWidth={1.35} /></span><span className={styles.brandWords}><strong>saumya</strong><small>SPA · WELLNESS · RITUALS</small></span></Link><p>A little space to slow down, breathe deeply, and return to yourself.</p></div>
          <div className={styles.footerCol}><h3>Explore</h3><Link to="/services">Treatments</Link><Link to="/about">Our story</Link><Link to="/gallery">Gallery</Link><Link to="/book">Book an appointment</Link></div>
          <div className={styles.footerCol}><h3>Visit Saumya</h3><p><MapPin size={15} /> Viman Nagar, Pune, Maharashtra</p><p>Near Hyatt Regency Pune & Residences<br/>Clover Park · 411014 <small>(draft address — please verify)</small></p><a href="https://maps.app.goo.gl/Kh33DkSaMCbhtxZR7?g_st=ac" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14}/></a><a href="tel:+917739867880"><Phone size={14}/> +91 77398 67880</a></div>
          <div className={styles.footerCol}><h3>Make time for you</h3><p>Have a question or want to plan your visit? We’d love to hear from you.</p><Link className={styles.footerCta} to="/book">Request an appointment <ArrowUpRight size={15}/></Link><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15}/> Follow our journey</a></div>
        </div>
        <div className={styles.footerBottom}><span>© {new Date().getFullYear()} Saumya Spa. Made for moments of calm.</span><span>Viman Nagar · Pune, India</span></div>
      </footer>
      <a href="https://wa.me/917739867880?text=Hello%20Saumya%20Spa%2C%20I%27d%20like%20to%20ask%20about%20an%20appointment." target="_blank" rel="noreferrer" className={styles.whatsapp} aria-label="Message Saumya Spa on WhatsApp"><span className={styles.waDot}>●</span> WhatsApp us</a>
    </div>
  );
}
