import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deepmind Resume Analyzer" },
    { name: "description", content: "AI Powered Resume Analyzer to beat any ATS" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className="main-section">
      <Navbar />

      <div className="page-heading">
        <h1>Track Your Applications & Resume Strength</h1>
        <h2>Upgrade your resume by AI Powered Feedback</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
  </main>
}
