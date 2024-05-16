import React from 'react';
import Hero from './Hero/Hero';
import About from './AboutMe/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
    return ( 
        <>    
            <Hero className='heroContainer' />
            <About />
            <Projects />
            <Contact /> 
        </>
    );
};

export default Home;