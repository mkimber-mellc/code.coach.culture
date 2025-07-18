import AboutCTA from "@/components/about-me/AboutCTA";
import AboutHero from "@/components/about-me/AboutHero";
import BioSection from "@/components/about-me/BioSection";
import SkillsSection from "@/components/about-me/SkillsSection";
import { MainContainer } from "mellc-ui-kit";

export default function AboutMe() {
    return (
        <MainContainer bg="bgprimary" gap={10}>
            <AboutHero />
            <BioSection />
            <SkillsSection />
            <AboutCTA />
        </MainContainer>
    )
}