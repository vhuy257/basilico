import { basePath } from '@/lib/utils'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <section className="page-title" style={{backgroundImage: `url(${basePath}/images/basilico/bg-pagetitle.jpg)`}}>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full">

                            <div className="page-title-main relative z-10 text-center">
                                <h2 className={`title before:content-about-link after:content-about-link`}>
                                    about us
                                </h2>

                                <ul className="breacrumbs flex justify-center">
                                    <li><a href="index.html">home </a></li>
                                    <li>/</li>
                                    <li>about us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage