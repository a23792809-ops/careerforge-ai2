import type {
  ResumeAnalysis,
  JobMatchResult,
  ResumeSummary,
  JobMatch,
} from '@/types';

export const DEMO_RESUME_TEXT = `John Anderson
Software Engineer

Experience:
- Developed a machine learning model for image classification.
- Built web applications using React and TypeScript.
- Designed and maintained PostgreSQL databases.
- Collaborated with cross-functional teams using Git and Agile methodologies.
- Optimized API performance reducing latency by 40%.

Skills: Python, SQL, Machine Learning, React, TypeScript, Git, PostgreSQL, REST APIs

Education:
B.S. in Computer Science, University of Technology (2022)

Projects:
- E-commerce Platform: Full-stack React/Node app with 500+ users.
- ML Sentiment Analyzer: NLP model achieving 88% accuracy on review data.`;

export const DEMO_JOB_DESCRIPTION = `Software Engineer — Cloud Infrastructure

We are seeking a Software Engineer to join our Cloud Infrastructure team.

Requirements:
- 3+ years of experience with Python and backend development
- Experience with AWS (EC2, S3, Lambda, RDS)
- Strong knowledge of Docker and container orchestration (Kubernetes)
- Experience with CI/CD pipelines
- SQL and database optimization skills
- Experience with Machine Learning pipelines is a plus
- React and TypeScript experience preferred
- Git and version control best practices
- Bachelor's degree in Computer Science or equivalent

Responsibilities:
- Design, build, and maintain scalable cloud services
- Deploy and manage containerized applications
- Collaborate with ML and product teams
- Monitor and optimize system performance`;

export const MOCK_RESUME_ANALYSIS: ResumeAnalysis = {
  overallScore: 87,
  rating: 'Strong Resume',
  categories: [
    {
      label: 'ATS Compatibility',
      score: 92,
      description: 'How well your resume parses through Applicant Tracking Systems',
    },
    {
      label: 'Content Quality',
      score: 86,
      description: 'Clarity, relevance, and depth of your experience descriptions',
    },
    {
      label: 'Skills Coverage',
      score: 90,
      description: 'Breadth and relevance of listed technical skills',
    },
    {
      label: 'Impact & Achievements',
      score: 78,
      description: 'Use of measurable outcomes and quantified results',
    },
    {
      label: 'Formatting',
      score: 89,
      description: 'Structure, consistency, and readability of your resume',
    },
  ],
  strengths: [
    'Clear technical skills section with relevant technologies',
    'Strong education section matching role requirements',
    'Relevant projects demonstrating hands-on experience',
    'Clean, well-structured formatting with consistent layout',
  ],
  improvements: [
    'Add measurable achievements with quantified outcomes',
    'Improve action verbs to start each bullet point',
    'Add more role-specific keywords for ATS optimization',
    'Strengthen project descriptions with impact metrics',
  ],
  recommendations: [
    {
      title: 'Use measurable impact',
      problem: 'Your experience bullets describe tasks but not outcomes.',
      solution: 'Quantify your achievements with specific metrics.',
      example: 'Instead of "Developed a machine learning model," try "Developed a machine learning model achieving 91% classification accuracy, reducing manual review time by 30%."',
      impact: 'High — Recruiters look for quantified results',
    },
    {
      title: 'Strengthen action verbs',
      problem: 'Several bullets start with weak or passive verbs.',
      solution: 'Start each bullet with a strong, active verb.',
      example: 'Replace "Was responsible for building APIs" with "Architected and deployed 12 REST APIs serving 50K daily requests."',
      impact: 'Medium — Improves readability and perceived impact',
    },
    {
      title: 'Add role-specific keywords',
      problem: 'Missing keywords that ATS systems scan for.',
      solution: 'Mirror key terms from the job description naturally.',
      example: 'If the role requires "CI/CD," mention your experience with GitHub Actions or Jenkins explicitly in your skills and experience sections.',
      impact: 'High — Critical for passing ATS filters',
    },
    {
      title: 'Expand project descriptions',
      problem: 'Projects lack technical depth and impact context.',
      solution: 'Add the tech stack, your role, and the outcome.',
      example: 'Instead of "E-commerce Platform," write "E-commerce Platform — Built a full-stack React/Node.js marketplace handling 500+ concurrent users with 99.9% uptime."',
      impact: 'Medium — Helps you stand out from similar candidates',
    },
  ],
};

export const MOCK_JOB_MATCH: JobMatchResult = {
  matchScore: 89,
  rating: 'Excellent Match',
  matchingSkills: ['Python', 'SQL', 'Machine Learning', 'Git', 'React', 'TypeScript'],
  missingSkills: ['AWS', 'Docker', 'Kubernetes'],
  experienceMatch: 88,
  technicalSkillsMatch: 94,
  educationMatch: 100,
  whyGoodMatch: [
    'You have 3+ years of Python experience, matching the core requirement.',
    'Your SQL and database optimization skills directly align with the role.',
    'Your Machine Learning project experience gives you an edge for the ML pipeline work.',
    'Your React and TypeScript skills cover the preferred frontend qualifications.',
    'Your CS degree satisfies the education requirement perfectly.',
  ],
  skillsToImprove: [
    { skill: 'AWS', priority: 1 },
    { skill: 'Docker', priority: 2 },
    { skill: 'Kubernetes', priority: 3 },
  ],
  recommendedActions: [
    'Complete an AWS certification (Solutions Architect Associate) to demonstrate cloud proficiency.',
    'Containerize one of your existing projects with Docker and add it to your portfolio.',
    'Deploy a small service to Kubernetes using Minikube or a cloud managed K8s cluster.',
    'Add a CI/CD pipeline section to your resume using GitHub Actions or similar tools.',
    'Highlight your API optimization work (40% latency reduction) more prominently in your resume summary.',
  ],
};

export const MOCK_RESUME_HISTORY: ResumeSummary[] = [
  {
    id: 'r1',
    name: 'Software Engineer Resume',
    date: 'Today',
    score: 87,
    status: 'Strong',
    type: 'resume',
  },
  {
    id: 'r2',
    name: 'AI/ML Resume',
    date: 'Yesterday',
    score: 82,
    status: 'Good',
    type: 'resume',
  },
  {
    id: 'r3',
    name: 'Full-Stack Developer Resume',
    date: '3 days ago',
    score: 79,
    status: 'Good',
    type: 'resume',
  },
  {
    id: 'r4',
    name: 'Backend Engineer Resume',
    date: '1 week ago',
    score: 91,
    status: 'Excellent',
    type: 'resume',
  },
];

export const MOCK_JOB_HISTORY: JobMatch[] = [
  {
    id: 'j1',
    resumeName: 'Software Engineer Resume',
    jobTitle: 'Cloud Infrastructure Engineer',
    date: 'Today',
    score: 89,
    status: 'Excellent',
  },
  {
    id: 'j2',
    resumeName: 'AI/ML Resume',
    jobTitle: 'Machine Learning Engineer',
    date: 'Yesterday',
    score: 76,
    status: 'Good',
  },
  {
    id: 'j3',
    resumeName: 'Full-Stack Developer Resume',
    jobTitle: 'Senior React Developer',
    date: '4 days ago',
    score: 84,
    status: 'Strong',
  },
];

export const DEMO_RESUME_FILE_NAME = 'Software Engineer Resume.pdf';
