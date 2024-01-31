import localFont from 'next/font/local'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import SmoothScrolling from '@/components/SmoothScrolling/SmoothScrolling';
import Image from 'next/image';
import { FaUtensils } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import 'swiper/css';
import './globals.scss'

const audrey = localFont({
    src: '../../(main)/fonts/Audrey-Medium.otf',
    variable: '--font-audrey'
})

const calibri = localFont({
    src: '../../(main)/fonts/CerebriSans-Book.ttf',
    variable: '--font-calibri'
})

export const metadata = {
  title: 'About us - Basilico Restaurant',
  description: 'About us page - Basilico Restaurant Theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${audrey.variable} ${calibri.variable} ${calibri.className}`}>
        <SmoothScrolling>
            <div className="container mx-auto max-w-7xl flex justify-between items-center top-header text-[--background] py-8">
                <div className="contact-left flex items-center">
                    <div className="icon"><FaUtensils /></div>
                    <div className="t">
                        <p>Basilicofood123@gmail.com </p>
                        <p>+(406) 555-0120</p>
                    </div>
                </div>
                <Image src={'/images/basilico_logo_dark.png'} alt="Basilico About" width={193} height={49}/>
                <div className="contact-right flex flex-row-reverse items-center">
                    <div className="icon"><IoLocationSharp /></div>
                    <div className="t">
                        <p>4517 Washington Ave. Manchester,
                        </p>
                        <p>Kentucky 39495, USA</p>
                    </div>
                </div>
            </div>
            
            <main className="overflow-x-hidden">
                {children}
                <ScrollToTop>
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </ScrollToTop>
            </main>
        </SmoothScrolling>
      </body>
    </html>
  )
}
