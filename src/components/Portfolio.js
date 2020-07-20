import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { Link as Scroll } from "react-scroll";

export default function Portfolio() {
    const element = <FontAwesomeIcon icon={faLinkedin} />;
    const element2 = <FontAwesomeIcon icon={faGithubSquare} />;
    return (
        <div>
            <div className="navbar">
                <ul className="navbar-list">
                    <Link className="router-link" to="/en">
                        <li className="orangish">English</li>
                    </Link>
                    <Scroll
                        className="scroll"
                        to="meus-projetos"
                        smooth={true}
                        duration={1000}
                    >
                        <li>Projetos</li>
                    </Scroll>
                    <Scroll
                        className="scroll"
                        to="sobre-container"
                        smooth={true}
                        duration={1000}
                    >
                        <li>Sobre</li>
                    </Scroll>
                    <Scroll
                        className="scroll"
                        to="sobre-contato"
                        smooth={true}
                        duration={1000}
                    >
                        <li>Contato</li>
                    </Scroll>
                </ul>
            </div>
            <div className="title">
                <h1>
                    Oi! Meu nome é{" "}
                    <span className="orangish gustavo">Gustavo Maciel</span>, eu
                    sou desenvolvedor web com foco em{" "}
                    <span className="orangish">JavaScript</span> e suas
                    tecnologias.
                </h1>
            </div>
            <div className="stack">
                <div className="front-end">
                    <ul className="front-end-list">
                        <li className="orangish stack-margin">Front-end</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="back-end">
                    <ul className="back-end-list">
                        <li className="orangish stack-margin">Back-end</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="projetos-container">
                <h1 className="meus-projetos">Meus projetos</h1>
                {/* Trivia App*/}
                <div className="trivia-app-container">
                    <h2 className="mobile-stack">Full-stack Trivia App</h2>
                    <div className="trivia-app-container-imgtext">
                        <img
                            src="images/trivia.png"
                            className="trivia-app-image"
                            alt="site de trivia que possui botões de login e registro e uma logo escrito trivia master"
                        />
                        <h4>
                            Aplicação web com autenticação com JWT que consome
                            Open Trivia API. Na aplicação, o usuário tem opção
                            dentre 24 categorias de jogar um Trivia Quiz.
                        </h4>
                    </div>
                    <div className="tecnologias-trivia-app-container">
                        <h2 className="desktop-stack">Full-stack Trivia App</h2>
                        <h3>Tecnologias:</h3>
                        <img
                            src="images/trivia-tecnologias.png"
                            className="trivia-app-tecnologias"
                            alt="logos do react, redux, mongodb, node e express"
                        />
                        <div className="trivia-app-btn">
                            <a
                                className="projetos-links"
                                href="https://scenic-lassen-volcanic-15787.herokuapp.com/"
                            >
                                Ver site
                            </a>
                            <a
                                className="projetos-links"
                                href="https://github.com/ggmaciel/full-stack-trivia-app"
                            >
                                Repositório
                            </a>
                        </div>
                    </div>
                </div>
                {/* Blog App*/}
                <div className="trivia-app-container">
                    <h2 className="mobile-stack">Full-stack Markdown Blog</h2>

                    <div className="trivia-app-container-imgtext">
                        <img
                            src="images/blog.png"
                            className="trivia-app-image"
                            alt="site de blog que tem fundo preto com um vetor verde que parte a imagem no meio e botões de login e registro"
                        />
                        <h4>
                            Aplicação web com autenticação com JWT onde usuários
                            podem postar artigos com editor WYSIWYG , deletar
                            seus artigos, curtir artigos de outros, comentar em
                            artigos e deletar seus comentários.
                        </h4>
                    </div>

                    <div className="tecnologias-trivia-app-container">
                        <h2 className="desktop-stack">
                            Full-stack Markdown Blog
                        </h2>
                        <h3>Tecnologias:</h3>
                        <img
                            src="images/trivia-tecnologias.png"
                            className="trivia-app-tecnologias"
                            alt="logos do react, redux, mongodb, node e express"
                        />
                        <div className="trivia-app-btn">
                            <a
                                className="projetos-links"
                                href="https://enigmatic-island-99067.herokuapp.com/"
                            >
                                Ver site
                            </a>
                            <a
                                className="projetos-links"
                                href="https://github.com/ggmaciel/full-stack-markdown-blog"
                            >
                                Repositório
                            </a>
                        </div>
                    </div>
                </div>
                {/* Publicity Site*/}
                <div className="trivia-app-container ">
                    <h2 className="mobile-stack">
                        Front-end Agência de Publicidade
                    </h2>
                    <div className="trivia-app-container-imgtext ">
                        <img
                            src="images/daviabrigade.png"
                            className="trivia-app-image"
                            alt="site de publicidade que no fundo possui foto de varias pessoas em mesa de reunião com a legenda na frente de Davia e Brigade."
                        />
                        <h4>
                            Site feito em React usando animações do GSAP 3 para
                            uma empresa de publicidade fictícia.
                        </h4>
                    </div>

                    <div className="tecnologias-trivia-app-container daviabrigade-tecnologias-container">
                        <h2 className="desktop-stack">
                            Front-end Agência de Publicidade
                        </h2>
                        <h3>Tecnologias:</h3>
                        <img
                            src="images/daviabrigade-tecnologias.png"
                            className="daviabrigade-tecnologias"
                            alt="logo do react e gsap 3"
                        />
                        <div className="trivia-app-btn">
                            <a
                                className="projetos-links"
                                href="https://daviabrigade.netlify.app/"
                            >
                                Ver site
                            </a>
                            <a
                                className="projetos-links"
                                href="https://github.com/ggmaciel/front-end-publicity-agency"
                            >
                                Repositório
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sobre e Contato*/}
            <div className="sobre-container">
                <h1>Sobre mim</h1>
                <div className="sobre-text">
                    <h4>
                        Tenho 21 anos, nasci e cresci em Recife e comecei minha
                        jornada na programação em março de 2020 quando comecei a
                        cursar análise e desenvolvimento de sistemas.
                    </h4>{" "}
                    <h4>
                        Desde então venho diariamente me debruçando dessa área e
                        me focando no estudo de desenvolvimento web e suas
                        possibilidades.
                    </h4>
                </div>
                <div className="sobre-contato">
                    <h1>Contato</h1>
                    <h4>(81) 99482-1314</h4>
                    <h4>gustavo14maciel@gmail.com</h4>
                </div>
            </div>
            <div className="socials">
                <a
                    className="icon"
                    href="https://www.linkedin.com/in/gustavo-maciel-4283a31b3/"
                >
                    {element}
                </a>
                <a className="icon" href="https://github.com/ggmaciel">
                    {element2}
                </a>
            </div>
        </div>
    );
}
