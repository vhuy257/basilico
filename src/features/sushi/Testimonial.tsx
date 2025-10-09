import React from 'react'
import Image from 'next/image'
import { basePath } from '@/lib/utils'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const Testimonial = () => {
  return (
    <div className='container'>
        <div className="text-center mx-auto flex justify-center items-center mb-20 relative">
            <Image src={`${basePath}/images/sushi/icon-1.png`} alt="testimonial" width={150} height={153} />
            <div className={`${dmSans.className} text-white absolute top-[100px] left-1/2 -translate-x-1/2 text-[125px] z-20 translate-y-[-50%]`}>&quot;</div>
        </div>
    </div>
  )
}

export default Testimonial