import Layout from "../resume/layout";
import Header from "@/components/resume/Header";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Projects from "@/components/resume/Projects";
import Skills from "@/components/resume/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <div className="flex justify-end">
        <button className="text-blue-500 hover:underline">
          <Link href="/">Back to Home Page</Link>
        </button>
      </div>
    </Layout>
  );
}
