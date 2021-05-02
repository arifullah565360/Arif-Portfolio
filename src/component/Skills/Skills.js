import React from 'react';
import './Skills.css'




const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My Skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="textTitle">Expertise</div>
                        <div className="Progressbar mt-5">
                            <h5>Html</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>CSS</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>JavaScript</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>ES6</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>React.js</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "82%" }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>MongoDB</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>Heroku</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>Express.js</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>React Bootstrap</h5>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                    <div className="column right">
                    <div className="textTitle">Familiar</div>
                        <div className="Progressbar mt-3">
                            <h5>Strip</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>Rest Api</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "61%" }} aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>JSON</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "58%" }} aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>React Nativ</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>Netlify</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "62%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>Firebase</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <div className="textTools">Tools</div>
                            <h5>GitHub</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>Chrome Dev Tool</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="Progressbar mt-3">
                            <h5>VSCode</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;