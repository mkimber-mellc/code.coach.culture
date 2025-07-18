import { FlexContainer, Subtitle, BodyText, Title } from "mellc-ui-kit";

export default function AboutHero() {
  return (
    <FlexContainer
      flexDirection="col"
      alignItems="center"
      gap={4}
      padding="lg"
      bg="bgprimary"
      className="sm:p-12 md:p-16 lg:p-20"
    >
      <Title color="textprimary">
        Marcus Kimber
      </Title>
      <Subtitle color="textprimary" align="center" >
        The People Developer
      </Subtitle>
      <BodyText size="md" color="textprimary" align="center">
        I help builders, leaders, and creators turn strategy into reality—without losing their voice or their vibe. Blending tech, leadership, and culture to create lasting growth for small businesses and solopreneurs.
      </BodyText>
    </FlexContainer>
  );
}
