import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, Flower2, Leaf, MapPin, Sparkles, Waves } from "lucide-react";
import { useScrollReveal } from "../helpers/useScrollReveal";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";
import styles from "./_index.module.css";

const treatments = [
  { title: "Massage treatments", category: "SERVICE MENU", duration: "CONFIRM OPTIONS", image: "https://nikitadaynightspa.floot.app/_cdn/static/12f0f73c-d096-40fc-8329-c2f767b72dd9.png", text: "Ask Saumya Spa which massage treatments are currently available, along with session length and pricing." },
  { title: "Relaxation experiences", category: "YOUR VISIT", duration: "ASK FOR DETAILS", image: "https://nikitadaynightspa.floot.app/_cdn/static/8bc78c17-9b49-401f-8270-fdfc9e9c7df0.png", text: "Explore the spa setting and discuss the experience you have in mind before arranging a visit." },
  { title: "Aromatherapy options", category: "TREATMENT ENQUIRY", duration: "CONFIRM AVAILABILITY", image: "https://nikitadaynightspa.floot.app/_cdn/static/329d58d6-c76c-4327-9394-720a814164d8.png", text: "Interested in aromatic oils? Contact the spa to confirm whether an aromatherapy treatment is on the current menu." },
];

export default function HomePage() {
  const reveal = useScrollReveal();
  const [service, setService] = useState("relaxation-massage");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", notes: "" });
  const update = (key: string, value: string) => setForm(current => ({ ...current, [key]: value }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };
  return <><Helmet><title>Spa in Viman Nagar Pune | Massage Services at Saumya Spa</title><meta name="description" content="Explore massage treatment enquiries at Saumya Spa in Viman Nagar, Pune. Contact the spa to confirm current services, opening hours, session options and prices."/><meta name="keywords" content="Saumya Spa Viman Nagar Pune, spa in Viman Nagar Pune, massage spa in Viman Nagar Pune, spa appointment Viman Nagar, massage treatments Pune, spa near Viman Nagar, spa in Pune"/><meta property="og:type" content="website"/><meta property="og:title" content="Spa in Viman Nagar Pune | Massage Services at Saumya Spa"/><meta property="og:description" content="Explore massage and spa services at Saumya Spa in Viman Nagar, Pune."/><meta name="robots" content="index,follow"/><script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"DaySpa","name":"Saumya Spa","description":"Spa and massage treatment enquiries in Viman Nagar, Pune. Contact Saumya Spa to confirm the current service menu, prices and opening hours.","address":{"@type":"PostalAddress","addressLocality":"Pune","addressRegion":"Maharashtra","addressCountry":"IN"},"hasMap":"https://maps.app.goo.gl/Kh33DkSaMCbhtxZR7?g_st=ac"})}</script></Helmet><div className={styles.home}>
    <section className={styles.hero}>
      <img className={styles.heroImage} src="https://nikitadaynightspa.floot.app/_cdn/static/7c25d957-f3d8-4e71-9e24-e5511cf72a46.png" alt="Sunlit, peaceful spa treatment room with natural textures and greenery" />
      <div className={styles.heroVeil}/>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><span/> YOUR MOMENT OF STILLNESS <span/></div>
        <h1>Come back<br/>to <em>yourself.</em></h1>
        <p>A considered pause from the everyday. Discover soothing spa rituals in the heart of Viman Nagar, Pune.</p>
        <div className={styles.heroActions}><Button asChild size="lg" className={styles.primaryButton}><Link to="/book">Book your moment <ArrowUpRight size={16}/></Link></Button><Link className={styles.textLink} to="/services">Explore treatments <ArrowRight size={15}/></Link></div>
        <div className={styles.heroFoot}><span><Leaf size={15}/> A softer kind of luxury</span><span><MapPin size={14}/> Viman Nagar, Pune</span></div>
      </div>
      <div className={styles.heroStamp}><span>THE ART OF</span><strong>slowing<br/>down</strong><Leaf size={22}/></div>
      <a href="#welcome" className={styles.scrollCue} aria-label="Scroll to discover"><span>SCROLL TO DISCOVER</span><ArrowDown size={15}/></a>
    </section>

    <section className={styles.welcome} id="welcome">
      <div className={styles.welcomeLeft} ref={reveal}><span className={styles.kicker}>WELCOME TO SAUMYA</span><h2>Wellness is not<br/>a luxury. It’s a <em>return.</em></h2></div>
      <div className={styles.welcomeRight} ref={reveal}><p className={styles.lead}>A little room to breathe. A little time that belongs only to you.</p><p>At Saumya Spa in Viman Nagar, Pune, we believe the smallest pauses can make space for a meaningful reset. Explore our spa and massage treatment options, settle into a calm atmosphere, and choose an experience that feels right for you.</p><Link className={styles.underLink} to="/about">Discover our approach <ArrowRight size={15}/></Link></div>
      <div className={styles.welcomeMark}><Flower2 size={58} strokeWidth={0.8}/></div>
    </section>

    <section className={styles.treatments}>
      <div className={styles.sectionHead} ref={reveal}><div><span className={styles.kicker}>TIME WELL SPENT</span><h2>Spa & massage <em>in Viman Nagar.</em></h2></div><p>Explore thoughtful spa treatment options in Viman Nagar, Pune, and request an appointment that suits your schedule.</p></div>
      <div className={styles.treatmentGrid}>{treatments.map((t, i) => <article className={styles.treatmentCard} key={t.title} ref={reveal}><Link to={i === 0 ? "/services/massage" : "/services"} className={styles.treatmentImage}><img src={t.image} alt={t.title + " at Saumya Spa"}/><span className={styles.cardArrow}><ArrowUpRight size={18}/></span></Link><div className={styles.treatmentInfo}><div className={styles.treatmentMeta}><span>{t.category}</span><span><Clock3 size={12}/> {t.duration}</span></div><h3>{t.title}</h3><p>{t.text}</p><Link to={i === 0 ? "/services/massage" : "/services"} className={styles.cardLink}>Discover treatment <ArrowRight size={14}/></Link></div></article>)}</div>
      <div className={styles.centerLink}><Button asChild variant="outline" size="lg" className={styles.outlineButton}><Link to="/services">Explore all treatments <ArrowRight size={15}/></Link></Button></div>
      <p className={styles.draftNote}>Session length, treatment-specific pricing and availability can vary. Please confirm these details with Saumya Spa when requesting an appointment.</p>
    </section>

    <section className={styles.promise}>
      <div className={styles.promiseImage}><img src="https://nikitadaynightspa.floot.app/_cdn/static/8bc78c17-9b49-401f-8270-fdfc9e9c7df0.png" alt="Quiet spa treatment space in warm natural tones"/><div className={styles.imageNote}><Leaf size={20}/><span>Make room<br/>for yourself.</span></div></div>
      <div className={styles.promiseCopy} ref={reveal}><span className={styles.kicker}>THE SAUMYA FEELING</span><h2>Calm, in every<br/><em>little detail.</em></h2><p>From the moment you arrive, the intention is simple: help you feel at ease. We’re creating a space where attentive care, gentle rituals, and a welcoming atmosphere come together.</p><div className={styles.promisePoints}><div><span><Waves size={19}/></span><div><strong>Unhurried rituals</strong><small>Time to settle in and slow down.</small></div></div><div><span><Sparkles size={19}/></span><div><strong>Thoughtful care</strong><small>A welcoming experience, tailored to you.</small></div></div><div><span><Leaf size={19}/></span><div><strong>A softer atmosphere</strong><small>Natural textures and a sense of calm.</small></div></div></div><Link className={styles.underLink} to="/about">A little more about us <ArrowRight size={15}/></Link></div>
    </section>

    <section className={styles.booking} id="book">
      <div className={styles.bookingIntro}><span className={styles.kicker}>YOUR TIME STARTS HERE</span><h2>Let’s make room<br/>for <em>you.</em></h2><p>Share your preferred date and time, then contact Saumya Spa to confirm the current treatment menu, opening hours and prices. This demo form does not send your request to the spa.</p><div className={styles.bookingContact}><span><Clock3 size={16}/> Confirm opening hours</span><a href="https://maps.app.goo.gl/Kh33DkSaMCbhtxZR7?g_st=ac" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14}/></a></div></div>
      <div className={styles.bookingPanel}>
        {sent ? <div className={styles.successState}><span className={styles.successIcon}><Check size={24}/></span><span className={styles.kicker}>REQUEST PREVIEW</span><h3>Thank you, {form.name.split(" ")[0] || "there"}.</h3><p>Your appointment request preview is ready. No message has been sent to Saumya Spa and no appointment is confirmed in this prototype.</p><div className={styles.summary}><span>Treatment <strong>{service.replaceAll("-", " ")}</strong></span><span>Preferred date <strong>{form.date || "Not selected"}</strong></span><span>Preferred time <strong>{form.time || "Not selected"}</strong></span></div><Button onClick={() => setSent(false)} variant="outline" className={styles.outlineButton}>Edit request</Button></div> : <form className={styles.bookingForm} onSubmit={submit}><div className={styles.formTop}><span>APPOINTMENT REQUEST</span><span>01 / 01</span></div><h3>Plan your visit</h3><p className={styles.formHint}>A few details to help you get started.</p><label>Choose a treatment <Select value={service} onValueChange={setService}><SelectTrigger><SelectValue placeholder="Choose a treatment"/></SelectTrigger><SelectContent><SelectItem value="massage-treatments">Massage treatments — confirm current menu</SelectItem><SelectItem value="relaxation-experience">Relaxation experience — ask for details</SelectItem><SelectItem value="aromatherapy-enquiry">Aromatherapy — confirm availability</SelectItem><SelectItem value="not-sure-yet">I’m not sure yet</SelectItem></SelectContent></Select></label><div className={styles.formRow}><label>Your name<Input required value={form.name} onChange={e => update("name",e.target.value)} placeholder="Full name" autoComplete="name"/></label><label>Phone number<Input required type="tel" value={form.phone} onChange={e => update("phone",e.target.value)} placeholder="Your mobile number" autoComplete="tel" pattern="[+0-9 ()-]{8,18}"/></label></div><div className={styles.formRow}><label>Preferred date<Input type="date" required min={new Date().toISOString().slice(0,10)} value={form.date} onChange={e => update("date",e.target.value)}/></label><label>Preferred time<select required className={styles.nativeSelect} value={form.time} onChange={e => update("time",e.target.value)}><option value="">Select time</option><option>10:00 AM</option><option>11:30 AM</option><option>1:00 PM</option><option>2:30 PM</option><option>4:00 PM</option><option>5:30 PM</option><option>7:00 PM</option></select></label></div><label>Anything you’d like us to know? <Textarea rows={3} value={form.notes} onChange={e => update("notes",e.target.value)} placeholder="Optional notes or preferences"/></label><Button type="submit" size="lg" className={styles.submitButton}>Preview appointment request <ArrowRight size={16}/></Button><small className={styles.privacyNote}>Prototype only · Your details are not sent or stored.</small></form>}
      </div>
    </section>

      <section className={styles.locationStrip}><div><span className={styles.kicker}>A LITTLE CLOSER TO CALM</span><h2>Spa in <em>Viman Nagar, Pune.</em></h2><p>Searching for a spa in Viman Nagar, a massage spa in Viman Nagar Pune, or wellness treatments around Clover Park and Sakore Nagar? Explore Saumya Spa’s current treatment options and check the map for your route. For searches such as Viman Nagar Road, Nagar Road or nearby Pune Airport, please verify the exact route and travel time before visiting. <small>Nearby-area relevance and exact street address must be verified before launch.</small></p></div><Button asChild size="lg" className={styles.primaryButton}><a href="https://maps.app.goo.gl/Kh33DkSaMCbhtxZR7?g_st=ac" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16}/></a></Button></section>
    <section className={styles.welcome} aria-labelledby="local-faq-title"><div className={styles.welcomeLeft}><span className={styles.kicker}>GOOD TO KNOW</span><h2 id="local-faq-title">Spa in Viman Nagar:<br/><em>your questions.</em></h2></div><div className={styles.welcomeRight}><h3>Where is Saumya Spa?</h3><p>Saumya Spa is in Viman Nagar, Pune. Open the Google Maps link on this page to check the exact pin and directions before travelling.</p><h3>How can I check treatment prices?</h3><p>Contact Saumya Spa to confirm its current service menu, session options and final prices before booking.</p><h3>What are the opening hours?</h3><p>Please contact the spa to verify current opening hours and appointment availability before visiting.</p><Link className={styles.underLink} to="/contact">View location details <ArrowRight size={15}/></Link></div></section>
  </div></>;
}
