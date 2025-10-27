import SectionHero from "@/components/sections/SectionHero";
import SectionAbout from "@/components/sections/SectionAbout"; 
import SectionTecnologies from "@/components/sections/SectionTechnologies";
import SectionWorkSteps from "@/components/sections/SectionWorkSteps";
import SectionTeam from "@/components/sections/SectionTeam";
import SectionContacts from "@/components/sections/SectionContacts";

export default function Home() {
  return (
      <>
        <SectionHero/>
        <SectionAbout/>
        <SectionTecnologies/>
        <SectionWorkSteps/>
        <SectionTeam/>
        <SectionContacts/>
      </>  
    );
}
