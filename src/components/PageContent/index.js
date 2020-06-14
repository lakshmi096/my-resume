import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";

const PageContent = () => {
    const pageContentData = {
        about: {
            firstName: "Lakshmi",
            lastName: "Ramakrishnan",
            address: "Kolkata, West Bengal, India · (91) 8981049795 ·",
            email: "lakshmirk.096@gmail.com",
            bio: `I am experienced javascipt developer familiar with agile frameworks. 
            I believe, iterative approaches to corporate strategy, foster collaborative thinking to
            further the overall value proposition.`,
            github: "https://github.com/lakshmi096",
            linkedin: "https://www.linkedin.com/in/lakshmi-ramakrishnan-ba1062132/"
        },
        experience: [
            {
                key: Math.random(),
                designation: "Software Engineer",
                company: "GeoTech InfoServices",
                duration: "July 2019 - Present",
                work: `Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                the day, going forward, a new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated content in real-time will have
                    multiple touchpoints for offshoring`
            },
            {
                key: Math.random(),
                designation: "Trainee Software Engineer",
                company: "GeoTech InfoServices",
                duration: "July 2018 - July 2019",
                work: `Podcasting operational change management inside of workflows to establish a framework. Taking
                seamless key performance indicators offline to maximise the long tail. Keeping your eye on
                the ball while performing a deep dive on the start-up mentality to derive convergence on
                cross-platform integration `
            },
            {
                key: Math.random(),
                designation: "Intern Software Engineer",
                company: "GeoTech InfoServices",
                duration: "Feb 2018 - April 2018",
                work: `Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence 
                without revolutionary ROI`
            }
        ],
        education: [
            {
                key: Math.random(),
                name: "West Bengal University of Technology",
                degree: "Bachelor of Technology",
                discipline: "Electronic & Communication Engineering",
                marks: "8.4 GPA",
                yop: "2018"
            },
            {
                key: Math.random(),
                name: "B.D.M. International",
                degree: "Central Board of Secondary Education",
                discipline: "All India Senior School Certificate Examination",
                marks: "91.7%",
                yop: "2014"
            },
            {
                key: Math.random(),
                name: "B.D.M. International",
                degree: "Central Board of Secondary Education",
                discipline: "All India Secondary School Examination",
                marks: "10 GPA",
                yop: "2012"
            }
        ],
        skills: [
            {
                key: Math.random(),
                text: "Experienced working as a backend developer, developing in Node.JS & Mongo"
            },
            {
                key: Math.random(),
                text: "Implemented security contraints with OAuth2"
            },
            {
                key: Math.random(),
                text: "Working knowledge of the LAMP & MERN stack"
            },
            {
                key: Math.random(),
                text: "Communicative with good sense of agile development & scrum"
            },
        ]
    }
    return (
        <div className="container-fluid p-0">
            <About content={pageContentData.about} />
            <hr className="m-0" />
            <Experience content={pageContentData.experience} />
            <hr className="m-0" />
            <Education content={pageContentData.education} />
            <hr className="m-0" />
            <Skills content={pageContentData.skills} />
            <hr className="m-0" />
            <Interests />
        </div>
    )
}

export default PageContent;