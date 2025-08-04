import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deepmind Resume Analyzer" },
    { name: "description", content: "AI Powered Resume Analyzer to beat any ATS" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Strength</h1>
        <h2>Upgrade your resume by AI Powered Feedback</h2>
      </div>
    </section>
  </main>
}
