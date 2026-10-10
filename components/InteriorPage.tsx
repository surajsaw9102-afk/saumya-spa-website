import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react";
import { Button } from "./Button";
import styles from "./InteriorPage.module.css";

export function PageHero({ eyebrow, title, accent, intro }: { eyebrow: string; title: string; accent?: string; intro: string }) {
  return <section className={styles.pageHero}><span className={styles.kicker}><Leaf size={14}/>{eyebrow}</span><h1>{title} {accent && <em>{accent}</em>}</h1><p>{intro}</p></section>;
}

export function PageCta({ title = "Your time, your way.", text = "Whenever you’re ready, we’ll help you plan a quieter moment.", button = "Request an appointment" }: { title?: string; text?: string; button?: string }) {
  return <section className={styles.cta}><div><span className={styles.kicker}>A MOMENT FOR YOU</span><h2>{title}</h2><p>{text}</p></div><Button asChild className={styles.ctaButton} size="lg"><Link to="/book">{button}<ArrowUpRight size={16}/></Link></Button></section>;
}

export function ServiceCard({ title, eyebrow, description, duration, image, to = "/book" }: { title: string; eyebrow: string; description: string; duration: string; image: string; to?: string }) {
  return <article className={styles.serviceCard}><Link to={to} className={styles.serviceImage}><img src={image} alt={title + " spa treatment"}/><span><ArrowUpRight size={17}/></span></Link><div className={styles.serviceBody}><small>{eyebrow} <b>·</b> {duration}</small><h3>{title}</h3><p>{description}</p><Link to={to} className={styles.learnLink}>{to === "/book" ? "Request this treatment" : "Explore treatment"}<ArrowRight size={14}/></Link></div></article>;
}

export default function InteriorPage({ children }: { children: React.ReactNode }) { return <div className={styles.interior}>{children}</div>; }
