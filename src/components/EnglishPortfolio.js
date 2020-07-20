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
                    <Link className="router-link" to="/">
                        <li className="orangish">PT-BR</li>
                    </Link>
                    <Scroll
                        className="scroll"
                        to="meus-projetos"
                        smooth={true}
                        duration={1000}
                    >
                        <li>Projects</li>
                    </Scroll>
                    <Scroll
                        className="scroll"
                        to="sobre-container"
                        smooth={true}
                        duration={1000}
                    >
                        <li>About</li>
                    </Scroll>
                    <Scroll
                        className="scroll"
                        to="sobre-contato"
                        smooth={true}
                        duration={1000}
                    >
                        <li>Contact</li>
                    </Scroll>
                </ul>
            </div>
            <div className="title">
                <h1>
                    Hi! My name is{" "}
                    <span className="orangish gustavo">Gustavo Maciel</span>,
                    i’m a web developer focused on{" "}
                    <span className="orangish">JavaScript</span> and its
                    technologies.
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
                <h1 className="meus-projetos">My Projects</h1>
                {/* Trivia App*/}
                <div className="trivia-app-container">
                    <h2 className="mobile-stack">Full-stack Trivia App</h2>
                    <div className="trivia-app-container-imgtext">
                        <img
                            src="images/trivia.png"
                            className="trivia-app-image"
                        />
                        <h4>
                            Web Application with JWT authentication that
                            consumes Open Trivia API. In the application, the
                            user has the option to choose between 24 categories
                            to play a Trivia Quiz game.
                        </h4>
                    </div>
                    <div className="tecnologias-trivia-app-container">
                        <h2 className="desktop-stack">Full-stack Trivia App</h2>
                        <h3>Technologies:</h3>
                        <img
                            src="images/trivia-tecnologias.png"
                            className="trivia-app-tecnologias"
                        />
                        <div className="trivia-app-btn">
                            <a
                                className="projetos-links"
                                href="https://scenic-lassen-volcanic-15787.herokuapp.com/"
                            >
                                View site
                            </a>
                            <a
                                className="projetos-links"
                                href="https://github.com/ggmaciel/full-stack-trivia-app"
                            >
                                Repository
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
                        />
                        <h4>
                            Web Application with JWT authentication where users
                            can post articles with WYSIWYG editor, delete posted
                            articles, endorse others articles, comment in
                            articles and delete posted comments.
                        </h4>
                    </div>

                    <div className="tecnologias-trivia-app-container">
                        <h2 className="desktop-stack">
                            Full-stack Markdown Blog
                        </h2>
                        <h3>Technologies:</h3>
                        <img
                            src="images/trivia-tecnologias.png"
                            className="trivia-app-tecnologias"
                        />
                        <div className="trivia-app-btn">
                            <a
                                className="projetos-links"
                                href="https://enigmatic-island-99067.herokuapp.com/"
                            >
                                View site
                            </a>
                            <a
                                className="projetos-links"
                                href="https://github.com/ggmaciel/full-stack-markdown-blog"
                            >
                                Repository
                            </a>
                        </div>
                    </div>
                </div>
                {/* Publicity Site*/}
                <div className="trivia-app-container ">
                    <h2 className="mobile-stack">Front-end Publicity Agency</h2>
                    <div className="trivia-app-container-imgtext ">
                        <img
                            src="images/daviabrigade.png"
                            className="trivia-app-image"
                        />
                        <h4>
                            Site made with React and GSAP 3 animations, for a
                            fictional publicity agency.
                        </h4>
                    </div>

                    <div className="tecnologias-trivia-app-container daviabrigade-tecnologias-container">
                        <h2 className="desktop-stack">
                            Front-end Publicity Agency
                        </h2>
                        <h3>Technologies:</h3>
                        <img
                            src="images/daviabrigade-tecnologias.png"
                            className="daviabrigade-tecnologias"
                        />
                        <div className="trivia-app-btn">
                            <a
                                className="projetos-links"
                                href="https://daviabrigade.netlify.app/"
                            >
                                View site
                            </a>
                            <a
                                className="projetos-links"
                                href="https://github.com/ggmaciel/front-end-publicity-agency"
                            >
                                Repository
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sobre e Contato*/}
            <div className="sobre-container">
                <h1>About me</h1>
                <div className="sobre-text">
                    <h4>
                        I’m 21 years old, born and raised in Recife and started
                        my programming journey in march of 2020 when i started
                        to attend college for a system analysis and development
                        degree.
                    </h4>{" "}
                    <h4>
                        Since then, i’m daily diving in the field and focusing
                        on web development and its possibilities.
                    </h4>
                </div>
                <div className="sobre-contato">
                    <h1>Contact</h1>
                    <h4>+ 55 (81) 99482-1314</h4>
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
