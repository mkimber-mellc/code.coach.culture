import { Title, Subtitle, Button, FlexContainer, BodyText } from 'mellc-ui-kit';

export default function HomeHero() {
  return (
    <FlexContainer flexDirection="col" gap={6} padding='lg'>
      <Title color="textprimary">Code.Coach.Culture</Title>
      <Subtitle color="textprimary" align="center" weight="normal">
        Lead with Clarity, Build with Confidence, Grow with Intention
      </Subtitle>
      <BodyText color="textprimary" align='center'>
        Where ambitious creators and conscious leaders grow their skills, systems, and community—all
        without losing their vibe.
      </BodyText>
      <FlexContainer justify="center" gap={4}>
        <Button href="/blog" title="Read the Blog" bg="bgcta" color="textcta" padding="sm" />
        <Button
          href="mailto:marcdevceo@gmail.com"
          title="Contact Me"
          bg="bglight"
          color="textlight"
          padding="sm"
        /> 
      </FlexContainer>
    </FlexContainer>
  );
}
