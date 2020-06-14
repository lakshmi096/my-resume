import React from "react";

const Education = ({ content }) => {
    const columnSection = content.map((item) => {
        return (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={item.key}>
                <div className="flex-grow-1">
                    <h3 className="mb-0">{item.name}</h3>
                    <div className="subheading mb-3">{item.degree}</div>
                    <div>{item.discipline}</div>
                    <p>{item.marks}</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">Year of Passing:{item.yop}</span></div>
            </div>
        )
    })
    return (
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                {columnSection}
            </div>
        </section>
    )
}

export default Education;