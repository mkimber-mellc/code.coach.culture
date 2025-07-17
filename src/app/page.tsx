import AboutPreview from "@/components/AboutPreview";
import BlogPreview from "@/components/BlogPreview";
import CategoryHighlights from "@/components/CategoryHighlights";
import HomeHero from "@/components/HomeHero";
import { MainContainer } from "mellc-ui-kit";

export default function Home() {
  return (
  <MainContainer bg="bgprimary">
    <HomeHero />
    <CategoryHighlights />
    <AboutPreview />
    <BlogPreview />
  </MainContainer>
  );
}
