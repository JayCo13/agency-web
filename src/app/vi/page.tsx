import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';

export const metadata: Metadata = {
  title: 'Lập Trình Web, Hệ Thống & Tự Động Hóa AI | TicoSystem',
  description:
    'Lập trình web app, hệ thống quản lý, chatbot AI và tự động hóa theo yêu cầu, chuẩn châu Âu. Bàn giao toàn bộ mã nguồn. Tư vấn miễn phí 15 phút.',
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

export default function HomeVi() {
  return <HomePage lang="vi" />;
}
