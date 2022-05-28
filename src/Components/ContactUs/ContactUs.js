import React from 'react';
import Iframe from 'react-iframe';

const ContactUs = () => {
    return (
        <div dashboard-sidebar className='grid grid-cols-1 lg:grid-cols-2 mt-20 lg:px-80 px-10' >

            <div dashboard-sidebar className='text-start contact-box' >
                <div className="card w-full max-w-lg shadow-2xl bg-base-200 lg:ml-10">
                    <div className="card-body">
                        <h1 dashboard-sidebar className="text-center text-2xl font-bold text-sky-500">REQUEST A QUOTE</h1>
                        <p dashboard-sidebar className="text-center text-sky-500">We'd love to hear from you!</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea dashboard-sidebar className='pl-4' id="message" name="Message" placeholder='Message'></textarea>
                        </div >

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div >
                </div >
            </div >

            <div dashboard-sidebar className='map shadow-2xl' >
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793321!2d90.34928583919222!3d23.780777744454788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1652015756933!5m2!1sen!2sbd" width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div >
        </div >
    );
};

export default ContactUs;