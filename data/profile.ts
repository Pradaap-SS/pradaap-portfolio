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
  period: string
}

export type CertificationItem = {
  name: string
  issuer: string
  credentialUrl: string
  issued: string
  expires: string
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
    'Full-Stack Software Engineer with 5+ years building distributed systems, microservices, and cloud-native enterprise platforms. I bring hands-on depth across Node.js, Java, TypeScript, Azure, Kubernetes, event-driven architecture, and full-stack delivery, with a track record of improving reliability, scalability, and operational efficiency through measurable business impact.',
  recruiterHeadline: [
    'Full Stack Software Engineer with 5+ years delivering production-grade logistics, healthcare, and financial platforms - from event-driven order management and rail invoicing systems to HL7 FHIR healthcare APIs and high-volume transaction pipelines.',
    'Hands-on across Node.js, Java, Spring Boot, Vue.js, React.js, TypeScript, Kafka, Redis, MongoDB, Azure AKS, and Kubernetes - AWS Certified Solutions Architect with deep experience in microservices, CI/CD, and distributed systems design.',
    '60% faster order processing across 100+ distribution centers, 70% reduction in manual invoicing for 12K+ monthly rail shipments, 55% API latency improvement supporting 5x traffic growth, and COBOL-to-AKS migration cutting deployments from 4 hours to 1 hour.'
  ],
} as const

export const aboutParagraphs: string[] = [
  'Pradaap is a Full Stack Software Engineer with 5+ years building production-grade distributed systems, microservices, and cloud-native platforms across logistics, healthcare, and financial services. At Hub Group Inc, he architects large-scale freight platforms - including an event-driven Order Management system processing 2K+ daily shipments across 100+ distribution centers, a Rail Invoicing platform handling 12K+ monthly rail shipments, and a SAAS TMS integration layer automating 25K+ daily order synchronization transactions. He brings hands-on depth across Node.js, Java, Vue.js, React.js, TypeScript, Kafka, Azure AKS, Kubernetes, MongoDB, and Redis.',
  'His broader background spans healthcare interoperability at Cerner (Oracle Health) - building HL7 FHIR R4 APIs across 4 hospital networks and integrating ML-driven patient risk scoring into clinical workflows - and high-volume financial platforms at Cognizant, where he engineered Kafka and RabbitMQ event pipelines processing 3M+ daily transactions. He holds an AWS Certified Solutions Architect - Associate certification and a Master\'s in Computer Science from Illinois Institute of Technology. He is especially drawn to problems at the intersection of system design, observability, and measurable business outcomes - and to transforming complex, legacy-burdened systems into high-performance, maintainable platforms.'
]

export const skillsByCategory = {
  'Programming Languages': ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C++'],
  'Frontend Development': ['React.js', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Angular'],
  'Backend Development': ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'GraphQL', 'JWT', 'OAuth2', 'WebSockets'],
  'Databases & Cloud': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Apache Kafka', 'RabbitMQ', 'Azure', 'AWS', 'Docker', 'DynamoDB'],
  'DevOps, Tools & Testing': ['Git', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'Terraform', 'Postman', 'SonarQube', 'Unit Testing', 'Integration Testing'],
  'System Design & Architecture': ['Microservices Architecture', 'Distributed Systems', 'Event-Driven Architecture', 'Scalability & Performance Optimization', 'Cloud Architecture']
} as const

export const experience: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    company: 'Hub Group Inc',
    period: 'Jan 2024 - Present',
    summary:
      'Building large-scale logistics platforms across order management, rail invoicing, TMS integrations, observability, and cloud-native modernization using microservices, Kafka, and Azure infrastructure.',
    bullets: [
      'Architected event-driven Order Management system in collaboration with senior engineers, using Vue.js, Node.js, MongoDB, and Kafka on Azure infrastructure, implementing pub-sub messaging patterns for order lifecycle events, processing over 2K+ daily shipment orders across 100+ distribution centers, reducing order processing cycle time by approximately 60% and achieving 99.5% order completion rate.',
      'Built Rail Invoicing platform using React.js frontend with 6 Node.js/Express.js microservices, GraphQL API layer, and MongoDB backend on Azure infrastructure, implementing OAuth 2.0 authentication, RBAC security, and automated invoice generation workflows processing tariff calculations, drayage costs, and ERP posting for 12K+ monthly rail shipments, reducing manual invoicing cycle time by approximately 70% and achieving 99.8% invoice accuracy rate.',
      'Contributed to 10-month migration from monolithic COBOL legacy systems to containerized Node.js microservices on Azure Kubernetes Service (AKS) across 12 services, implementing Docker containerization, Kubernetes deployments with rolling updates and health checks, and GitLab CI/CD pipelines with automated testing, enabling zero-downtime releases, independent service scaling, and ~75% faster deployment times from ~4 hours to ~1 hour.',
      'Engineered SAAS integration platform connecting TMS systems (Mcleod, Power44, TriumphPay, DAT) using RESTful APIs, custom ETL pipelines for payload transformation and data normalization, and Kafka message streaming, implementing webhook receivers, data validation, dead-letter queue handling with retry mechanisms, and automated alerting, automating 25K+ daily order synchronization transactions across freight brokerage operations and eliminating over 150 manual data transfer hours weekly.',
      'Designed real-time order failure detection system using Azure Service Bus topics with automated retry workflows implementing exponential backoff, dead-letter queue handling, and exception routing logic, improving order completion rate to over 99% and reducing manual intervention by approximately 80% for production exception handling across 50K+ daily order processing operations.',
      'Optimized distributed API architecture implementing Redis clustering with multi-tier caching strategies (cache-aside pattern) and MongoDB compound indexing, reducing average API response time by ~55% (from ~450ms to ~200ms) and P95 latency by ~60% (~800ms to ~320ms), supporting 5x traffic growth over 18 months while maintaining 99.9% API availability for enterprise-scale order processing.',
      'Implemented monitoring and alerting infrastructure using Kibana dashboards, Azure Application Insights, and custom CloudWatch metrics, establishing automated alerts for P95 latency, error rates, and throughput anomalies, reducing mean time to detection (MTTD) from ~30 minutes to ~5 minutes and enabling proactive incident response for production systems handling 50K+ daily transactions.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Cerner Corporation [Oracle Health]',
    period: 'Apr 2021 - Aug 2022',
    summary:
      'Built healthcare interoperability APIs, clinical reporting pipelines, and EHR microservices modernization using Spring Boot, HL7 FHIR, Oracle, MongoDB, Kafka, and cloud infrastructure.',
    bullets: [
      'Built REST APIs using Spring Boot, JAX-RS, and MyBatis connecting hospital systems via IBM MQ messaging, implementing HL7 FHIR R4 resource endpoints for Patient and Observation data, reducing cross-system data errors by ~75% across 4 hospital networks.',
      'Optimized Oracle and MongoDB performance for clinical reporting through indexing, query refactoring, and connection pool tuning, reducing average report generation time from ~6s to under 2s (~67% improvement) for real-time dashboards used by 200+ clinical staff.',
      'Identified and resolved Kafka consumer group lag causing clinical event processing delays; redesigned topic partitioning to distribute load evenly across 8 partitions, improving throughput by ~65% during peak hours validated via monitoring dashboards.',
      'Contributed to migrating 2 monolithic EHR modules to microservices on Oracle Cloud Infrastructure (OCI) and AWS ECS, containerizing with Docker and implementing GitLab CI/CD pipelines, reducing release cycle by ~40%.',
      'Integrated Cerner Machine Learning Ecosystem predictive models into patient monitoring workflows, consuming AWS-hosted ML endpoints via REST APIs to display risk scores for 1,000+ daily patient assessments in React dashboards, supporting proactive clinical interventions.'
    ]
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant',
    period: 'Sep 2020 - Apr 2021',
    summary:
      'Developed secure financial platforms and high-volume event-driven pipelines using Spring Boot, Kafka, RabbitMQ, Redis, MySQL, and MongoDB on AWS.',
    bullets: [
      'Developed Spring Boot microservices with MySQL for ACID-compliant transactional data and MongoDB for document storage, implementing OAuth2/JWT authentication and RBAC on a financial platform serving 10K+ daily users across 40+ enterprise clients with 99.8% availability.',
      'Built event-driven data pipeline using Kafka and RabbitMQ with Spring Boot consumers on AWS, developing message handlers for high volume (~3M+) financial transaction processing with idempotency checks and dead-letter queue handling to ensure reliable message delivery.',
      'Developed RESTful API endpoints with Redis caching integration and rate limiting, supporting 50K+ daily API requests and contributing to ~35% average response time improvement through caching optimizations and custom interceptors.'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Infosys',
    period: 'Jan 2020 - May 2020',
    summary:
      'Completed intensive technical training and delivered a full-stack employee management application as part of a collaborative team during a structured internship program.',
    bullets: [
      'Completed Infosys Global Education Center intensive training program in Java, Spring Boot, SQL (MySQL/Oracle), Data Structures, Algorithms, and Object-Oriented Programming, building foundational expertise through hands-on coding exercises and technical assessments across a 14-week curriculum.',
      'Developed end-to-end employee management application in a collaborative 4-person team using Java, Spring Boot, MySQL, and React.js, implementing RESTful APIs, CRUD operations, and role-based authentication, following the complete SDLC from requirements gathering to deployment demonstration.',
      'Presented technical demo and architecture walkthrough to business unit stakeholders, documenting system design, database schema, and API specifications using UML diagrams and technical documentation, receiving positive feedback on implementation approach and code quality.'
    ]
  },
]

export const certifications: CertificationItem[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    credentialUrl: 'https://www.credly.com/badges/4a916db6-a91a-45ab-80a3-85b0c680788a/public_url',
    issued: 'April 29, 2026',
    expires: 'April 29, 2029',
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'Illinois Institute of Technology',
    location: 'USA',
    period: 'Aug 2022 - May 2024'
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Visvesvaraya Technological University',
    location: 'India',
    period: 'Aug 2016 - Aug 2020'
  }
]
