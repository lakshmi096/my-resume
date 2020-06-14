import React from "react";

const Experience = ({ content }) => {
    const columnSection = content.map((item) => {
        return (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={item.key}>
                <div className="flex-grow-1">
                    <h3 className="mb-0">{item.designation}</h3>
                    <div className="subheading mb-3">{item.company}</div>
                    <p>{item.work}</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{item.duration}</span></div>
            </div>
        )
    })
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                {columnSection}
            </div>
        </section>
    )
}

export default Experience;
