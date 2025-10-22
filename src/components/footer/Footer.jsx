import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex justify-between px-15">
                
                <nav className=''>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    
                </nav>
                <nav className='flex flex-col items-center'>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover flex items-center gap-2 justify-center">Instagram <FaSquareInstagram /></a>
                    <a className="link link-hover flex items-center gap-2 justify-center">Facebook <FaSquareFacebook /></a>
                    <a className="link link-hover flex items-center gap-2 justify-center">Linkedin <FaLinkedin /></a>
                    
                </nav>
                <nav className='flex flex-col items-end'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;