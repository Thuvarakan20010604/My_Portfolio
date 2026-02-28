import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Certificates from "@/components/Certificates";
import Awards from "@/components/Awards";
import Volunteering from "@/components/Volunteering";
import FutureProjects from "@/components/FutureProjects";
import Languages from "@/components/Languages";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Languages />
      <Services />
      <Resume />
      <Projects />
      <FutureProjects />
      <Skills />
      <Certificates />
      <Volunteering />
      <Awards />
      
      <Contact />
    </main>
  );
};

export default Home;
