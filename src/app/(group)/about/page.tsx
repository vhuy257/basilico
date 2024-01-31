"use client";
import { useEffect } from "react";
import { basePath } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react'
import CountUp from 'react-countup';

import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "@/components/Section/Testimonials/Testimonials";
import Partner from "@/components/Partner/Partner";
import FormMail from "@/components/FormMail/FormMail";

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 5000 });
    }, []);
    
    const imageSlides = [
        {url : '/images/basilico/res01.jpg'},
        {url : '/images/basilico/res02.jpg'},
        {url : '/images/basilico/res03.jpg'},
        {url : '/images/basilico/res01.jpg'},
        {url : '/images/basilico/res02.jpg'},
        {url : '/images/basilico/res03.jpg'},
    ]

    return (
        <>
            <section
                className="page-title"
                style={{
                backgroundImage: `url(${basePath}/images/basilico/bg-pagetitle.jpg)`,
                }}
            >
                <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full">
                    <div className="page-title-main relative z-10 text-center">
                        <h2
                        className={`title before:content-about-link after:content-about-link`}
                        >
                        about us
                        </h2>

                        <ul className="breacrumbs flex justify-center">
                        <li>
                            <a href="index.html">home </a>
                        </li>
                        <li>/</li>
                        <li>about us</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="chef-restaurant relative">
                <Image
                className="item-right aos-init"
                src={`${basePath}/images/menu10.png`}
                alt=""
                data-aos-duration="1000"
                data-aos="fade-left"
                width={479}
                height={479}
                />
                <Image
                className="item-left aos-init"
                src={`${basePath}/images/menu11.png`}
                alt=""
                data-aos-duration="1000"
                data-aos="fade-right"
                width={479}
                height={479}
                />
                <div className="container">
                <div className="row">
                    <div className="w-full">
                    <div className="menu-content">
                        <div className="block-text text-center">
                        <p
                            className="subtitle aos-init "
                            data-aos-duration="1000"
                            data-aos="fade-up"
                        >
                            About Restaurant
                        </p>
                        <h3
                            className="title aos-init "
                            data-aos-duration="1000"
                            data-aos="fade-up"
                        >
                            Enjoy An Exceptional <br />
                            Journey of Taste
                        </h3>
                        <p
                            className="text aos-init "
                            data-aos-duration="1000"
                            data-aos="fade-up"
                        >
                            Our buzzy food-hall style concept is inspired by
                            international dining styles, especially in Asia. Explore the
                            following fast-action food stations as busy chefs perform.
                        </p>
                        <p
                            data-aos-duration="1000"
                            data-aos="fade-up"
                            className="aos-init "
                        >
                            Enjoy a verdant Garden to Glass experience. It’s in the
                            view, it’s reflected in the design, and it infuses many
                            drinks. In fact, all our delicious fresh ingredients are
                            sustainably picked from our Jemima’s Kitchen Garden. Our
                            flourishing range of cocktails, spirits, beers and wines are
                            all made with integrity and offer something for every guest.
                        </p>
                        <Link href={"#"} className="tf-button style3 mt-5">
                            book a table
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="chef-image">
                <Swiper
                    navigation={false}
                    spaceBetween={50}
                    slidesPerView={3}                        
                    speed={1000}              
                    loop={true}
                    grabCursor={true}        
                >
                    {imageSlides.map((k: any, index: number) => (
                        <SwiperSlide className='relative' key={index}>                 
                            <div className={`slideItem`}>
                                <Image src={`${basePath}${k.url}`} alt="Image slide" width={770} height={459}/>
                            </div>                    
                        </SwiperSlide>
                    ))}
                    
                </Swiper>   
            </section>

            <section className="s-services">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="col-md-4">
                            <div className="services-box aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up">
                                <div className="icon">
                                    <Image src={`${basePath}/images/basilico/services-01.png`} alt="" width={52} height={50}/>
                                </div>
                                <div className="content">
                                    <a href="#" className="title h5">food is always fresh </a>
                                    <p>The food we choose is always fresh and carefully checked before processing, Mauris et
                                        justo eros. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="services-box aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon">
                                    <Image src={`${basePath}/images/basilico/services-02.png`} alt="" width={52} height={50}/>
                                </div>
                                <div className="content">
                                    <a href="#" className="title h5">Luxury space &amp; music </a>
                                    <p>What&apos;s better than enjoying delicious food and music at the same time, Mauris et
                                        justo eros. Quisque consequat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="services-box aos-init aos-animate" data-aos-duration="1000" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon">
                                    <Image src={`${basePath}/images/basilico/services-03.png`} alt="" width={52} height={50}/>
                                </div>
                                <div className="content">
                                    <a href="#" className="title h5">Diverse food menu </a>
                                    <p>The food at the restaurant is delicious and varied, Suspendisse dapibus velit sit
                                        amet tortor aliquet accumsan. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="s-couter">
                <div className="container">
                    <div className="row">
                        <div className="couter-content flex justify-between items-center text-center">
                            <div className="couter-box counter">
                                <div className="number-content">
                                    <CountUp start={0} end={240} delay={0} enableScrollSpy={true}></CountUp>
                                </div>
                                <p className="text">Clients Every Day</p>
                            </div>
                            <div className="couter-box counter">
                                <div className="number-content">
                                    <CountUp start={0} end={180} delay={0} enableScrollSpy={true}></CountUp>
                                </div>
                                <p className="text">Great Moments</p>
                            </div>
                            <div className="couter-box counter">
                                <div className="number-content">
                                    <CountUp start={0} end={5} delay={0} duration={4} enableScrollSpy={true}></CountUp>
                                </div>
                                <p className="text"> prestigious award </p>
                            </div>
                            <div className="couter-box counter">
                                <div className="number-content">
                                    <CountUp start={0} end={23} delay={0} enableScrollSpy={true}></CountUp>
                                </div>
                                <p className="text">year of operation </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="event">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="event-main flex">
                                <div className="event-img">
                                    <Image src={`${basePath}/images/basilico/event4.jpg`} alt="" width={960} height={730}/>
                                </div>
                                <div className="event-content">
                                    <div className="block-text text-center style-2">
                                        <p className="subtitle aos-init" data-aos-duration="1000" data-aos="fade-up">private event</p>
                                        <h3 className="title aos-init" data-aos-duration="1000" data-aos="fade-up">perfect place <br/> for private events </h3>

                                        <div className="flat-tabs aos-init" data-aos-duration="1000" data-aos="fade-up">
                                            <ul className="menu-tab flex justify-center mb-4">
                                                <li className="active">
                                                    <h5>your private event</h5>
                                                </li>
                                                <li>
                                                    <h5>wedding</h5>
                                                </li>
                                                <li>
                                                    <h5>birthday</h5>
                                                </li>
                                            </ul>
                                            <div className="content-tab">
                                                <div className="content-inner">
                                                    <div className="container_inner">
                                                        <p>Whether you&apos;re hosting a corporate event, cocktail party,
                                                            luncheon, dinner, meeting, shower, wedding reception, bat/bar
                                                            mitzvah or rehearsal dinner, we know we can offer you and your
                                                            guests a truly memorable event. We have a variety of private
                                                            event spaces that can accommodate up to 180 guests.

                                                        </p>
                                                        <Link href="#" className="tf-button style1 mt-5">Get started for your event </Link>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="s-chef">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="chef-main flex justify-between">
                                <div className="chef-box">
                                    <div className="img aos-init aos-animate" data-aos-duration="1000" data-aos="fade-right">
                                        <Image src={`${basePath}/images/basilico/chef3.jpg`} alt="" height={633} width={500}/>
                                    </div>
                                    <div className="info">
                                        <h5 data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate">RAY SCHOENBAUM</h5>
                                        <p data-aos-duration="1000" data-aos="fade-up" className="aos-init aos-animate">master chef</p>
                                    </div>
                                </div>

                                <div className="block-text text-center style-2">
                                    <Image src={`${basePath}/images/basilico/chef.png`} alt="" data-aos-duration="1000" data-aos="fade-up" className="aos-init" width={69} height={71}/>
                                    <p className="subtitle aos-init" data-aos-duration="1000" data-aos="fade-up">our chef</p>
                                    <h3 className="title aos-init" data-aos-duration="1000" data-aos="fade-up">Our culinary philosophy </h3>
                                    <p className="text aos-init" data-aos-duration="1000" data-aos="fade-up">Simple and balanced. Alexander Petillo brings together flavors and
                                        specialties from Italy and beyond to create his own culinary world, full of
                                        surprising artistry. <br/>

                                    </p>
                                    <p data-aos-duration="1000" data-aos="fade-up" className="aos-init">We see our customers as invited guests to a party, and we are the hosts. It’s our job
                                        every day to make every important aspect of the customer experience a little bit
                                        better.</p>
                                    <a href="#" className="tf-button style3">meet all chef</a>
                                </div>

                                <div className="chef-box">
                                    <div className="img aos-init" data-aos-duration="1000" data-aos="fade-left">
                                        <Image src={`${basePath}/images/basilico/chef4.jpg`} alt="" height={633} width={500}/>
                                    </div>
                                    <div className="info">
                                        <h5 data-aos-duration="1000" data-aos="fade-up" className="aos-init">ALEX BEBIAK</h5>
                                        <p data-aos-duration="1000" data-aos="fade-up" className="aos-init">Assistant chef</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <Testimonials />

            <div className="gallery-ig">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="gallery-ig-main flex justify-between">
                                <div className="col-img">
                                    <div className="ig-box">
                                        <Image src={`${basePath}/images/basilico/ig-1.jpg`} alt="" width={360} height={612}/>
                                        <div className="content">
                                            <a href="#" className="ig"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-img">
                                    <div className="top flex">
                                        <div className="ig-box">
                                            <Image src={`${basePath}/images/basilico/ig-2.jpg`} alt="" width={360} height={292}/>
                                            <div className="content">
                                                <a href="#" className="ig"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="ig-box">
                                            <Image src={`${basePath}/images/basilico/ig-3.jpg`} alt="" width={360} height={292}/>
                                            <div className="content">
                                                <a href="#" className="ig"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="ig-box">
                                            <Image src={`${basePath}/images/basilico/ig-4.jpg`} alt="" width={745} height={292}/>
                                            <div className="content">
                                                <a href="#" className="ig"><i className="fa-brands fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-img">
                                    <div className="ig-box">
                                        <Image src={`${basePath}/images/basilico/ig-5.jpg`} alt="" width={360} height={612}/>
                                        <div className="content">
                                            <a href="#" className="ig"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-10">
                                <Link href="#" className="tf-button style3">view all gallery &amp; video</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Partner />

            <FormMail />
        </>
    );
};

export default AboutPage;
