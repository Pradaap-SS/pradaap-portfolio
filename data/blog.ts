export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

export const posts: BlogPost[] = []
