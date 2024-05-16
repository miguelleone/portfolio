import React from 'react';
import styles from './About.module.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const About = () => {
    return (
        <section id='about' className='containerSections animeLeft'>
                    <h1>Sobre mim</h1>
            <div className={`container ${styles.profile}`}>
                <div className={styles.img}></div>
                <div className={styles.dados}>
                    <p>Sou estudante de Desenvolvimento Front End e no fim da graduação de Publicidade e Propaganda pela UFPE. Quando não estou trabalhando ou estudando, provavelmente você pode me encontrar praticando violino ou me exercitando com uma corrida na cidade.</p>
                    <div className={styles.buttons}>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <a className='button' href='https://www.linkedin.com/in/mguelleone/'>
                                <p><FaLinkedin />LinkedIn</p>
                            </a>
                            <a className='button' href='https://github.com/miguelleone'>
                                <p><FaGithub />Github</p>
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;