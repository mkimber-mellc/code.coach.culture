import { defaultPosts, BlogPreviewProps, BlogPost } from '@/lib/data/blogposts';
import { Subtitle, BodyText, Button, FlexContainer, GridContainer } from 'mellc-ui-kit';

export default function BlogPreview({ posts = defaultPosts, limit = 3 }: BlogPreviewProps) {
  const previewPosts = posts.slice(0, limit);

  return (
    <FlexContainer flexDirection="col" gap={6} padding="xl" width={'full'} className="md:px-20">
      <Subtitle color="textprimary" align="center">
        Latest Blog Posts
      </Subtitle>
      <GridContainer gridGap={6} className="md:grid-cols-3">
        {previewPosts.map((post: BlogPost) => (
          <FlexContainer
            key={post.id}
            flexDirection="col"
            bg="bgsecondary"
            borderRadius="lg"
            padding="md"
            justify='between'
          >
            <BodyText size="lg" weight="semibold" color="textsecondary">
              {post.title}
            </BodyText>
            <BodyText color="textsecondary">{post.excerpt}</BodyText>
            <Button
              title="Read More"
              href={`/blog/${post.slug}`}
              bg="bgaccent"
              color="textaccent"
              size="sm"
              padding="xs"
            />
          </FlexContainer>
        ))}
      </GridContainer>
      <FlexContainer justify="center" padding="sm">
        <Button title="See all posts" href="/blog" bg="bgcta" color="textcta" className='px-8 py-2' />
      </FlexContainer>
    </FlexContainer>
  );
}
