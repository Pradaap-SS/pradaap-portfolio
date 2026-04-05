export type ExperienceItem = {
  title: string
  company: string
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
  location: 'United States',
  phone: '+1 (872) 288-3228',
  email: 'pshivakumarshobha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pradaap-shobha/',
  role: 'Software Engineer | Distributed Systems | Full-Stack Platforms',
  tagline:
    'I build production-grade distributed systems, microservices, and full-stack platforms with strong ownership of scalability, reliability, and business impact.',
  homepageSummary:
    'Software Engineer with 5+ years delivering production-grade distributed systems and microservices architectures across enterprise platforms. I bring hands-on depth in full-stack development, REST API design, and cloud infrastructure across AWS, Kubernetes, and Docker, with end-to-end ownership of scalable, high-availability systems that improve operational efficiency and business outcomes.',
  recruiterHeadline: [
    'Software Engineer with 5+ years building distributed systems, microservices, and full-stack enterprise platforms with strong ownership from design through delivery.',
    'Hands-on across Node.js, Java, Spring Boot, Python, REST APIs, cloud infrastructure, observability, CI/CD, and database optimization.',
    'Recent impact includes supporting $2B+ invoice volume, reducing costs by $500K annually, enabling 10x traffic growth, cutting P95 latency by 60%, and reducing release cycles from 4 hours to 1 hour.'
  ],
} as const

export const aboutParagraphs: string[] = [
  'I am a Software Engineer with 5+ years of experience delivering distributed systems, microservices, and full-stack platforms across logistics, healthcare, and financial services. My work spans backend services, APIs, cloud infrastructure, databases, and user-facing product workflows for enterprise environments that depend on scale, reliability, and operational efficiency.',
  'At Hub Group, I have worked across large modernization programs involving Kubernetes-based Node.js microservices, Kafka-driven recovery workflows, ETL integrations, Redis-backed caching, MongoDB performance tuning, anomaly detection, and CI/CD automation. The work has contributed to measurable outcomes including lower latency, reduced manual intervention, faster release cycles, and major cost savings.',
  'My background also includes healthcare interoperability using HL7 and FHIR, secure financial platforms built with Spring Boot and OAuth2/JWT, and applied AI and ML capabilities such as TensorFlow-based anomaly detection, FastAPI services, GenAI integrations, and agent orchestration. I am targeting software engineering roles centered on distributed systems, full-stack architecture, and cloud-native platform development.'
]

export const skillsByCategory = {
  Languages: ['JavaScript', 'Python', 'TypeScript', 'Java', 'SQL', 'CCL', 'C++'],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle Database', 'SQL Server', 'Redis', 'DynamoDB'],
  'Full Stack (Frontend, Backend)': ['React.js', 'Vue.js', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'Redux', 'Vuex', 'Node.js', 'Express', 'Spring Boot', 'REST APIs', 'GraphQL', 'API Design', 'WebSockets'],
  'System Design & Architecture': ['Distributed Systems', 'Microservices Architecture', 'Event-Driven Architecture', 'Service-Oriented Architecture (SOA)', 'System Scalability', 'High Availability', 'Load Balancing', 'Service Mesh', 'API Gateway', 'Fault Tolerance'],
  Cloud: ['Microsoft Azure', 'AWS (EC2, Lambda, S3, RDS, DynamoDB, API Gateway, CloudWatch)', 'Kubernetes', 'Docker', 'CI/CD Pipelines', 'Jenkins', 'GitHub Actions', 'Terraform', 'Container Orchestration'],
  'Message Queues & Streaming': ['Apache Kafka', 'RabbitMQ', 'Event Streaming', 'Asynchronous Processing', 'ETL Pipelines'],
  'Security & Authentication': ['OAuth2', 'JWT', 'Role-Based Access Control', 'API Security', 'Data Encryption', 'HIPAA/SOC2 Compliance'],
  'Observability & Reliability': ['Elasticsearch', 'Kibana', 'Prometheus', 'ELK Stack', 'Metrics & Monitoring', 'Alerting', 'Distributed Tracing', 'Performance Optimization', 'Application Reliability Engineering', 'Incident Response', 'On-Call Rotation'],
  'Testing & Quality': ['Unit Testing', 'Integration Testing', 'Test-Driven Development (TDD)', 'SonarQube', 'Automated Testing'],
  'AI/ML': ['FastAPI', 'TensorFlow', 'LLM Workflows', 'GenAI Application Integration', 'Agent Orchestration'],
  Tools: ['Git', 'Agile/Scrum', 'RESTful Design Patterns', 'Code Review', 'Technical Documentation', 'System Troubleshooting']
} as const

export const experience: ExperienceItem[] = [
  {
    title: 'Full Stack Software Engineer',
    company: 'Hub Group Inc',
    period: 'Jan 2024 - Present',
    summary:
      'Leading large-scale logistics platform modernization across billing, order management, observability, and deployment automation using microservices, Kafka, caching, and cloud-native tooling.',
    bullets: [
      'Led design and implementation, with 1 senior engineer and 2 SDEs, of a microservices-based billing platform processing $2B+ in annual invoice volume, automating invoice processing and ERP integration while retiring legacy COBOL systems.',
      'Architected a 10-month migration across 12 microservices from monolithic COBOL to containerized Node.js services on Kubernetes and Docker, reducing costs by $500K annually and enabling independent scaling with zero-downtime deployments.',
      'Engineered REST API integration between the Order Management platform and TMS using custom ETL pipelines processing 50K+ daily orders, eliminating manual data transfers and driving an estimated $1M in revenue growth through operational efficiency.',
      'Designed and built a real-time order failure detection system using Apache Kafka event streaming and automated recovery workflows, improving order completion and reducing manual intervention by 85% across 100K+ monthly transactions.',
      'Redesigned distributed API architecture to support 10x traffic growth, implementing Redis clustering and multi-tier caching strategies to handle 500K+ monthly requests and reducing P95 response time by 60%, from 800ms to 320ms.',
      'Built an anomaly detection system using threshold-based alerting and ML-augmented baselines with TensorFlow, integrated with Elasticsearch and Kibana dashboards to detect 15+ critical incidents and reduce MTTD to under 2 minutes.',
      'Optimized Node.js and Express microservices plus MongoDB aggregation pipelines through indexing and query refactoring, improving API response times by 40% and reducing P99 latency from 1.2s to 720ms for 50K daily users.',
      'Automated zero-downtime deployment pipeline using Kubernetes rolling updates via Jenkins, coordinating releases across 8 microservices with automated health checks, and rollback mechanisms, reducing release cycle (4 hours → 1 hour)'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Cerner Corporation [Oracle Health]',
    period: 'Apr 2021 - Aug 2022',
    summary:
      'Built healthcare interoperability and reporting solutions across enterprise EHR workflows using HL7, FHIR, CCL, and Oracle Database.',
    bullets: [
      'Implemented HL7 v2.x and FHIR message handlers processing 150K+ daily patient transactions, reducing interface transmission errors by 22% through stronger validation logic and error handling across production EHR integrations.',
      'Created custom Discern Rules and SQL-based reporting solutions against Oracle Database for revenue cycle and scheduling workflows, delivering 15 production reports used daily by 500+ clinical and operational staff.',
      'Designed an automated clinical reporting framework using CCL and Oracle Database, deployed across 8 hospital clients serving 10K+ clinicians and reducing manual data reconciliation by 45%, saving 20 staff-hours per week per site.'
    ]
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant',
    period: 'Sep 2020 - Apr 2021',
    summary:
      'Developed secure financial platforms and microservices for high-volume transaction workloads using Spring Boot, Redis, and distributed database design.',
    bullets: [
      'Built a full-stack financial platform using React.js and Spring Boot microservices with OAuth2/JWT authentication and RBAC, serving 10K+ daily active users while maintaining SOC2 compliance and 99.9% uptime.',
      'Engineered high-throughput RESTful APIs using Spring Security, Redis caching, and custom interceptors, reducing API latency by 35% and adding rate limiting for critical World Bank integration endpoints processing 50K+ daily requests.',
      'Architected a hybrid database solution using MySQL sharding strategies and indexing, improving query performance by 40% while supporting 100M+ records across distributed financial transaction systems with strong ACID guarantees.'
    ]
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'Illinois Institute of Technology',
    location: 'USA'
  }
]
