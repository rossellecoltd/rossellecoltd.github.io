'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { GoogleAnalytics } from '@next/third-parties/google'
import { dir } from 'i18next'
import { Geist, Geist_Mono } from "next/font/google";
import { use, useState } from 'react';

import ContactModal from '@/components/ContactModal';
import TopBar from '@/components/TopBar';

import ContactModalContext from '@/contexts/contact-modal.context';

import '@ant-design/v5-patch-for-react-19';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = use(params)

  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <html lang={lang} dir={dir(lang)}>
      <title>บริษัท โรสเซลล์ จำกัด | Rosselle Co., Ltd. Thailand | ผู้นำเข้าวัตถุเจือปนอาหาร</title>
      <meta name="google-site-verification" content="zIAgBsemxeyeYHc4ZS5B5mvEub5YMfOAdS_ls7OmC8c" />
      <meta name="description" content="โรสเซลล์ เป็นผู้นำด้านการนำเข้า ขาย จำหน่าย โพรพิลีนไกลคอลอัลจิเนต (PGA) ไม่เจือปน มานานกว่า 15 ปีในประเทศไทย โดยนำเข้าตรงจากผู้ผลิตชั้นนำด้าน Alginate ของโลก KIMICA Corporation ทำให้ราคาถูกแต่ยังคงคุณภาพของสินค้า
  Rosselle is a leading Propylene Glycol Alginate (PGA) importer and seller in Thailand with more than 15 years of experience. Rosselle directly imports from KIMICA Corporation allowing us to offer competitive price while having exceptional product quality" />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <ContactModalContext.Provider value={{ open: contactModalOpen, setOpen: setContactModalOpen }}>
            <TopBar lang={lang} />
            <ContactModal lang={lang} />
            {children}
          </ContactModalContext.Provider>
        </AntdRegistry>
      </body>
      <GoogleAnalytics gaId="UA-149907477-3" />
    </html>
  );
}
