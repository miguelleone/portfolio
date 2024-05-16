import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <a href='#top' className={styles.logo}></a>
                <div className={styles.navLinks}>
                    <a href='#about' className='navLinks'>Sobre mim</a>
                    <a href='#projects' className='navLinks'>Projetos</a>
                    <a href='#contact'  className='navLinks'>Contato</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;


