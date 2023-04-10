import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import newletter from '../images/newsletter.png'

const Footer = () => {
  return <>
    <footer className="py-4">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-5">
                    <div className="footer-top-data d-flex gap-30 align-items-center">
                        <img src={newletter} alt="newsletter" />
                        <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                    </div>
                </div>
                <div className="col-7">
                <div className="input-group">
                <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Your Email Address" 
                aria-label="Your Email Address" 
                aria-describedby="basic-addon2" />
                <span 
                className="input-group-text py-2" 
                id="basic-addon2">
                    Subscribe
                </span>
            </div>
                </div>
            </div>
        </div>
    </footer>
    <footer className="py-4">
        <div className="container-xxl">
           <div className="row">
                <div className="col-4">
                    <h4 className="mb-4 text-white">Contact Us</h4>
                    <div>
                        <address className="text-white fs-6">
                            Hno: 190 Ton That Bach st, Huong Tra Town, Hue City
                        </address>
                        <a href="Tel: +84 336950023" className="mt-4 d-block mb-1 text-white">Tel: +84 336950023</a>
                        <a href="mailto: nhmang.17@gmail.com" className="mt-4 d-block mb-0 text-white">Email: nhmang.17@gmail.com</a>
                        <div  className="social_icons d-flex align-items-center gap-30 mt-4 ">
                            <a className="text-white" href="https://www.facebook.com/mang.nguyen.777" >
                               <BsFacebook className="fs-4" />
                            </a>
                            <a className="text-white" href="https://www.instagram.com/nhmang.17/" >
                               <BsInstagram className="fs-4" />
                            </a>
                            <a className="text-white" href="https://github.com/NguyenHuuMang" >
                               <BsGithub className="fs-4" />
                            </a>
                            <a className="text-white" href="https://www.youtube.com/channel/UCST_rz3CuUGXspmTXTwtphw" >
                               <BsYoutube className="fs-4" />
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <h4 className="mb-4 text-white">Information</h4>
                    <div className="footer-link d-flex flex-column">
                        <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                        <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                        <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                        <Link to="/term-conditions" className="text-white py-2 mb-1">Terms and Condition</Link>
                        <Link to="/blogs" className="text-white py-2 mb-1">Blog</Link>
                    </div>
                </div>
                <div className="col-3">
                    <h4 className="mb-4 text-white">Account</h4>
                    <div className="footer-link d-flex flex-column">
                        <Link className="text-white py-2 mb-1">About Us</Link>
                        <Link className="text-white py-2 mb-1">Faq</Link>
                        <Link className="text-white py-2 mb-1">Contact</Link>
                    </div>
                </div>
                <div className="col-2">
                    <h4 className="mb-4 text-white">Quick Links</h4>
                    <div className="footer-link d-flex flex-column">
                        <Link className="text-white py-2 mb-1">Laptops</Link>
                        <Link className="text-white py-2 mb-1">HeadPhones</Link>
                        <Link className="text-white py-2 mb-1">Tablets</Link>
                        <Link className="text-white py-2 mb-1">Watch</Link>
                    </div>
                </div>
           </div>
        </div>
    </footer>
    <footer className="py-4">
        <div className="row">
            <div className="col-12">
                <p className="text-center mb-0 text-white">&copy; { new Date().getFullYear()}: Powered by MangDepTrai</p>
            </div>
        </div>
    </footer>
    </>
  
}

export default Footer