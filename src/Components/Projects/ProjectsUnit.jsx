import React from "react";
import styles from "./Projects.module.css";
import { IconContext } from "react-icons";
import { RiLayout3Fill } from "react-icons/ri";
import { AiFillCode } from "react-icons/ai";

const ProjectsUnit = ( props ) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={props.imagem} alt={props.titulo} />
            <div className={styles.dados}>
                <h2>{props.titulo}</h2>
                <p>{props.texto}</p>
            </div>
            <IconContext.Provider value={{ className: "icon" }}>
                <div className={styles.buttons}>
                    <a className='button' href={props.projeto}>
                        <p><RiLayout3Fill />Projeto</p>
                    </a>
                    <a className='button' href={props.codigo}>
                        <p><AiFillCode />Código</p>
                    </a>
                </div>
            </IconContext.Provider>
        </div>
    );
};
export default ProjectsUnit;