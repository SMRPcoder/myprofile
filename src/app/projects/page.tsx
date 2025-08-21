import ProjectCardComponent from '@/componets/ProjectCardComponent'
import React from 'react';
import ExpressJsSVG from "@/componets/icons/ExpressJsSVG";
import NestJsSVG from "@/componets/icons/NestJsSVG";
import PostgreSqlSVG from "@/componets/icons/PostgreSqlSVG";
import NextJsSVG from "@/componets/icons/NextJsSVG";
import MongoDbSVG from "@/componets/icons/MongoDbSVG";
import MongooseSVG from "@/componets/icons/MongooseSVG";
import SequelizeSVG from "@/componets/icons/SequelizeSVG";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "RajaPandeeswaran Projects",
    description: "Project page of RajaPandeeswaran portfolio, This is Projects Done by Rajapandeeswaran.",
};

export default function projects() {

    const projectCardsData: ProjectCardProps[] = [
        {
            icons: [<NestJsSVG key={1} />, <PostgreSqlSVG key={2} />],
            secondaryIcons: [<SequelizeSVG key={1} />, <NextJsSVG key={2} />],
            title: "Recrubot.com",
            subtitle: "Job Search Tool.",
            description: `Built with NestJS, NextJs, PostgreSQL, and Python (for AI assessment and
    reports). Includes login system, job posting management, and user role control.`,
            link: "https://recrubot.com"
        },
        {
            icons: [<NestJsSVG key={1} />, <PostgreSqlSVG key={2} />],
            secondaryIcons: [<SequelizeSVG key={1} />, <NextJsSVG key={2} />],
            title: "Task Management.",
            subtitle: "Task master for Org",
            description: `Developed using NestJs, PostgreSQL, NextJs. Focuses on team productivity, hierarchy-based
    task assignment, and AI-integrated reports.`
        },
        {
            icons: [<ExpressJsSVG key={1} />, <MongoDbSVG key={2} />],
            secondaryIcons: [<MongooseSVG key={1} />],
            title: "WitsAcumen",
            subtitle: "New Bussiness Intel.",
            description: `Publishing a leadership vacancy in top-tier companies, built using Node.js
    (Express) with MongoDB and Mongoose. User login is managed through wallet authentication, allowing users to
    view and access relevant leads.`,
            link: "https://witsacumen.com"
        },
        {
            icons: [<NestJsSVG key={1} />, <PostgreSqlSVG key={2} />],
            secondaryIcons: [<SequelizeSVG key={1} />, <NextJsSVG key={2} />],
            title: "Atleader",
            subtitle: "Leader’s portal.",
            description: `Received requirements from recruiters/HR by allowing them to log in. On the admin
    side, a suitable candidate is posted for each requirement. A wallet-based, step-by-step process is implemented for
    recruiters.`,
            link: "https://atleader.com"
        },
        {
            icons: [<ExpressJsSVG key={1} />, <PostgreSqlSVG key={2} />],
            secondaryIcons: [<SequelizeSVG key={1} />],
            title: "REFO",
            subtitle: "HRMS.",
            description: `A full-featured HR system built with Node.js, ExpressJs, ReactJs, and PostgreSQL to manage employees,
    leaves, attendance, payroll, and recruitment with end-to-end ATS.`
        },
        {
            icons: [<NestJsSVG key={1} />, <MongoDbSVG key={2} />],
            secondaryIcons: [<MongooseSVG key={1} />],
            title: "Candidate Validation Service.",
            subtitle: "Recruiting Based",
            description: `Built with Nestjs and MongoDB. Companies manage and validate candidate data
    securely.`
        },
        {
            icons: [<ExpressJsSVG key={1} />, <PostgreSqlSVG key={2} />],
            secondaryIcons: [<SequelizeSVG key={1} />],
            title: "Recruiter Community.",
            subtitle: "Community",
            description: `A Stack Overflow-like Q&A platform for recruiters, built with Express.js and PostgreSQL
    (Sequelize ORM).`
        }
    ];
    return (
        <div>
            <div className="text-center mb-6 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
                My Projects
            </div>
            <ProjectCardComponent cardsData={projectCardsData} />
        </div>
    )
}
