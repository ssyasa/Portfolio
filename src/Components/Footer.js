import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shreyas C.R</h4>
      <h4>Copyright &copy; 2024 Shreyas</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ssyasa" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shreyas-c-r-777b4229a" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailto:shreyassrt483@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  );
}

export default Footer;
