export type Publication = {
  slug: string
  title: string
  date: string
  sortOrder?: number
  excerpt: string
  venue?: string
  tags: string[]
  content: string
  sourceUrl?: string
  sourceLabel?: string
}

export const publications: Publication[] = [
  {
    slug: 'analyzing-peoples-behaviour-through-media',
    title: "Analyzing People's Behaviour Through Media",
    date: '2020-03-03',
    sortOrder: 1,
    excerpt:
      'A multimodal behavior-analysis project focused on extracting emotions and communication patterns from live or uploaded video, audio, and text inputs.',
    venue: 'Research Project',
    tags: ['Multimodal Analysis', 'Machine Learning', 'Video', 'Audio', 'NLP'],
    sourceUrl: 'https://github.com/Pradaap-SS/Analyzing-People-s-Behaviour-Through-Media',
    sourceLabel: 'View GitHub Project',
    content: `
      <p>This project explores how to extract individual emotions and communication patterns from media inputs, including live or uploaded videos, audio streams, and text. The work is framed as a multimodal analysis pipeline rather than a single-model experiment.</p>
      <p>The approach combines mathematical modeling with machine learning optimization so each module can be evaluated and tuned for stronger end-to-end performance. The core objective is to understand human behavior signals across multiple media types instead of relying on one isolated modality.</p>
      <p><a href="https://github.com/Pradaap-SS/Analyzing-People-s-Behaviour-Through-Media" target="_blank" rel="noopener noreferrer">Open the GitHub project</a> to review the notebooks and implementation details.</p>
    `
  },
  {
    slug: 'implementation-of-sentiment-analysis-with-sagemaker-and-spark',
    title: 'Implementation of Sentiment Analysis with SageMaker and Spark',
    date: '2023-02-22',
    excerpt:
      'A report on building a sentiment-analysis workflow with AWS SageMaker and Apache Spark, covering data preparation, exploratory analysis, model development, and scalable prediction pipelines.',
    venue: 'Big Data Report',
    tags: ['AWS SageMaker', 'Apache Spark', 'Sentiment Analysis', 'Machine Learning'],
    sourceUrl:
      'https://github.com/Pradaap-SS/Emotion-Sentiment-Analysis-Using-AWS-SageMaker-Spark/blob/main/BigData554%20Report_Final.pdf',
    sourceLabel: 'Open Report PDF',
    content: `
      <p>This report focuses on implementing sentiment analysis using AWS SageMaker and Apache Spark. The workflow centers on the machine learning lifecycle: preparing the input dataset, performing exploratory analysis, splitting train and test data, and building a model for prediction.</p>
      <p>The report also emphasizes Spark as the scalable processing layer that can be used independently or alongside other distributed computing technologies. In practice, that makes the work useful as both an ML implementation write-up and a cloud-scale data engineering report.</p>
      <p><a href="https://github.com/Pradaap-SS/Emotion-Sentiment-Analysis-Using-AWS-SageMaker-Spark/blob/main/BigData554%20Report_Final.pdf" target="_blank" rel="noopener noreferrer">Open the original report on GitHub</a>.</p>
    `
  },
  {
    slug: 'adaptive-project-planning-for-epics-features-and-user-stories',
    title: 'Adaptive Project Planning for Epics, Features and User Stories',
    date: '2022-11-28',
    excerpt:
      'A software project management paper comparing adaptive and conventional approaches, with a focus on agile planning, work breakdown structures, and the relationship between epics, features, and user stories.',
    venue: 'CS 587 Software Project Management Term Paper',
    tags: ['Agile', 'Project Management', 'Epics', 'Features', 'User Stories'],
    sourceUrl: '/docs/adaptive-project-planning-epics-features-user-stories.pdf',
    sourceLabel: 'Open Paper PDF',
    content: `
      <p>This term paper examines why conventional waterfall-style project management often struggles in fast-changing delivery environments and argues for adaptive project management as a better fit for evolving requirements.</p>
      <p>It covers the adaptive project framework, the role of work breakdown structures, and how planning artifacts connect across themes, epics, features, and user stories. The paper is especially relevant for teams translating high-level business initiatives into sprint-ready engineering work.</p>
      <p><a href="/docs/adaptive-project-planning-epics-features-user-stories.pdf" target="_blank" rel="noopener noreferrer">Open the full paper</a>.</p>
    `
  }
]
