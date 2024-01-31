'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { basePath } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Partner = () => {
    const partners = [
        'partner-01.png',
        'partner-02.png',
        'partner-04.png',
        'partner-05.png',
        'partner-06.png',
        'partner-04.png',
        'partner-05.png',
        'partner-06.png',
    ]

    return (
        <section className="partner">
            <div className="container">
                <div className="col-12">
                    <Swiper
                        navigation={false}
                        spaceBetween={50}
                        slidesPerView={6}                        
                        speed={1000}              
                        loop={true}
                        grabCursor={true}        
                    >
                        {partners.map((k: any, index: number) => (
                            <SwiperSlide className='relative' key={index}>                 
                                <Link className={`logo-partner`} href="#">
                                    <Image src={`${basePath}/images/basilico/${k}`} alt="Image slide" width={135} height={95}/>
                                </Link>                    
                            </SwiperSlide>
                        ))}
                        
                    </Swiper> 
                </div>
            </div>
        </section>
    )
}

export default Partner