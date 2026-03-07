export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export type QuickFact = {
  label: string;
  value: string;
};

export const profile = {
  name: 'Nabin Pokhrel',
  title: 'Software Engineer',
  summary:
    'Software Engineer with 4+ years of industry experience and a recently completed full-stack degree abroad, focused on building reliable products for engineering-led teams.',
  intro:
    'I build full-stack applications with a strong backend and testing mindset. My work has ranged from blockchain platforms and privacy-focused form systems to cloud-based document pipelines and open source contributions.',
  language: 'English (Fluent)',
};

export const quickFacts: QuickFact[] = [
  { label: 'Experience', value: '4+ years' },
  { label: 'Open source', value: '5+ projects' },
  { label: 'Degree', value: 'Full-stack postgraduate' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL', 'NoSQL'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Next.js', 'Spring Boot', 'FastAPI', 'GraphQL', 'Hibernate / JPA'],
  },
  {
    title: 'Testing & quality',
    items: ['JUnit', 'Mockito', 'Unit Testing', 'Integration Testing', 'TDD'],
  },
  {
    title: 'Platform & delivery',
    items: ['Docker', 'Git', 'Linux', 'CI/CD Deployment', 'AWS EC2', 'AWS S3', 'AWS Lambda'],
  },
  {
    title: 'Engineering principles',
    items: ['SOLID', 'KISS', 'DRY', 'API Development', 'Microservices Development'],
  },
];

export const strengths: string[] = [
  'Build end-to-end features across frontend, backend, and infrastructure.',
  'Improve performance, test coverage, and delivery confidence in growing codebases.',
  'Work comfortably with microservices, cloud tooling, and collaborative product teams.',
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Sireto I/O',
    location: 'Zwolle, Netherlands',
    period: 'Feb 2020 - Jul 2023',
    summary:
      'Delivered full-stack and backend-heavy features across blockchain, privacy-focused forms, and cloud-based processing systems.',
    highlights: [
      'Built NFT marketplace features using JavaScript, Java, Spring Boot, Hibernate / JPA, PostgreSQL, JUnit, and Mockito on the Cardano blockchain.',
      'Implemented a blockchain scalability and load-testing system capable of simulating thousands of wallets.',
      'Worked on a privacy-focused forms product using GraphQL, MongoDB, Python, and FastAPI.',
      'Delivered authentication, authorization, service-to-service communication, ODM / ORM workflows, SQL queries, pagination, and filtering features.',
      'Used AWS EC2, S3, and Lambda to support scalable cloud applications and 10+ document processing pipelines.',
      'Optimized heavy JPA native queries and caching to reduce response time from 8 seconds to 4.2 seconds.',
      'Contributed to 5+ open source projects through pull requests and issue collaboration.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Sireto I/O',
    location: 'Zwolle, Netherlands',
    period: 'Nov 2019 - Feb 2020',
    summary:
      'Built foundation across product delivery, collaboration, deployment workflows, and modern application stacks.',
    highlights: [
      'Worked across backend Java and Spring Boot, frontend React.js, source control with Git, and Docker-based deployment with Portainer.',
      'Built an idea-sharing platform for scientists inspired by GitHub-style collaboration patterns.',
      'Learned software methodologies, testing practices, and cross-team collaboration in a product environment.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Postgraduate in Full-stack Software Development',
    school: 'Lambton College, Toronto',
    period: 'Sep 2023 - Oct 2025',
  },
  {
    degree: 'Bachelor\'s in Computer Engineering',
    school: 'Pulchowk Campus, Nepal',
    period: 'Oct 2015 - Oct 2019',
  },
];
