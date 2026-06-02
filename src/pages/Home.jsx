import Hero from "../components/Hero";  
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import CertificationsAchievements from "../components/CertificationsAchievements";
import GithubStats from "../components/GithubStats";
import ContactSection from "../components/ContactSection";



function Home() {

    return (
        <>
        <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CertificationsAchievements />
      <GithubStats />
      <ContactSection />
        </>
    )
}

export default Home;