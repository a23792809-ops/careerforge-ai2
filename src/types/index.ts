export type ScoreCategory = {
  label: string;
  score: number;
  description?: string;
};

export type ResumeAnalysis = {
  overallScore: number;
  rating: string;
  categories: ScoreCategory[];
  strengths: string[];
  improvements: string[];
  recommendations: Recommendation[];
};

export type Recommendation = {
  title: string;
  problem: string;
  solution: string;
  example: string;
  impact: string;
};

export type JobMatchResult = {
  matchScore: number;
  rating: string;
  matchingSkills: string[];
  missingSkills: string[];
  experienceMatch: number;
  technicalSkillsMatch: number;
  educationMatch: number;
  whyGoodMatch: string[];
  skillsToImprove: { skill: string; priority: number }[];
  recommendedActions: string[];
};

export type ResumeSummary = {
  id: string;
  name: string;
  date: string;
  score: number;
  status: string;
  type: 'resume' | 'job';
};

export type JobMatch = {
  id: string;
  resumeName: string;
  jobTitle: string;
  date: string;
  score: number;
  status: string;
};
