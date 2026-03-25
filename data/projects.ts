export type ProjectDetails = {
  problem: string
  solution: string
  architecture: string
  responsibilities: string[]
  screenshots: string[]
}

export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  role: string
  period: string
  githubUrl?: string
  liveUrl?: string
  image: string
  details: ProjectDetails
}

export const projects: Project[] = [
  {
    slug: 'ai-customer-support-copilot',
    title: 'AI Customer Support Copilot',
    description:
      'Human-in-the-loop support copilot that turns raw customer tickets into AI-assisted triage, retrieval-backed drafting, and agent-reviewed responses.',
    longDescription:
      'AI Customer Support Copilot is a product-style demo built around how modern support teams actually work: durable intake first, then AI classification, routing, knowledge retrieval, and draft generation, with a human agent reviewing the final response before it is sent. The experience is intentionally shaped like an operator dashboard instead of a chatbot so the workflow emphasizes trust, auditability, and human accountability.',
    techStack: ['Human-in-the-Loop AI', 'Support Workflow', 'Dashboard UI', 'Vercel'],
    role: 'Personal Project',
    period: '2026',
    githubUrl: 'https://github.com/Pradaap-SS/AI-Customer-Support-Copilot',
    liveUrl: 'https://ai-support-frontend-five.vercel.app/',
    image: '/images/projects/ai-support-copilot-cover.png',
    details: {
      problem:
        'Support teams need faster triage and drafting, but fully autonomous customer replies can reduce trust when agents cannot validate the reasoning, evidence, or final tone.',
      solution:
        'Designed a copilot workflow that preserves the original customer signal, enriches each ticket with AI-driven classification and routing, retrieves supporting knowledge, and presents an editable draft for human review before sending.',
      architecture:
        'Split-panel product experience with customer intake on one side and an agent queue on the other, backed by a staged pipeline for ticket ingestion, LLM classification, priority routing, retrieval-backed drafting, and final human approval.',
      responsibilities: [],
      screenshots: [
        '/images/projects/ai-support-copilot-cover.png',
        '/images/projects/ai-support-copilot-workflow.png'
      ]
    }
  },
  {
    slug: 'agent-orchestrator',
    title: 'Agent-Orchestrator',
    description:
      'Personal project focused on orchestrating agent-driven workflows from a central control layer.',
    longDescription:
      'Agent-Orchestrator is a personal project repository for building and organizing agent-based workflow orchestration. The project is documented in the repository README and is intended to make agent flow coordination easier to design and iterate.',
    techStack: ['Agent Orchestration', 'Automation'],
    role: 'Personal Project',
    period: '2026',
    githubUrl: 'https://github.com/Pradaap-SS/Agent-Orchestrator',
    liveUrl: 'https://agent-orchestrator-beta.vercel.app/',
    image: '/images/projects/agent-orchestrator-cover.png',
    details: {
      problem:
        'Agent workflows can become difficult to coordinate when execution steps and dependencies grow over time.',
      solution:
        'Created a personal orchestration project to structure agent execution flow with a single control-oriented design.',
      architecture:
        'Repository-based orchestrator setup documented in README, centered on modular workflow coordination.',
      responsibilities: [],
      screenshots: [
        '/images/projects/agent-orchestrator-cover.png',
        '/images/projects/agent-orchestrator-screenshot.png'
      ]
    }
  },
  {
    slug: 'summaraize-intelligent-article-summarizer',
    title: 'SummarAIze - The Intelligent Article Summarizer',
    description:
      'Personal project to summarize long-form articles into concise, readable insights through a clean web interface.',
    longDescription:
      'SummarAIze is a personal project focused on helping users quickly understand lengthy article content by generating concise summaries. The project emphasizes a simple user experience and practical readability for day-to-day information consumption.',
    techStack: ['JavaScript', 'Web App', 'Vercel'],
    role: 'Personal Project',
    period: '2023',
    githubUrl: 'https://github.com/Pradaap-SS/SummarAIze-The-Intelligent-Article-Summarizer',
    liveUrl: 'https://summar-a-ize-the-intelligent-article-summarizer.vercel.app/',
    image: '/images/projects/summaraize-cover.png',
    details: {
      problem:
        'Long-form online articles often take significant time to read end-to-end when users only need core takeaways.',
      solution:
        'Built a web app that produces concise article summaries so users can extract key points faster.',
      architecture:
        'Deployed as a Vercel-hosted web application with a lightweight, user-focused summarization workflow.',
      responsibilities: [],
      screenshots: ['/images/projects/summaraize-cover.png', '/images/projects/Summarize-screenshot.png']
    }
  },
  {
    slug: 'hub-group-document-automation',
    title: 'AP/AR Document Automation Pipeline',
    description:
      'Built an asynchronous document processing pipeline integrated with third-party ML services to reduce manual AP/AR operations.',
    longDescription:
      'I designed and implemented an automated document processing pipeline that orchestrated third-party ML services and resilient async workflows. The design focused on failure tolerance, retries, and operational transparency for finance-critical processes.',
    techStack: ['Node.js', 'Asynchronous Workflows', 'REST APIs', 'GitHub Actions'],
    role: 'Full Stack Software Engineer',
    period: 'Jan 2024 - Present',
    image: '/images/projects/ap-ar-automation-cover.svg',
    details: {
      problem:
        'Manual AP/AR document handling was operationally expensive and vulnerable to delays and inconsistency during peak load.',
      solution:
        'Introduced automated document ingestion and processing with resilient retry logic, workflow orchestration, and explicit failure handling.',
      architecture:
        'Asynchronous pipeline integrating external ML APIs, with retry policies and workflow-state tracking for operational visibility.',
      responsibilities: [],
      screenshots: []
    }
  },
  {
    slug: 'oracle-cerner-interoperability',
    title: 'Healthcare Interoperability & EHR Services',
    description:
      'Developed healthcare backend services and interoperability pipelines for EHR workflows in regulated clinical environments.',
    longDescription:
      'At Cerner, I worked on backend systems supporting clinician-facing workflows and cross-system healthcare data exchange. Work emphasized availability, data correctness, and interoperability reliability in production healthcare environments.',
    techStack: ['Java', 'Cerner CCL', 'REST APIs', 'HL7', 'FHIR'],
    role: 'Software Engineer - Healthcare Backend Systems',
    period: 'Apr 2021 - Aug 2022',
    image: '/images/projects/healthcare-interoperability-cover.svg',
    details: {
      problem:
        'Clinical systems needed reliable interoperability and accurate backend workflows across regulated, high-stakes healthcare environments.',
      solution:
        'Built and maintained healthcare backend services and standards-aligned interoperability pipelines with strong reliability and throughput characteristics.',
      architecture:
        'Service-oriented healthcare backend using Java and Cerner CCL with HL7/FHIR data exchange integrations and reusable migration components.',
      responsibilities: [],
      screenshots: []
    }
  },
  {
    slug: 'metaverse-website',
    title: 'Metaverse Website',
    description:
      'Frontend-only landing page concept for a fictional metaverse brand, focused on immersive visuals, animated sections, and polished marketing UI.',
    longDescription:
      'Metaverse Website is a frontend UI project built as a cinematic landing page for a fictional metaverse experience. The site leans on oversized typography, gradient lighting, scroll-driven storytelling, and section-based composition to present worlds to explore, onboarding steps, social presence, and editorial-style content without any backend dependency.',
    techStack: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Frontend UI', 'Vercel'],
    role: 'Personal Project',
    period: '2023',
    githubUrl: 'https://github.com/Pradaap-SS/metaverse-website',
    liveUrl: 'https://metaverse-website-plum.vercel.app/',
    image: '/images/projects/metaverse-website-cover.png',
    details: {
      problem:
        'The goal was to present a speculative metaverse product in a way that felt immersive and premium using only frontend design, layout, and motion.',
      solution:
        'Built a visually rich single-page experience with a bold hero, explorable world cards, guided onboarding sections, and social-proof style content blocks that create a cohesive product narrative.',
      architecture:
        'Section-based Next.js frontend composed from reusable UI blocks, static content, visual assets, and responsive styling, then deployed as a lightweight Vercel-hosted marketing experience.',
      responsibilities: [],
      screenshots: [
        '/images/projects/metaverse-website-cover.png',
        '/images/projects/metaverse-website-sections.png'
      ]
    }
  }
]
