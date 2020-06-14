import React from "react";

const About = ({ content }) => {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">{content.firstName} <span className="text-primary">{content.lastName}</span></h1>
                <div className="subheading mb-5">{content.address}
                    <a href="mailto:name@email.com">{content.email}</a>
                </div>
                <p className="lead mb-5">{content.bio}</p>
                <div className="social-icons">
                    <a className="social-icon" href={content.linkedin}><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href={content.github}><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    )
}

export default About;