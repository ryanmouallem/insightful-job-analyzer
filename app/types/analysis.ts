export type Analysis = {
    matchScore: number;
    description: string;
    matchingSkills: string[];
    missingSkills: string[];
    recommendation: string;
};