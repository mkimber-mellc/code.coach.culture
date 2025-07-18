export type BlogPost = {
  id: string | number;
  title: string;
  excerpt: string;
  slug: string;
  date?: string;
};

export type BlogPreviewProps = {
  posts?: BlogPost[];
  limit?: number;
};

export const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Build with Intention: The CCC Way',
    excerpt: 'How to lead, code, and grow your business without losing your vibe.',
    slug: 'build-with-intention',
    date: '2024-07-19',
  },
  {
    id: 2,
    title: '3 Lessons from Solopreneur Leadership',
    excerpt: 'What most devs and founders get wrong about leading themselves.',
    slug: 'solopreneur-leadership',
    date: '2024-07-12',
  },
  {
    id: 3,
    title: 'Code, Culture, Confidence: The Holy Trinity',
    excerpt: 'The real connection between personal growth and product velocity.',
    slug: 'code-culture-confidence',
    date: '2024-07-05',
  },
];