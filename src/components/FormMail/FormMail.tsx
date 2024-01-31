import { basePath } from '@/lib/utils'
import React from 'react'
import { IoMdPaperPlane } from "react-icons/io";

const FormMail = () => {
    return (
        <section className="s-formmail" style={{backgroundImage: `url(${basePath}/images/basilico/s-form.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="formmail-content">
                        <div className="block-text text-center style-2">
                            <p className="subtitle aos-init text-[--foreground]" data-aos-duration="1000" data-aos="fade-up">
                                Choose us your meal to be special
                            </p>
                            <h3 className="title aos-init" data-aos-duration="1000" data-aos="fade-up">Waiting For You Every Day </h3>
                            <p className="text aos-init" data-aos-duration="1000" data-aos="fade-up">If you would like to stay connected and be the first to know about our news,
                                events, and exclusive offers, please <br/>
                                sign up for our newsletter. You can opt out at any time by clicking unsubscribe on the
                                newsletter.
                            </p>
                            <form className="s1 aos-init" data-aos-duration="1000" data-aos="fade-up">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email *"/>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    <IoMdPaperPlane />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormMail