import type { ResumeAnalysis, JobMatchResult } from '@/types';
import {
  MOCK_RESUME_ANALYSIS,
  MOCK_JOB_MATCH,
  DEMO_RESUME_TEXT,
  DEMO_JOB_DESCRIPTION,
} from '@/data/mockData';

/**
 * Simulates extracting text from an uploaded PDF resume.
 * TODO: Replace with real PDF text extraction (e.g. pdf.js or a backend OCR service).
 */
export async function extractResumeText(file: File): Promise<string> {
  await simulateDelay(800);
  // In production, parse the PDF here. For the MVP we return a placeholder.
  return `Extracted text from ${file.name}`;
}

/**
 * Returns a demo resume text for the "Use Demo Resume" flow.
 */
export function getDemoResumeText(): string {
  return DEMO_RESUME_TEXT;
}

/**
 * Returns a demo job description for the "Use Demo Job" flow.
 */
export function getDemoJobDescription(): string {
  return DEMO_JOB_DESCRIPTION;
}

/**
 * Analyzes resume text and returns a structured analysis.
 * TODO: Replace mock with real AI API call (OpenAI / Anthropic / custom backend).
 */
export async function analyzeResume(resumeText: string): Promise<ResumeAnalysis> {
  await simulateDelay(1800);
  // resumeText is used in production; mock ignores it.
  void resumeText;
  return MOCK_RESUME_ANALYSIS;
}

/**
 * Compares a resume against a job description and returns a match result.
 * TODO: Replace mock with real AI API call that compares skills, experience, etc.
 */
export async function matchResumeToJob(
  resumeText: string,
  jobDescription: string
): Promise<JobMatchResult> {
  await simulateDelay(2000);
  void resumeText;
  void jobDescription;
  return MOCK_JOB_MATCH;
}

function simulateDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
