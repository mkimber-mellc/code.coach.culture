import { Category, defaultCategories } from '@/lib/data/categories';
import { Card, Subtitle, CaptionText, GridContainer, FlexContainer, Center } from 'mellc-ui-kit';

export default function CategoryHighlights({
  categories = defaultCategories,
}: {
  categories?: Category[];
}) {
  return (
    <GridContainer gridGap={6} py="4xl" px="xl" placeItems="center" className="md:grid-cols-2">
      {categories.map((cat) => (
        <Card key={cat.label} bg={cat.bg} padding="xl" shadowColor="shadow-warm-lg">
          <FlexContainer flexDirection="col" gap={3} justify="between">
            <Subtitle color={cat.color} weight="bold" align="center">
              {cat.label}
            </Subtitle>
            <CaptionText color={cat.color} align="center">
              {cat.description}
            </CaptionText>
            <Center>
              <a
                href={cat.href}
                aria-label={`Explore ${cat.label}`}
                className={`${cat.color} hover:underline`}
              >
                → Explore ←
              </a>
            </Center>
          </FlexContainer>
        </Card>
      ))}
    </GridContainer>
  );
}
