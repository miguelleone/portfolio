import React from "react";
import styles from "./Projects.module.css";
import ProjectsUnit from "./ProjectsUnit";
import ProjectDesign from "./ProjectDesign";
import recanorteImg from "../../Assets/recanorte.jpg"
import clinicaVivaImg from "../../Assets/clinicaViva.jpg"
import dogsImg from "../../Assets/dogs.jpg"
// import bravaImg from "../../Assets/brava.jpg"
import tuboImg from "../../Assets/tubo.jpg"
import lucianaImg from "../../Assets/luciana.jpg"
import fisioImg from "../../Assets/fisioclinica.jpg"

const recanorte = {
    imagem: recanorteImg,
    titulo: 'Site Recanorte',
    texto: 'Desenvolvimento do Website',
    projeto: 'https://www.recanorte.com.br/index.html',
    codigo: 'https://github.com/Recamg/site-Recanorte.git',
};

const clinicaViva = {
    imagem: clinicaVivaImg,
    titulo: 'Site Clínica Viva',
    texto: 'Desenvolvimento do Website',
    projeto: 'https://www.clinicavivamult.com.br/index.html',
    codigo: 'https://github.com/miguelleone/ClinicaViva.git',
}

const dogs = {
    imagem: dogsImg,
    titulo: 'Dogs ..and Cats - A Rede Social dos animaizinhos',
    texto: 'Desenvolvimento da Plataforma Online',
    projeto: 'https://dogs-react-rho.vercel.app/',
    codigo: 'https://github.com/miguelleone/Dogs_React.git',
}

// const bravaLP = {
//     imagem: bravaImg,
//     titulo: 'Brava Landing Page',
//     texto: 'Meu primeiro website desenvolvido',
//     projeto: 'https://brava-landing-page.vercel.app/',
//     codigo: 'https://github.com/miguelleone/Brava-Landing-Page.git',
// }

const tubodeInsight = {
    imagem: tuboImg,
    titulo: 'Tubo de Insight',
    texto: 'Artes e identidade visual desenvolvidas para redes sociais',
    projeto: 'https://www.behance.net/gallery/119049183/Tubo-de-Insight-2020-(Tubo-Urbano)',
}

const lucianaRocha = {
    imagem: lucianaImg,
    titulo: 'Luciana Rocha',
    texto: 'Artes e identidade visual desenvolvidas para redes sociais',
    projeto: 'https://www.behance.net/gallery/147885655/Social-Media-Luciana-Rocha',
}

const fisioclinica = {
    imagem: fisioImg,
    titulo: 'Fisioclínica Physio Center',
    texto: 'Artes e identidade visual desenvolvidas para redes sociais',
    projeto: 'https://www.behance.net/gallery/147843959/Social-Media-Fisioclinica-Physio-Center',
}

const Projects = () => {
    return (
        <section id="projects" className='containerSections'>
            <h1>Projetos</h1>
            <div className={styles.projectsGroup}>
                <div className={styles.projectsArea}>
                    <ProjectsUnit imagem={recanorte.imagem} titulo={recanorte.titulo} texto={recanorte.texto} projeto={recanorte.projeto} codigo={recanorte.codigo}/>
                    <ProjectsUnit imagem={clinicaViva.imagem} titulo={clinicaViva.titulo} texto={clinicaViva.texto} projeto={clinicaViva.projeto} codigo={clinicaViva.codigo}/>
                    <ProjectsUnit imagem={dogs.imagem} titulo={dogs.titulo} texto={dogs.texto} projeto={dogs.projeto} codigo={dogs.codigo}/>
                    {/* <ProjectsUnit imagem={bravaLP.imagem} titulo={bravaLP.titulo} texto={bravaLP.texto} projeto={bravaLP.projeto} codigo={bravaLP.codigo}/> */}
                    <ProjectDesign imagem={tubodeInsight.imagem} titulo={tubodeInsight.titulo} texto={tubodeInsight.texto} projeto={tubodeInsight.projeto}/>
                    <ProjectDesign imagem={lucianaRocha.imagem} titulo={lucianaRocha.titulo} texto={lucianaRocha.texto} projeto={lucianaRocha.projeto}/>
                    <ProjectDesign imagem={fisioclinica.imagem} titulo={fisioclinica.titulo} texto={fisioclinica.texto} projeto={fisioclinica.projeto}/>
                </div>
            </div>
        </section>
    );
};

export default Projects;