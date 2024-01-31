'use client';
import dynamic from 'next/dynamic'
import MainSlider from '@/components/MainSlider/MainSlider'
import Gallery from '@/components/Section/Gallery/Gallery';

const Choose = dynamic(() => import('@/components/Section/Choose/Choose'))
const SVideo = dynamic(() => import('@/components/Section/SVideo/SVideo'))
const About = dynamic(() => import('@/components/Section/About/About'))
const Opening = dynamic(() => import('@/components/Section/Opening/Opening'))
const SMenu = dynamic(() => import('@/components/Section/SMenu/SMenu'))
const Testimonials = dynamic(() => import('@/components/Section/Testimonials/Testimonials'))
const Vouchers = dynamic(() => import('@/components/Section/Vouchers/Vouchers'))
const ChefRestaurant = dynamic(() => import('@/components/Section/ChefRestaurant/ChefRestaurant'))
const Booking = dynamic(() => import('@/components/Section/Booking/Booking'))
const SBlog = dynamic(() => import('@/components/Section/SBlog/SBlog'))
const Location = dynamic(() => import('@/components/Section/Location/Location'))

export default function Home() {
    return (
        <main className={`flex flex-col items-center justify-between`}>
            <MainSlider />
            <About />
            <Opening />
            <SMenu />
            <SVideo />
            <Choose />
            <Testimonials/>
            <Vouchers />
            <ChefRestaurant />
            <Booking />
            <SBlog />
            <Gallery />
            <Location />
        </main>
    )
}
