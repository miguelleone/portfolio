import React from "react";
import styles from './Contact.module.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
    return (
        <section id="contact" className='containerSections'>
            <div className={styles.dados}>
                <p>Ei, entra em contato!</p>
                <h1>miguelleone@gmail.com</h1>
                <div className={styles.buttons}>
                    <IconContext.Provider value={{ className: "icon" }}>
                        <a className='button' href='https://www.linkedin.com/in/mguelleone/'>
                            <p><FaLinkedin />LinkedIn</p>
                        </a>
                        <a className='button' href='https://github.com/miguelleone'>
                            <p><FaGithub />Github</p>
                        </a>
                        <a className='button' href='https://www.instagram.com/miguelleone_/'>
                            <p><AiFillInstagram />Instagram</p>
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </section> 
    );
};

export default Contact;