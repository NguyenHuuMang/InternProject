import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'
import Container from '../components/Container'


const Contact = () => {
  return (
    <>
     <Meta title={"Contact Us"}/>
     <BreadCrumb title="Contact Us"/>
     <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30600.103383705035!2d107.44989382998202!3d16.52544522041985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a809eb02307b%3A0x1f60ccdfe55d7a21!2zVOG7qSBI4bqhLCBUeC4gSMawxqFuZyBUcsOgLCBUaOG7q2EgVGhpw6puIEh14bq_LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1680745336283!5m2!1svi!2s" 
                  title='Contact for Work'
                  width="600" 
                  height="450" 
                  className="border-0 w-100"
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column  gap-15">
                  <div>
                      <input type="text" 
                             className="form-control" 
                             placeholder='Name'
                      />
                    </div>
                    <div>
                      <input type="email" 
                             className="form-control" 
                             placeholder='Email'
                      />
                    </div>
                    <div>
                      <input type="tel" 
                             className="form-control" 
                             placeholder='Mobile Number'
                      />
                    </div>
                    <div>
                      <textarea name="" 
                                id="" 
                                cols="30" 
                                className="w-100 form-control"
                                rows="4"
                                placeholder='Comments'
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">Hno: 190 Ton That Bach st, Huong Tra Town, Hue City</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel:+84 336950023">+84 336950023</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:nhmang.17@gmail.com">nhmang.17@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Friday 8AM-17:30PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
     </Container>
    </>
  )
}

export default Contact