import ExperienceCard from '@/componets/ExperienceCard';
import React from 'react';

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Raja Pandeeswaran Experience",
    description: "Experience page of Raja Pandeeswaran portfolio",
    alternates: { canonical: '/experience' },
};

export default function Experience() {

    const experienceData: ExperienceCardProps[] = [
        {
            title: "Nodejs Backend Developer",
            subtitle: "HeyBobo - (Oct 2025 - March 2026)",
            description: ["Worked as a Node.js Backend Developer and led the Dietary module",
                "owning end-to-end design and implementation",
                "Built scalable backend services across health, nutrition, fitness, education, and lifestyle domains using NestJS (Express + Fastify), Python FastAPI, MongoDB, and Redis. Integrated AI-driven features",
                "Including dynamic user chat suggestions and conversation history management. Deployed services using Docker and contributed to CI/CD pipelines",
                "while strengthening server-side architecture and production deployment practices"],
            // link: "https://heybobo.ai"
        },
        {
            title: "Nodejs Backend Developer",
            subtitle: "InfoApto Technology - (Sep 2023 - sep 2025)",
            description: ["Achieved 40% faster development using NestJs and NextJs by optimizing backend services.",
                "Streamlined frontend-backend integration processes for seamless functionality.",
                "Designed and maintained robust databases, optimized queries, and implemented indexing and normalization strategies."
            ],
            link: "https://infoaptotech.com"
        },
        {
            title: "Nodejs Backend Developer",
            subtitle: "Ramsol - (Sep 2022 - Aug 2023)",
            description: ["Improved website performance and application stability by 50%.",
                "Refactored and optimized backend services for efficiency and maintainability.",
                "Migrated projects from the MERN stack (MongoDB) to PERN (PostgreSQL with Sequelize)."],
            link: "https://ramsol.in"
        }
    ]
    return (
        <div>
            <div className="text-center mb-6 bg-gradient-to-r from-purple-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
                My Experience
            </div>
            <ExperienceCard cardsData={experienceData} />
        </div>

    )
}
