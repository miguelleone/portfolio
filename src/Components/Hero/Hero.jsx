import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './Hero.module.css';

export default function Scene() {
  return (
    <section>
      <div className={styles.heroTitle}>
        <h1>Miguel Leone.</h1>
        <p>Desenvolvedor Front End | UX/UX | Designer Gráfico</p>
      </div>
    <Spline className={styles.hero} scene="https://prod.spline.design/4cqOOT7KOvTJuI0I/scene.splinecode"/>
    </section>
  );
};

