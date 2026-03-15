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
    'Full Stack Builder with 4+ years of experience shipping production applications across logistics, healthcare, and fintech. I design complete products from frontend workflows to backend services and data layers, with strong focus on reliability, performance, and scale. I use AI both to build smarter product features and to accelerate engineering workflows from prototyping to delivery.',
  recruiterHeadline: [
    'Builds modern full-stack products end-to-end, from responsive frontend experiences to scalable backend and distributed services.',
    'Applies AI to product capabilities (automation, intelligent workflows, document processing) and to faster development execution.',
    'Delivered measurable impact: 15% lower API latency, 20% fewer production incidents, 30% faster database queries via indexing, and 80% reduction in manual AP/AR effort.'
  ],
} as const

export const aboutParagraphs: string[] = [
  'I am a Full Stack Builder and Software Engineer with 4+ years of experience delivering end-to-end products across logistics, healthcare, and fintech. I build complete systems from user-facing workflows to backend services and data layers for high-transaction, operationally critical environments.',
  'My work combines product development with strong backend foundations: API design, asynchronous processing, distributed service patterns, interoperability, data pipelines, schema evolution, and CI/CD. I focus on reliable releases, predictable scalability, and measurable production impact, including lower latency, fewer incidents, and major reductions in manual operations.',
  'I build products using AI capabilities to add intelligent workflows and automation, and I also use AI to speed up engineering delivery. I am targeting full-stack engineering roles centered on AI-driven product development, backend and distributed systems, and scalable cloud-native architectures.'
]

export const skillsByCategory = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++'],
  Frontend: ['Nuxt.js', 'Next.js', 'Vue','React', 'Angular', 'HTML5', 'CSS3', 'PHP', 'Bootstrap'],
  Backend: ['Node.js', 'REST APIs', 'Microservices', 'Express', 'Spring Boot', 'Flask', 'Django', 'Kafka', 'Cerner CCL'],
  Cloud: ['AWS (S3, RDS, VPC, EC2)', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  Databases: ['MongoDB', 'SQL', 'Oracle', 'SQL Server', 'DynamoDB', 'Elasticsearch', 'Teradata'],
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
      'Architected logistics backend service decomposition and database optimization using Node.js, REST APIs, and MongoDB, reducing end-to-end API latency by 15%.',
      'Diagnosed and redesigned tightly coupled legacy service boundaries with backward-compatible APIs, reducing recurring production incidents by 20% across release cycles.',
      'Designed an automated AP/AR document processing pipeline with asynchronous workflows, retry strategies, and third-party ML integration, reducing manual effort by 80%.',
      'Standardized REST API versioning and MongoDB schema evolution practices, improving deployment safety and reducing breaking-change defects by 30% across quarterly releases.'
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
      'Built and maintained backend services for EHR and clinical workflows using Java, Cerner CCL, and REST APIs, supporting thousands of clinicians in production.',
      'Implemented HL7 and FHIR interoperability pipelines for cross-system data exchange, reducing integration failures by 25% in enterprise healthcare environments.',
      'Refactored legacy migration and data export tooling into reusable backend components, increasing data throughput by 30% and reducing migration failures by 25%.'
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
      'Engineered backend payment orchestration services for regulated financial systems handling millions of monthly transactions with strict latency and consistency requirements.',
      'Implemented idempotent payment processing with idempotency keys, retry logic, and compensating recovery workflows, reducing duplicate transactions and reconciliation failures by 20%.',
      'Designed transaction lifecycle state management with consistency-availability tradeoff handling and PCI-DSS alignment, reducing transaction-related production incidents by 15%.',
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
    degree: 'Bachelor of Engineering (Computer Science)',
    institution: 'Visvesvaraya Technological University',
    location: 'Bengaluru, Karnataka, India'
  }
]
