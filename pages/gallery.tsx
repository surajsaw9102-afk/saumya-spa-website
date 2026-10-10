import React from "react";
import { Helmet } from "react-helmet-async";
import { PageHero, PageCta } from "../components/InteriorPage";
import styles from "../components/InteriorPage.module.css";

const photos = [
  ["A calm treatment room", "https://nikitadaynightspa.floot.app/_cdn/static/8bc78c17-9b49-401f-8270-fdfc9e9c7df0.png"],
  ["Aromatherapy details", "https://nikitadaynightspa.floot.app/_cdn/static/329d58d6-c76c-4327-9394-720a814164d8.png"],
  ["A relaxation massage", "https://nikitadaynightspa.floot.app/_cdn/static/12f0f73c-d096-40fc-8329-c2f767b72dd9.png"],
  ["Natural textures and linen", "https://nikitadaynightspa.floot.app/_cdn/static/7c25d957-f3d8-4e71-9e24-e5511cf72a46.png"],
  ["Soft light and greenery", "https://nikitadaynightspa.floot.app/_cdn/static/8bc78c17-9b49-401f-8270-fdfc9e9c7df0.png"],
  ["A quiet spa ritual", "https://nikitadaynightspa.floot.app/_cdn/static/329d58d6-c76c-4327-9394-720a814164d8.png"],
];

export default function GalleryPage(){return <><Helmet><title>Spa Gallery | Saumya Spa, Viman Nagar Pune</title><meta name="description" content="Explore the calm, natural visual mood of Saumya Spa in Viman Nagar, Pune. The gallery is a prototype awaiting real spa photographs."/><meta property="og:title" content="Saumya Spa Gallery"/></Helmet><div className={styles.interior}><PageHero eyebrow="A GLIMPSE OF CALM" title="Small details." accent="Soft moments." intro="A visual moodboard for Saumya Spa: natural textures, quiet corners and the little details that help a space feel restorative."/><section className={styles.contentSection}><p className={styles.introText}>These are concept images created for the prototype, not verified photographs of the actual premises. Replace them with real spa photos before publishing to give visitors an accurate impression of your space.</p><div className={styles.galleryGrid}>{photos.map(([alt,src],i)=><img key={i} src={src} alt={alt}/>)}</div></section><PageCta title="See you in person?" text="Find Saumya Spa in Viman Nagar and plan your visit." button="Find our location"/></div></>}
