import React from 'react';
import styles from './page.module.css';
import ProductDemo from '@/components/ProductDemo';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import HeroBackground3D from '@/components/HeroBackground3D';
import PixelBlast from '@/components/PixelBlastWrapper';
import ScrollToTop from '@/components/ScrollToTop';
import RevealOnScroll from '@/components/RevealOnScroll';
import MarqueeGallery from '@/components/MarqueeGallery';
import MobileNav from '@/components/MobileNav';

const marqueeContent = [
  { img: 1, category: "Thiieltstrenmay.com", title: "Ielts Practice System" },
  { img: 2, category: "Thiieltstrenmay.com", title: "Manage System - Income line chart" },
  { img: 3, category: "Thiieltstrenmay.com", title: "Ielts test room" },
  { img: 4, category: "Blank", title: "Shutter Configurator - Switzerland" },
  { img: 5, category: "Blank", title: "Shutter Configurator" },
  { img: 6, category: "Blank", title: "Shutter Configurator" },
  { img: 7, category: "CardVerseHub", title: "Trading cards Market Place" },
  { img: 8, category: "CardVerseHub", title: "Trading cards price check" },
  { img: 9, category: "CardVerseHub", title: "Trading cards Market Place" },
  { img: 10, category: "Tamnguon.com", title: "The Book Store" },
  { img: 11, category: "Tamnguon.com", title: "The Book Store - Dashboard for managing income" },
  { img: 12, category: "Tamnguon.com", title: "The Book Store" },
];

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container`} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Agency Logo" style={{ height: '80px', width: '140px' }} />
          </div>
          <nav className={styles.navLinks}>
            <a href="#work" className={styles.navLink}>Work</a>
            <a href="#demo" className={styles.navLink}>Live Demo</a>
            <a href="#process" className={styles.navLink}>Process</a>
            <a href="#expertise" className={styles.navLink}>Expertise</a>
          </nav>
          <a href="#contact" className={styles.navCtaBtn}>
            Book a Call Now
          </a>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <HeroBackground3D />
          <div className={`container ${styles.heroContent} fade-in`}>
            <h1><em>Automate</em> Your Quotes,<br />Win High-Value Leads.</h1>
            <p className={styles.heroSubtitle}>
              We architect custom Product Configurators that give your clients instant estimates and capture hot leads while you sleep.
            </p>
            <div className={styles.heroActions}>
              <a href="#demo" className="btn btn-primary">Get Started</a>
              <a href="#process" className="btn btn-secondary">Our Process</a>
            </div>
          </div>
        </section>

        {/* Project Gallery Marquee */}
        <RevealOnScroll>
          <MarqueeGallery items={marqueeContent} />
        </RevealOnScroll>

        {/* Product Demo Section (Critical) */}
        <RevealOnScroll>
          <ProductDemo />
        </RevealOnScroll>

        {/* How It Works Section */}
        <RevealOnScroll>
          <section id="process" className="section">
            <div className="container">
              <h2 style={{ textAlign: 'center' }}>The Automation Blueprint</h2>
              <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>A zero-friction engineering process designed specifically for complex manufacturing workflows.</p>

              <div className={styles.processGrid}>
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>01</div>
                  <h3 className={styles.processTitle}>Logic Mapping & Strategy</h3>
                  <p>We don’t just write code; we decode your business. We analyze your product variations, complex pricing matrices, and sales bottlenecks to architect a bulletproof mathematical logic model for your configurator.</p>
                </div>
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>02</div>
                  <h3 className={styles.processTitle}>Build the Engine</h3>
                  <p>We engineer the interactive web interface and hardwire it to your exact pricing rules for instant, accurate quotes.</p>
                </div>
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>03</div>
                  <h3 className={styles.processTitle}>Deployment & Ecosystem Integration</h3>
                  <p>We embed the configurator seamlessly into your existing website and pipe the data directly into your CRM or ERP. You stop answering repetitive pricing emails and start receiving production-ready, highly qualified leads.</p>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Technical Expertise & Trust */}
        <RevealOnScroll>
          <section id="expertise" className={`section ${styles.expertiseSection}`}>
            <div className="container">
              <div className={styles.expertiseGrid}>
                <div>
                  <h2>Engineered to European Standards</h2>
                  <p>We build robust architectures that handle complex conditional logic and integrate securely with your existing systems.</p>
                  <div className={styles.trustBadges}>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      GDPR Compliant
                    </div>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      Enterprise-Grade CPQ
                    </div>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                      EU-Hosted Data
                    </div>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                      ERP Agnostic API
                    </div>
                  </div>
                </div>

                <div className={styles.archDiagram}>
                  <h3 className={styles.archTitle}>The Zero-Touch Sales Pipeline</h3>
                  <div className={`${styles.archBox} ${styles.archBoxActive}`}>
                    Interactive Configuration Interface
                  </div>
                  <div className={styles.archArrow}><span>JSON Configuration Data</span></div>
                  <div className={`${styles.archBox} ${styles.archBoxCore}`}>
                    Custom Rules & Pricing Engine
                  </div>
                  <div className={styles.archArrow}><span>Automated Quote Generation</span></div>
                  <div className={`${styles.archBox} ${styles.archBoxEnd}`}>
                    Your ERP / CRM System
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Meet our Tech Lead Section */}
        <RevealOnScroll>
          <section id="about" className={`section ${styles.aboutSection}`}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
              <PixelBlast variant="square" pixelSize={2} color="#94A3B8" transparent={true} />
            </div>
            <div className="container" style={{ maxWidth: '960px' }}>
              <h2 style={{ textAlign: 'center', margin: '0 0 1rem', fontFamily: 'var(--font-playfair), serif', fontSize: '2.5rem' }}>
                Meet our Tech Lead
              </h2>
              <p className={styles.aboutQuote}>
                "We don't just write code. We digitize your business logic."
              </p>
              <div className={styles.aboutCard}>
                <div className={styles.aboutImageWrapper}>
                  <img src="/aboutus.png" alt="Tyler - Lead System Architect" className={styles.aboutImage} />
                </div>
                <div className={styles.aboutContent}>
                  <h3>Tyler Tai Co</h3>
                  <div className={styles.aboutRole}>Tech Lead / Team Leader</div>
                  <p>
                    With 2+ years leading full-stack teams, I build complex digital ecosystems for diverse markets. Drawing on my experience with European partners, I guide my team to deliver systems that meet rigorous global standards—ensuring they are GDPR-compliant, DACH-ready, and hardwired for zero-latency performance.
                  </p>
                  <div style={{ marginTop: '2rem' }}>
                    <a href="https://www.linkedin.com/in/c%E1%BB%95-tr%E1%BB%8Bnh-hi%E1%BB%81n-t%C3%A0i-7b7762384/" className={styles.linkedinBtn}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* About Us & CTA Section */}
        <RevealOnScroll>
          <section id="contact" className={`section ${styles.ctaSection}`}>
            <div className="container">
              <div className={styles.ctaCard}>
                <div className={styles.ctaContent}>
                  <div className={styles.ctaBadge}>Available Worldwide</div>
                  <h2>Book your 15-Min Discovery Call</h2>
                  <p>See how a custom product configurator can transform your quoting process. Pick a time, and let's discuss your specific requirements.</p>
                  <div className={styles.bookingSteps}>
                    <div className={styles.step}>
                      <span className={styles.stepNum}>1</span>
                      <span>Select Time</span>
                    </div>
                    <div className={styles.step}>
                      <span className={styles.stepNum}>2</span>
                      <span>Enter Details</span>
                    </div>
                    <div className={styles.step}>
                      <span className={styles.stepNum}>3</span>
                      <span>Get Meet Link</span>
                    </div>
                  </div>
                </div>

                <div className={styles.calendlyContainer}>
                  {/* TODO: Replace with your real Calendly event URL */}
                  <CalendlyEmbed url="https://calendly.com/taicopgm/30min" />
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>

      <ScrollToTop />

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <img src="/logo.png" alt="Agency Logo" style={{ height: '100px', width: '170px' }} />
              <p className={styles.footerSlogan}>Digitize Your Business Logic.</p>
            </div>
            <nav className={styles.footerNav}>
              <a href="#work">Work</a>
              <a href="#demo">Live Demo</a>
              <a href="#process">Process</a>
              <a href="#expertise">Expertise</a>
              <a href="#contact">Book a Call</a>
            </nav>
          </div>
          <div className={styles.footerDivider} />
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Tech Consulting Agency. All rights reserved.
            </p>
            <div className={styles.footerSocials}>
              <a href="mailto:taicopgm@gmail.com" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </a>
              <a href="https://wa.me/84765773913" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/c%E1%BB%95-tr%E1%BB%8Bnh-hi%E1%BB%81n-t%C3%A0i-7b7762384/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
