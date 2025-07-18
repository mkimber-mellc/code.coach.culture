import AboutPreview from "@/components/home/AboutPreview";
import BlogPreview from "@/components/home/BlogPreview";
import CategoryHighlights from "@/components/home/CategoryHighlights";
import HomeHero from "@/components/home/HomeHero";
import { MainContainer } from "mellc-ui-kit";

export default function Home() {
  return (
  <MainContainer bg="bgprimary" padding="none" gap={12}>
    <HomeHero />
    <CategoryHighlights />
    <AboutPreview />
    <BlogPreview />
  </MainContainer>
  );
}
