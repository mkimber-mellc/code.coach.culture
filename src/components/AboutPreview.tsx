import { Subtitle, BodyText, Button, FlexContainer } from 'mellc-ui-kit';

export default function AboutPreview({
  name = "Marcus the DevCEO",
  tagline = "The People Developer",
  summary = "On a mission to help you win at work and in life—blending leadership, tech, and culture with authenticity.",
  ctaText = "About Me",
  ctaHref = "/about-me",
}) {
  return (
    <FlexContainer
      flexDirection="col"
      alignItems="center"
      gap={4}
      padding="2xl"
      bg="bgbrandmid"
      className="md:p-16"
    >
      <Subtitle color="textbrandmid" align="center" weight='bold'>
        Meet {name}
      </Subtitle>
      <BodyText color="textbrandmid" align="center" weight='semibold'>
        {tagline}
      </BodyText>
      <BodyText color="textbrandmid" align="center" italic>
        {summary}
      </BodyText>
      <Button href={ctaHref} padding='sm' title={ctaText} bg="bgcta" color="textcta" />
    </FlexContainer>
  );
}
