export type Category = {
  label: string;
  description: string;
  href: string;
  bg?: string; 
  color?: string;
};

export const defaultCategories: Category[] = [
  {
    label: "Dev Diaries",
    description: "Code lessons, project logs, and tech deep dives.",
    href: "/blog?cat=dev-diaries",
    bg: 'bgwarm',
    color: "textwarm",
  },
  {
    label: "Leadership Logs",
    description: "Stories and strategies from the field.",
    href: "/blog?cat=leadership-logs",
    bg: 'bgsecondary',
    color: "textsecondary",
  },
  {
    label: "Ops Strategy",
    description: "Building systems that actually work.",
    href: "/blog?cat=ops-strategy",
    bg: 'bgwarm',
    color: "textwarm",
  },
  {
    label: "Mindset Motivation",
    description: "Level up your inner game.",
    href: "/blog?cat=mindset-motivation",
    bg: 'bgsecondary',
    color: "textseondary",
  },
];