export type Publication = {
  slug: string
  title: string
  date: string
  excerpt: string
  venue?: string
  tags: string[]
  content: string
}

export const publications: Publication[] = []
