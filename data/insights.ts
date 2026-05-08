export type InsightCategory =
  | 'Engineering Story'
  | 'System Design'
  | 'Deep Dive'

export type Insight = {
  slug: string
  title: string
  date: string
  category: InsightCategory
  excerpt: string
  tags: string[]
  readTime: number
  content: string
  sourceUrl?: string
  sourceLabel?: string
}

export const insights: Insight[] = [
  {
    slug: 'sliding-window',
    title: 'Sliding Window — The Complete DSA Interview Guide',
    date: '2026-05-06',
    category: 'Deep Dive',
    excerpt:
      'A comprehensive case study on the Sliding Window pattern — fixed/dynamic windows, 4-language templates, 12 problems with full dry runs, mock interview simulation, monotonic deque, rate limiter design, and a FAANG-ready practice roadmap.',
    tags: ['Algorithms', 'Sliding Window', 'LeetCode', 'DSA', 'Interview Prep', 'FAANG'],
    readTime: 60,
    content: `<p>Full interactive guide — open below.</p>`,
    sourceUrl: '/insights/sliding-window',
    sourceLabel: 'Open the Full Guide',
  },
  {
    slug: 'python-interview-guide',
    title: 'Python for Coding Interviews — The Complete Reference',
    date: '2026-04-18',
    category: 'Deep Dive',
    excerpt:
      'A living reference guide covering Python syntax, data structures, algorithms, LeetCode patterns, and interview-ready templates — the first entry in the DSA Interview series on interview preparation.',
    tags: ['Python', 'LeetCode', 'Algorithms', 'Data Structures', 'Interview Prep'],
    readTime: 45,
    content: `
      <p>This is a full-length interactive reference. Click the link below to open the guide.</p>
    `,
    sourceUrl: '/insights/python-interview-guide',
    sourceLabel: 'Open the Full Guide'
  }
]
