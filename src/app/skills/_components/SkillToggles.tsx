"use client";
import SkillTopBar from '@/componets/skills/SkillTopBar';
import React, { useState } from 'react';

interface SkillToggleProps {
    Card1: React.JSX.Element;
    Card2: React.JSX.Element;
}

export default function SkillToggles({ Card1, Card2 }: SkillToggleProps) {

    const [showShell, setShowShell] = useState(true);

    const handleToggle = (key: "terminal" | "stack") => {
        if (key == "terminal") {
            setShowShell(true);
        } else {
            setShowShell(false);
        }
    }
    return (
        <div>
            <SkillTopBar onClick={handleToggle} isShell={showShell} />
            {
                showShell ? (
                    Card1
                ) : (
                    Card2
                )
            }
        </div>
    )
}
