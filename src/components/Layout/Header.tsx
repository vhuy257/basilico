'use client'
import React, { useState } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import useScrollTop from '@/hooks/useScrollTop'
import ButtonComponent from '../Button/Button'

import styles from '@/components/Button/Button.module.css'
import Link from 'next/link'
import { useLenis } from '@studio-freight/react-lenis'
import { basePath } from '@/lib/utils'
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { TbMailFilled } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io"

const Header = () => {
  const [show, toggleShow] = useState(false)

  const { visible: visibleIsFixed } = useScrollTop(200)
  const { visible: visibleIsSmall } = useScrollTop(300)

  const lenis = useLenis()

  return (
    <div>
      <div className={`${clsx('top-bar sticky bg-[--foreground]', {
        'isShow': show        
      })}`}>
        <div className="container mx-auto px-8 py-4 flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center text-md font-calibri text-black">
          <div className="left-info flex gap-2 lg:gap-8 flex-wrap lg:flex-nowrap justify-center lg:justify-start">
            <div className="email text-center lg:text-left w-full lg:min-w-min flex gap-2 items-center justify-center lg:justify-start">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              Basilicofood123@gmail.com
            </div> 
            <div className="address text-center lg:text-left w-full whitespace-nowrap flex gap-2 items-center justify-center lg:justify-start">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3285 1.13607C10.1332 0.940809 9.81662 0.940808 9.62136 1.13607C9.42609 1.33133 9.42609 1.64792 9.62136 1.84318L10.2744 2.49619L5.42563 6.13274L4.31805 5.02516C4.12279 4.8299 3.80621 4.8299 3.61095 5.02516C3.41569 5.22042 3.41569 5.537 3.61095 5.73226L5.02516 7.14648L6.08582 8.20714L2.81545 11.4775C2.62019 11.6728 2.62019 11.9894 2.81545 12.1846C3.01072 12.3799 3.3273 12.3799 3.52256 12.1846L6.79293 8.91425L7.85359 9.97491L9.2678 11.3891C9.46306 11.5844 9.77965 11.5844 9.97491 11.3891C10.1702 11.1939 10.1702 10.8773 9.97491 10.682L8.86733 9.57443L12.5039 4.7257L13.1569 5.37871C13.3522 5.57397 13.6687 5.57397 13.864 5.37871C14.0593 5.18345 14.0593 4.86687 13.864 4.6716L12.8033 3.61094L11.3891 2.19673L10.3285 1.13607ZM6.13992 6.84702L10.9887 3.21047L11.7896 4.01142L8.15305 8.86015L6.13992 6.84702Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              4517 Washington Ave. Kentucky 39495, USA 
            </div>
          </div>
          <div className="language hidden lg:block">
            English
          </div>
        </div>
      </div>
      <div className={`${clsx('main-navigation bg-[--background] header', {
        'is-fixed': visibleIsFixed,
        'is-small': visibleIsSmall
      })}`} id="header_main">
        <div className="container flex items-center justify-between px-5 py-3">
          <div className="main-logo w-40 h-20 flex items-center justify-center">
            <AspectRatio ratio={16/4}>
              <Image src={`${basePath}/images/basilico_logo.png`} alt="Basilico" fill className='object-cover'/>
            </AspectRatio>
          </div>        
          <nav id="main-nav" className='main-nav hidden md:flex'>
            <ul className={`uppercase text-white flex font-audrey menu *:mx-4 2xl:*:mx-8`}>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Pages</Link></li>
              <li><Link href="#">Menu</Link></li>
              <li><Link href="#">Porfolio</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </nav>          
          <div className="book-a-table ml-auto mr-24">
            <ButtonComponent 
              btnText="Book a Table" 
              btnTypeClass='btnHeader' 
              className="hidden xl:inline-block"
              onClick={() => lenis.scrollTo('#bookTable', {
                duration: 1,
                offset: -100,
                easing: (x: number) => {
                    return 1 - Math.cos((x * Math.PI) / 2)
                }
              })}
            />
          </div>
          <div className="sidebar-btn">
            <Button className={`${styles.btnSide} ${show && styles.btnSideActive}`} onClick={() => toggleShow(!show)}>
              <span></span>
            </Button>

            <div 
              className={`sidebar-content text-center hidden sm:inline-block ${clsx({
                'active': show
              })}`}
            >
              <Image src={`${basePath}/images/basilico_logo.png`} alt="" width={169} height={43} className='mx-auto mb-10'/>
              <p>
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus.
              </p>
              <h4 className='text-[--foreground] my-5'>+(406) 555-0120</h4>
              <p className='mb-0'>Andé Restaurant 767 5th Avenue, Paris 10021, France</p>
              <p>Brochetterestaurant@gmail.com</p>
              <div className="line"></div>
              <p className="py-2">
                  Opening Hour: <br/>
                  Mon - Fri : 9.00am - 22.00pm, Holidays : Close
              </p>
              <div className="line"></div>
              <ul className="flex gap-5 social-footer mx-auto text-center justify-center mt-10">
                <li>
                  <Link href="#">
                      <BiLogoFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                      <TiSocialTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                      <TbMailFilled />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                      <IoLogoInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header