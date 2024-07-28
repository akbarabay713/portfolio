import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "./../components/About";
import Contact from "./../components/Contact";
import Projects from "./../components/Projects";
import Experience from "../components/Experience";
import { fetchPageInfo } from "./../utils/fetchPageInfo";
import { fetchSocials } from "./../utils/fetchSocials";
import { fetchProjects } from "./../utils/fetchProjects";
import { fetchSkills } from "./../utils/fetchSkills";

export default function Home(props) {
  const { pageInfo, skills, projects, socials } = props;

  return (
    <div className="h-screen w-screen bg-[#1b1c1e] scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-zinc-800  snap-y snap-mandatory scroll-smooth ">
      <Head>
        <title>akbar</title>
        <meta name="description" content="portfolio 1.0, akbar abu" />
        <link rel="icon" href="/photo2.jpg" />
      </Head>

      <section id="hero">
        <Hero pageInfo={pageInfo} socials={socials} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      {/* <section id="experience">
          <Experience projects={projects} />
        </section> */}

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="contact">
        <Contact pageInfo={pageInfo} />
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  return {
    props: {
      pageInfo,
      socials,
      projects,
      skills,
    },
    revalidate: 10,
  };
}
