import localFont from 'next/font/local'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import SmoothScrolling from '@/components/SmoothScrolling/SmoothScrolling';
import Image from 'next/image';
import { FaUtensils } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import 'swiper/css';

import './globals.scss'
import './buttons.scss'
import { basePath } from '@/lib/utils';
import Social from '@/components/Social/Social';

const audrey = localFont({
    src: '../../(main)/fonts/Audrey-Medium.otf',
    variable: '--font-audrey'
})

const calibri = localFont({
    src: '../../(main)/fonts/CerebriSans-Book.ttf',
    variable: '--font-calibri'
})

export const metadata = {
  title: 'About Us - Basilico Restaurant',
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
                <div className="container mx-auto max-w-7xl top-header text-[--background] py-4 lg:py-8">
                    {/* Mobile Layout */}
                    <div className="flex flex-col items-center space-y-4 lg:hidden">
                        
                        <div className="flex items-center space-y-3 text-center">
                            <div className="contact-left flex items-center space-x-2">
                                <div className="icon"><FaUtensils /></div>
                                <div className="t text-sm">
                                    <p>Basilicofood123@gmail.com</p>
                                    <p>+(406) 555-0120</p>
                                </div>
                            </div>
                            <div className="contact-right flex items-center space-x-2">
                                <div className="icon"><IoLocationSharp /></div>
                                <div className="t text-sm">
                                    <p>4517 Washington Ave. Manchester,</p>
                                    <p>Kentucky 39495, USA</p>
                                </div>
                            </div>
                        </div>
                        <Image src={`${basePath}/images/basilico_logo_dark.png`} alt="Basilico About" width={150} height={38}/>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex justify-between items-center">
                        <div className="contact-left flex items-center space-x-3">
                            <div className="icon"><FaUtensils /></div>
                            <div className="t">
                                <p>Basilicofood123@gmail.com</p>
                                <p>+(406) 555-0120</p>
                            </div>
                        </div>
                        <Image src={`${basePath}/images/basilico_logo_dark.png`} alt="Basilico About" width={193} height={49}/>
                        <div className="contact-right flex flex-row-reverse items-center space-x-3">
                            <div className="icon"><IoLocationSharp /></div>
                            <div className="t text-right">
                                <p>4517 Washington Ave. Manchester,</p>
                                <p>Kentucky 39495, USA</p>
                            </div>
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

                <footer className="footer style-2">
                    <div className="container max-w-7xl">
                        <div className="flex flex-wrap lg:flex-nowrap gap-x-16 text-white justify-between">
                            <div className="w-1/3">
                                <div className="widget locations">
                                    <h5>we are here</h5>
                                    <ul>
                                        <li>
                                            <p>
                                                <span>Location:</span> 4517 Washington Ave. Manchester, Kentucky 39495, USA
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span>book a table:
                                                </span>
                                                Basilicofood123@gmail.com
                                            </p>

                                            <p className="cl">978-212-8600</p>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/3 text-center">
                                <div className="widget logo flex flex-col justify-center items-center">
                                    <Image src={`${basePath}/images/basilico_logo.png`} alt="" width={187} height={46} className='mx-auto'/>
                                    <p>Our buzzy food-hall style concept is inspired by international dining styles, especially
                                        in Asia. Explore the following fast-action food stations as busy chefs perform.
                                    </p>
                                    <Social />
                                </div>

                            </div>
                            <div className="w-1/3 text-right">
                                <div className="widget time  pd-n">
                                    <h5>opening time</h5>
                                    <ul>
                                        <li>Mon - Fri : 9:00am - 22:00pm</li>
                                        <li>Sat: 10:00am - 23:00pm</li>
                                        <li>Sun: 5:00pm - 23:00pm</li>
                                        <li>Holidays: Closed</li>
                                        <li>Happy Hours: 18:00pm - 20:00pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row bottom-footer text-white flex justify-end mt-10">
                            <div className="bottom-main">
                                <ul className='flex *:uppercase gap-x-10'>
                                    <li><a href="about.html">ABOUT US</a></li>
                                    <li><a href="menu_list.html">MENU</a></li>
                                    <li><a href="blog_right_sidebar.html">Blog</a></li>
                                    <li><a href="contact_01.html">CONTACT US</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>
            </SmoothScrolling>
        </body>
        </html>
  )
}
