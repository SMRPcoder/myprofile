
interface ExperienceCardProps {
    title: string;
    subtitle: string;
    description: string[];
    link?: string;
}

interface ProjectCardProps {
    icons: React.JSX.Element[];
    secondaryIcons: React.JSX.Element[];
    title: string;
    subtitle: string;
    description: string;
    link?: string;
}


interface SkillCardProps {
    cmd: string;
    processing: string[];
}