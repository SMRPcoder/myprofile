import SkillCardComponent from '@/componets/skills/SkillCardComponent'
import React from 'react';
import type { Metadata } from "next";
import SkillCard2Component from '@/componets/skills/SkillCard2Component';
import SkillToggles from './_components/SkillToggles';

export const metadata: Metadata = {
    title: "Raja Pandeeswaran Skills",
    description: "Skills page of Raja Pandeeswaran portfolio.",
    alternates: { canonical: '/skills' },
};

export default function Skills() {

    const cardsData: { cmd: string, processing: string[] }[] = [
        {
            cmd: "sudo learn nodejs",
            processing: ["started learning nodejs in 2022.../", "node -v #v14.x", "fully installed nodejs to v22...", "learning nodejs@latest..."]
        },
        {
            cmd: "npm install expressjs",
            processing: ["diving into restful api...", "successfully created a api endpoint..."]
        },
        {
            cmd: "npm install mongoose",
            processing: ["started with Nosql database...", "learnt documents, collections, Database..."]
        },
        {
            cmd: "npm install jwt bcrypt",
            processing: ["entering into the art of Authentication...", "learnt the beauty of Authorization...", "fully installed successfully."]
        },
        {
            cmd: "sudo import frontend",
            processing: ["learning dom manuplation...", "learnt vanillaJS.", "stropped the jQuery...", "learnt ajax...", "imported successfully."]
        },
        {
            cmd: "npm install sequelize pg pg-hstore",
            processing: ["entering into the magic of ORM...", "learning sequelize for postgreSQL...", "Handled and migrated projectes from mongoDb to postgres..."]
        },
        {
            cmd: "npm install typescript",
            processing: ["new world of superset for javascript...", "fall in love with typescript...", "mentally installed successfully..."]
        },
        {
            cmd: "npx create-next-app@latest",
            processing: ["started learning frontend with react...", "choosen nextjs...", "feeling the power of ssr...", "moving to next@latest"]
        },
        {
            cmd: "npm install nest-cli",
            processing: ["feeling goosebumps of nestjs structure...", "power of typescript and Injecting concept...", "nest made with ❤️ by module, controller, service, dto, entries, guards, strategies,..."]
        },
        {
            cmd: "npm install @nestjs/sequelize @nestjs/mongoose",
            processing: ["installing sequelize...", "installing mongoose...", "learnt to use with nestjs..."]
        },
        {
            cmd: "sudo show next-process",
            processing: [
                "learning python for AI stuffs...", "processing...",
                "following the syntax of golang...", "processing..."]
        }
    ];
    return (
        <div className='flex flex-col' >
            <SkillToggles Card1={<SkillCardComponent cardsData={cardsData} />} Card2={<SkillCard2Component />} />
        </div>
    )
}
