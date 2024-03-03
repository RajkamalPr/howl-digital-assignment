import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";


const Footer = ({ textEnter, textLeave }) => {
    return (
        <>
            <div className='footer-section' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className='footer-container'>
                    <div className='footer-socialmedia-container'>
                        <FaFacebookF className='footer-socialmedia-iconsize' />
                        <FaTwitter className='footer-socialmedia-iconsize' style={{ color: 'purple' }} />
                        <CiInstagram className='footer-socialmedia-iconsize' />
                        <FaLinkedin className='footer-socialmedia-iconsize' />
                    </div>
                    <div className='footer-contact-medium'>
                        <div className='footer-medium-list'>
                            <span>PRESS</span>
                            <span>CAREERS</span>
                            <span>JOIN THE PACK</span>
                            <span className='footer-signup-btn'>Sign up to our newsletter <MdOutlineArrowForward style={{ marginLeft: '1rem' }} /></span>
                        </div>
                    </div>
                    <div className='footer-contact-bottom' >
                        All rights reserved Designed, Developed & powered by HOWL Digital Agency
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer