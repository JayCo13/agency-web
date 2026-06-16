import React from 'react';
import type { Metadata } from 'next';
import styles from '../page.module.css';
import ProductDemo from '@/components/ProductDemo';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import HeroBackground3D from '@/components/HeroBackground3D';
import PixelBlast from '@/components/PixelBlastWrapper';
import ScrollToTop from '@/components/ScrollToTop';
import RevealOnScroll from '@/components/RevealOnScroll';
import MarqueeGallery from '@/components/MarqueeGallery';
import MobileNav from '@/components/MobileNav';
import LanguageToggle from '@/components/LanguageToggle';

// NOTE: This mirrors src/app/page.tsx with Vietnamese copy. The marquee
// project names keep their original text.

export const metadata: Metadata = {
  title: 'Lập Trình Web, Hệ Thống & Tự Động Hóa AI | TicoSystem',
  description:
    'Chúng tôi xây dựng web app, hệ thống quản lý theo yêu cầu, chatbot AI và bot tự động hóa theo tiêu chuẩn châu Âu. Đặt lịch tư vấn miễn phí 15 phút.',
  alternates: {
    canonical: '/vi',
    languages: {
      en: '/',
      vi: '/vi',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://ticosystem.com/vi',
    siteName: 'TicoSystem',
    title: 'Lập Trình Web, Hệ Thống & Tự Động Hóa AI | TicoSystem',
    description:
      'Chúng tôi xây dựng web app, hệ thống quản lý theo yêu cầu, chatbot AI và bot tự động hóa theo tiêu chuẩn châu Âu.',
    locale: 'vi_VN',
    images: [{ url: '/og.png', width: 1200, height: 633, alt: 'TicoSystem — Giải Pháp Công Nghệ Cho Doanh Nghiệp' }],
  },
};

const marqueeContent = [
  { img: 1, category: 'thiieltstrenmay.com - Nền tảng luyện thi IELTS', title: 'Hệ Thống Luyện Thi IELTS' },
  { img: 2, category: 'thiieltstrenmay.com - Nền tảng luyện thi IELTS', title: 'Hệ Thống Quản Lý - Biểu đồ doanh thu' },
  { img: 3, category: 'thiieltstrenmay.com - Nền tảng luyện thi IELTS', title: 'Phòng Thi IELTS' },
  { img: 4, category: 'Blank', title: 'Cấu Hình Cửa Cuốn - Thụy Sĩ' },
  { img: 5, category: 'Blank', title: 'Cấu Hình Cửa Cuốn' },
  { img: 6, category: 'Blank', title: 'Cấu Hình Cửa Cuốn' },
  { img: 7, category: 'CardVerseHub', title: 'Sàn Giao Dịch Thẻ Bài' },
  { img: 8, category: 'CardVerseHub', title: 'Kiểm Tra Giá Thẻ Bài' },
  { img: 9, category: 'CardVerseHub', title: 'Sàn Giao Dịch Thẻ Bài' },
  { img: 10, category: 'Tamnguon.com', title: 'Cửa Hàng Sách' },
  { img: 11, category: 'Tamnguon.com', title: 'Cửa Hàng Sách - Dashboard quản lý doanh thu' },
  { img: 12, category: 'Tamnguon.com', title: 'Cửa Hàng Sách' },
  { img: 'bb-1', category: 'Portfolio Áo', title: 'Portfolio Áo' },
  { img: 'bb-2', category: 'Portfolio Áo', title: 'Portfolio Áo' },
];

export default function HomeVi() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container`} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo TicoSystem" style={{ height: '80px', width: '140px' }} />
          </div>
          <nav className={styles.navLinks}>
            <a href="#work" className={styles.navLink}>Dự Án</a>
            <a href="#demo" className={styles.navLink}>Demo Trực Tiếp</a>
            <a href="#process" className={styles.navLink}>Quy Trình</a>
            <a href="#expertise" className={styles.navLink}>Chuyên Môn</a>
          </nav>
          <div className={styles.headerActions}>
            <LanguageToggle current="vi" />
            <a href="#contact" className={styles.navCtaBtn}>
              Đặt Lịch Ngay
            </a>
          </div>
          <MobileNav lang="vi" />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <HeroBackground3D />
          <div className={`container ${styles.heroContent} fade-in`}>
            <h1><em>Giải Pháp</em> Công Nghệ<br />Cho Doanh Nghiệp Của Bạn</h1>
            <p className={styles.heroSubtitle}>
              Web, hệ thống quản lý và tự động hóa AI theo yêu cầu.
            </p>
            <div className={styles.heroActions}>
              <a href="#demo" className="btn btn-primary">Bắt Đầu Ngay</a>
              <a href="#process" className="btn btn-secondary">Quy Trình Của Chúng Tôi</a>
            </div>
          </div>
        </section>

        {/* Project Gallery Marquee */}
        <RevealOnScroll>
          <MarqueeGallery items={marqueeContent} />
        </RevealOnScroll>

        {/* Product Demo Section (Critical) */}
        <RevealOnScroll>
          <ProductDemo lang="vi" />
        </RevealOnScroll>

        {/* How It Works Section */}
        <RevealOnScroll>
          <section id="process" className="section">
            <div className="container">
              <h2 style={{ textAlign: 'center' }}>Quy Trình Triển Khai</h2>
              <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>Gọn, minh bạch và thiết kế riêng cho những bài toán phức tạp.</p>

              <div className={styles.processGrid}>
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>01</div>
                  <h3 className={styles.processTitle}>Phân Tích & Chiến Lược</h3>
                  <p>Chúng tôi không chỉ viết code mà hiểu cách doanh nghiệp bạn vận hành — phân tích sản phẩm, quy tắc giá và điểm nghẽn để dựng nền logic vững chắc.</p>
                </div>
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>02</div>
                  <h3 className={styles.processTitle}>Xây Dựng Hệ Thống</h3>
                  <p>Phát triển giao diện và kết nối trực tiếp với quy tắc nghiệp vụ của bạn, cho kết quả tức thì và chính xác.</p>
                </div>
                <div className={styles.processCard}>
                  <div className={styles.processIcon}>03</div>
                  <h3 className={styles.processTitle}>Triển Khai & Tích Hợp</h3>
                  <p>Tích hợp liền mạch vào website và hệ thống CRM/ERP sẵn có. Bạn bớt việc thủ công, nhận về dữ liệu sạch và lead chất lượng.</p>
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
                  <h2>Kiến Trúc Đạt Chuẩn Châu Âu</h2>
                  <p>Vững chắc, xử lý logic phức tạp và tích hợp an toàn với hệ thống sẵn có của bạn.</p>
                  <div className={styles.trustBadges}>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Tuân Thủ GDPR
                    </div>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      CPQ Cấp Doanh Nghiệp
                    </div>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                      Dữ Liệu Lưu Trữ Tại EU
                    </div>
                    <div className={styles.badge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                      API Tương Thích Mọi ERP
                    </div>
                  </div>
                </div>

                <div className={styles.archDiagram}>
                  <h3 className={styles.archTitle}>Luồng Bán Hàng Tự Động</h3>
                  <div className={`${styles.archBox} ${styles.archBoxActive}`}>
                    Giao Diện Cấu Hình Tương Tác
                  </div>
                  <div className={styles.archArrow}><span>Dữ Liệu Cấu Hình JSON</span></div>
                  <div className={`${styles.archBox} ${styles.archBoxCore}`}>
                    Bộ Máy Quy Tắc & Định Giá Riêng
                  </div>
                  <div className={styles.archArrow}><span>Tạo Báo Giá Tự Động</span></div>
                  <div className={`${styles.archBox} ${styles.archBoxEnd}`}>
                    Hệ Thống ERP / CRM Của Bạn
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
                Gặp Tech Lead Của Chúng Tôi
              </h2>
              <p className={styles.aboutQuote}>
                "Chúng tôi không chỉ viết code — chúng tôi số hóa cách doanh nghiệp bạn vận hành."
              </p>
              <div className={styles.aboutCard}>
                <div className={styles.aboutImageWrapper}>
                  <img src="/aboutus.png" alt="Tyler - Kiến Trúc Sư Hệ Thống" className={styles.aboutImage} />
                </div>
                <div className={styles.aboutContent}>
                  <h3>Tyler Tai Co</h3>
                  <div className={styles.aboutRole}>Tech Lead / Trưởng Nhóm</div>
                  <p>
                    Hơn 2 năm dẫn dắt các đội full-stack, tôi xây dựng những hệ thống số phức tạp cho nhiều thị trường. Từ kinh nghiệm làm việc với đối tác châu Âu, đội ngũ của tôi tạo ra sản phẩm đạt chuẩn quốc tế — tuân thủ GDPR, sẵn sàng cho thị trường DACH và tối ưu hiệu năng.
                  </p>
                  <div style={{ marginTop: '2rem' }}>
                    <a href="https://www.linkedin.com/in/c%E1%BB%95-tr%E1%BB%8Bnh-hi%E1%BB%81n-t%C3%A0i-7b7762384/" className={styles.linkedinBtn}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      Kết Nối Trên LinkedIn
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
                  <div className={styles.ctaBadge}>Phục Vụ Toàn Cầu</div>
                  <h2>Đặt Lịch Tư Vấn 15 Phút</h2>
                  <p>Xem giải pháp phần mềm phù hợp với bài toán của bạn. Chọn thời gian và trao đổi trực tiếp về nhu cầu cụ thể.</p>
                  <div className={styles.bookingSteps}>
                    <div className={styles.step}>
                      <span className={styles.stepNum}>1</span>
                      <span>Chọn Thời Gian</span>
                    </div>
                    <div className={styles.step}>
                      <span className={styles.stepNum}>2</span>
                      <span>Nhập Thông Tin</span>
                    </div>
                    <div className={styles.step}>
                      <span className={styles.stepNum}>3</span>
                      <span>Nhận Link Họp</span>
                    </div>
                  </div>
                </div>

                <div className={styles.calendlyContainer}>
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
              <img src="/logo.png" alt="Logo TicoSystem" style={{ height: '100px', width: '170px' }} />
              <p className={styles.footerSlogan}>Số Hóa Logic Kinh Doanh Của Bạn.</p>
            </div>
            <nav className={styles.footerNav}>
              <a href="#work">Dự Án</a>
              <a href="#demo">Demo Trực Tiếp</a>
              <a href="#process">Quy Trình</a>
              <a href="#expertise">Chuyên Môn</a>
              <a href="#contact">Đặt Lịch</a>
            </nav>
          </div>
          <div className={styles.footerDivider} />
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Tech Consulting Agency. Bảo lưu mọi quyền.
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
