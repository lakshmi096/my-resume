import React from "react";

const Skills = ({ content }) => {
    const spanSection = content.map((item) => {
        return (
            <li key={item.key}>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                {item.text}
            </li>
        )
    })
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node"></i></li>
                    <li className="list-inline-item"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    {spanSection}
                </ul>
            </div>
        </section>
    )
}

export default Skills;