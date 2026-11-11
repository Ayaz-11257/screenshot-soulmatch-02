import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  LineChart,
  Sparkles,
  Workflow,
  Hammer,
  Users,
  Route as RouteIcon,
  Briefcase,
} from "lucide-react";
import visionImg from "@/assets/project-vision.jpg";
import chatbotImg from "@/assets/project-chatbot.jpg";
import analyticsImg from "@/assets/project-analytics.jpg";

export const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Learning Path", href: "#learning-path" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
] as const;

export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  level: Level;
  duration: string;
  description: string;
  icon: LucideIcon;
  topics: string[];
  outcome: string;
}

export const COURSES: Course[] = [
  {
    id: "ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    level: "Beginner",
    duration: "4 weeks",
    description:
      "Understand what AI is, how it works, and where it is used — without heavy maths or code.",
    icon: Brain,
    topics: ["History and types of AI", "How models learn from data", "Ethics and responsible AI", "AI in everyday products"],
    outcome: "A clear mental model of AI and the vocabulary to go deeper.",
  },
  {
    id: "python-for-ai",
    title: "Python for AI",
    level: "Beginner",
    duration: "6 weeks",
    description:
      "Learn the Python, NumPy and pandas skills every AI practitioner relies on day to day.",
    icon: Code2,
    topics: ["Python syntax and functions", "NumPy arrays", "Data wrangling with pandas", "Notebooks and visualisation"],
    outcome: "Write clean Python scripts to load, clean and explore datasets.",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    level: "Intermediate",
    duration: "8 weeks",
    description:
      "Build, train and evaluate models with scikit-learn, from regression to ensembles.",
    icon: LineChart,
    topics: ["Supervised and unsupervised learning", "Feature engineering", "Model evaluation", "Intro to neural networks"],
    outcome: "Train and evaluate your own predictive models end to end.",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    level: "Intermediate",
    duration: "6 weeks",
    description:
      "Work with large language models, prompt design, embeddings and retrieval-augmented apps.",
    icon: Sparkles,
    topics: ["How LLMs work", "Prompt engineering", "Embeddings and vector search", "Building RAG apps"],
    outcome: "Ship a working LLM-powered application with retrieval.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    level: "Advanced",
    duration: "5 weeks",
    description:
      "Connect AI to real workflows with APIs, agents and no-code tools to remove repetitive work.",
    icon: Workflow,
    topics: ["Working with AI APIs", "Agents and tool use", "Workflow automation tools", "Monitoring and safety"],
    outcome: "Automate a multi-step business workflow with AI.",
  },
];

export const FEATURES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Practical projects",
    description: "Every module ends with something you build, so you learn by doing, not just watching.",
    icon: Hammer,
  },
  {
    title: "Mentor guidance",
    description: "Weekly sessions with practitioners who review your work and help when you get stuck.",
    icon: Users,
  },
  {
    title: "Structured learning paths",
    description: "A clear sequence from first principles to advanced topics — no guesswork about what to learn next.",
    icon: RouteIcon,
  },
  {
    title: "Career-focused skills",
    description: "Portfolio projects, interview practice and the tools teams actually use in industry.",
    icon: Briefcase,
  },
];

export const ROADMAP = [
  {
    stage: "Beginner",
    step: "01",
    weeks: "Weeks 1–10",
    summary: "Build foundations in AI concepts and Python programming.",
    items: ["AI Fundamentals", "Python for AI", "Data handling basics"],
  },
  {
    stage: "Intermediate",
    step: "02",
    weeks: "Weeks 11–24",
    summary: "Train real models and start working with generative AI.",
    items: ["Machine Learning", "Generative AI", "Two portfolio projects"],
  },
  {
    stage: "Advanced",
    step: "03",
    weeks: "Weeks 25–30",
    summary: "Automate workflows and ship a capstone you can show employers.",
    items: ["AI Automation", "Agents and APIs", "Capstone project"],
  },
] as const;

export const PROJECTS = [
  {
    title: "Smart Object Detector",
    tag: "Computer Vision",
    description:
      "Train a model that spots and labels everyday objects in photos, then wrap it in a simple web demo.",
    stack: ["Python", "PyTorch", "OpenCV"],
    image: visionImg,
  },
  {
    title: "Study Buddy Chatbot",
    tag: "Generative AI",
    description:
      "Build a chatbot that answers questions from your own notes using embeddings and retrieval.",
    stack: ["LLMs", "Embeddings", "RAG"],
    image: chatbotImg,
  },
  {
    title: "Sales Forecasting Dashboard",
    tag: "Machine Learning",
    description:
      "Predict next month's sales from historical data and present the results in an interactive dashboard.",
    stack: ["pandas", "scikit-learn", "Plotly"],
    image: analyticsImg,
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya S.",
    role: "Final-year engineering student",
    initials: "PS",
    quote:
      "The roadmap made it obvious what to learn next. Building the chatbot project finally made embeddings click for me.",
  },
  {
    name: "Daniel M.",
    role: "Operations analyst",
    initials: "DM",
    quote:
      "I wanted to automate reports at work. The automation module gave me a working flow I could adapt in a weekend.",
  },
  {
    name: "Aisha K.",
    role: "Recent graduate",
    initials: "AK",
    quote:
      "Mentor reviews were the best part — honest feedback on my code instead of just a pass or fail.",
  },
];

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "₹2,999",
    cadence: "one course",
    description: "Pick any single course and learn at your own pace.",
    features: ["Access to one course", "Hands-on project", "Community forum", "Certificate of completion"],
  },
  {
    name: "Pro Path",
    price: "₹9,999",
    cadence: "full learning path",
    description: "The complete Beginner to Advanced roadmap with mentor support.",
    features: [
      "All five courses",
      "Weekly mentor sessions",
      "Code reviews on every project",
      "Capstone project",
      "Certificate of completion",
    ],
    featured: true,
  },
  {
    name: "Team",
    price: "Custom",
    cadence: "for groups",
    description: "For colleges and companies upskilling a cohort together.",
    features: ["Everything in Pro Path", "Private cohort", "Progress reporting", "Custom project briefs"],
  },
];

export const FAQS = [
  {
    q: "Do I need any prior experience?",
    a: "No. The Beginner stage assumes no coding or AI background. Basic computer skills and school-level maths are enough to get started.",
  },
  {
    q: "How long does each course take?",
    a: "Courses run from 4 to 8 weeks at around 6–8 hours per week. The full learning path takes roughly 30 weeks, and you can move faster or slower.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, you receive an AI Learning Hub certificate of completion for each course you finish. It is not a university or government accreditation.",
  },
  {
    q: "What kind of projects will I build?",
    a: "Each course includes at least one practical project — for example an object detector, a retrieval chatbot or a forecasting dashboard — that you can add to your portfolio.",
  },
  {
    q: "How does mentorship work?",
    a: "On the Pro Path, you join weekly live sessions with a mentor and get written feedback on your project submissions. Starter learners can ask questions in the community forum.",
  },
];

export const INTEREST_OPTIONS = [
  ...COURSES.map((c) => ({ value: c.id, label: c.title })),
  { value: "full-path", label: "Full learning path" },
  { value: "not-sure", label: "Not sure yet" },
];

export const EXPERIENCE_OPTIONS = [
  { value: "none", label: "New to programming" },
  { value: "some-code", label: "Some coding experience" },
  { value: "some-ai", label: "Some AI / ML experience" },
  { value: "professional", label: "Working professional in tech" },
];
