export type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  summary: string
  bullets: string[]
}

export type EducationItem = {
  degree: string
  institution: string
  location: string
}

export const profile = {
  name: 'Pradaap Shiva Kumar Shobha',
  preferredName: 'Pradaap S. S.',
  initials: 'PS',
  photo: {
    src: '/images/profile/profile-pic.png',
    alt: 'Pradaap Shiva Kumar Shobha profile photo'
  },
  location: 'Chicago, IL',
  phone: '+1 (872) 288-3228',
  email: 'pshivakumarshobha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pradaap-shobha/',
  role: 'Full Stack Builder | Software Engineer | Backend & Distributed Systems',
  tagline:
    'I build end-to-end full-stack products with AI-powered capabilities, backed by scalable distributed systems.',
  homepageSummary:
    'Full Stack Builder with 4+ years of experience shipping production applications across logistics, healthcare, and fintech. I build end-to-end products, from frontend workflows to backend services and data layers, with a strong focus on reliability, performance, and scalability. I use AI both to build smarter product features and to accelerate engineering workflows from prototyping to delivery.',
  recruiterHeadline: [
    'Builds modern full-stack products end-to-end, from responsive frontend experiences to scalable backend and distributed services.',
    'Applies AI to product capabilities (automation, intelligent workflows, document processing) and to faster development execution.',
    'Delivered measurable impact: 15% lower API latency, 20% fewer production incidents, 30% faster database queries via indexing, and 80% reduction in manual effort.'
  ],
} as const

export const aboutParagraphs: string[] = [
  'I am a Full Stack Builder and Software Engineer with 4+ years of experience delivering end-to-end products across logistics, healthcare, and fintech. I build complete systems from user-facing workflows to backend services and data layers for high-transaction, operationally critical environments.',
  'My work combines product development with strong backend foundations: API design, asynchronous processing, distributed service patterns, interoperability, data pipelines, schema evolution, and CI/CD. I focus on reliable releases, predictable scalability, and measurable production impact, including lower latency, fewer incidents, and major reductions in manual operations.',
  'I build products using AI capabilities to add intelligent workflows and automation, and I also use AI to speed up engineering delivery. I am targeting full-stack engineering roles centered on AI-driven product development, backend and distributed systems, and scalable cloud-native architectures.'
]

export const skillsByCategory = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++'],
  Databases: ['MongoDB', 'SQL', 'Oracle', 'SQL Server', 'DynamoDB', 'Elasticsearch', 'Teradata'],
  'Full Stack (Frontend, Backend)': ['Nuxt.js', 'Next.js', 'Vue', 'React', 'Angular', 'Node.js', 'REST APIs', 'Microservices', 'Express', 'Spring Boot', 'Flask', 'Django', 'Kafka', 'Cerner CCL'],
  'AI/ML': ['Prompt Engineering', 'Embeddings', 'Vector Databases','Machine Learning', 'NLP', 'AI Workflow Orchestration', 'Optical Character Recognition (OCR)','Retrieval-Augmented Generation (RAG)', 'Model API Integration'],
  Cloud: ['AWS (S3, RDS, VPC, EC2)', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  Tools: ['GitHub Actions', 'Observability (Logging/Metrics)', 'Jenkins', 'Nginx', 'CI/CD', 'Agile']
} as const

export const experience: ExperienceItem[] = [
  {
    title: 'Full Stack Software Engineer',
    company: 'Hub Group Inc',
    location: 'Oak Brook, IL',
    period: 'Jan 2024 - Present',
    summary:
      '',
    bullets: [
      'Owned backend architecture for logistics platforms processing thousands of daily transactions, driving service decomposition and database optimizations that reduced end to end API latency by 15% .',
      'Identified systemic reliability issues across tightly coupled legacy services, redesigned service boundaries, reducing recurring production incidents by 20% across multiple consecutive release cycles and operational periods.',
      'Led design of automated document processing pipeline orchestrating third party machine learning services, owning asynchronous workflows, retries, and failure handling that reduced manual AP AR effort by 80% overall.',
      'Established backend standards for REST APIs and MongoDB schema evolution, improving backward compatibility and deployment safety while reducing breaking change defects by 30% across multiple quarterly releases.'
    ]
  },
  {
    title: 'Software Engineer - Healthcare Backend Systems',
    company: 'Oracle Cerner',
    location: 'Bengaluru, India',
    period: 'Apr 2021 - Aug 2022',
    summary:
      '',
    bullets: [
      'Designed and implemented healthcare backend components using Java, Cerner CCL, and REST APIs, improving clinical reporting and documentation workflows and increasing operational efficiency by 40% across clinical teams.',
      'Built and enhanced interoperability pipelines aligned with HL7 and FHIR standards, reducing cross system data exchange failures by 25% while improving integration reliability across enterprise scale healthcare environments.',
      'Refactored legacy data export and migration tooling into reusable components, increasing data throughput by 30%, reducing migration failures by 25%, and improving long term maintainability of critical healthcare data pipelines.'
    ]
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant',
    location: 'Chennai, India',
    period: 'Sep 2020 - Apr 2021',
    summary:
      '',
    bullets: [
      'Implemented idempotent payment flows using idempotency keys, retries, and compensating recovery logic, reducing duplicate transactions and reconciliation failures by 20% across distributed payment processing services.',
      'Worked on transaction state management using well-defined lifecycle states, balancing consistency and availability tradeoffs while ensuring PCI-DSS compliance and reducing transaction-related production incidents by 15%.',
      'Improved service observability through structured logging, metrics, and alerting, reducing transaction latency by 15% and shortening investigation time for payment failures by 25% during production incidents.'
    ]
  },
  {
    title: 'Systems Engineer Intern',
    company: 'Infosys',
    location: 'Mysuru, India',
    period: 'Feb 2020 - Apr 2020',
    summary:
      '',
    bullets: [
      'Developed backend-integrated enterprise applications using Java and RESTful services, supporting business workflows and system integrations.',
      'Assisted in modernizing legacy application components, improving modularity and preparing systems for service-oriented architectures.',
    ]
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'Illinois Institute of Technology',
    location: 'Chicago, Illinois, USA'
  },
  {
    degree: 'Bachelor of Engineering - Computer Science',
    institution: 'Visvesvaraya Technological University',
    location: 'Bengaluru, Karnataka, India'
  }
]
