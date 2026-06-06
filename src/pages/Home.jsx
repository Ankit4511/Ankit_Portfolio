import Hero from "../components/Hero";  
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import CertificationsAchievements from "../components/CertificationsAchievements";
import GithubStats from "../components/GithubStats";
import ContactSection from "../components/ContactSection";
import MobileBottomNav from "../components/MobileBottomNav";


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
      <div className="h-28 md:hidden"></div>

      <MobileBottomNav />
        </>
    )
}

export default Home;