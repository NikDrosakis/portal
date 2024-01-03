import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const MainContact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0v8aez9', 'template_z1a2snp', form.current, 'Vy1YEFBT1ypzmH2sf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div class="site-section"  data-aos="fade">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <div class="row mb-5">
                        <div class="col-12 ">
                            <h2 class="site-section-heading text-center">Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mb-5">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="row form-group">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <label class="text-white" for="user_name">First Name - Last Name</label>
                                <input type="text"  name="user_name"  id="user_name" class="form-control"/>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="text-white" for="email">Email</label>
                                <input type="email"  name="user_email" id="email" class="form-control"/>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="text-white" for="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <input type="submit" value="Send Message" class="btn btn-primary py-2 px-4 text-white"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-3 ml-auto">
                    <div class="mb-3">
                        <p class="mb-0 font-weight-bold text-white">Address</p>
                        <p class="mb-4">Palaio Faliro, Greece</p>

                        <p class="mb-0 font-weight-bold text-white">Email Address</p>
                        <p class="mb-0"><a href="\">nikosdrosakis@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
}
export default MainContact;