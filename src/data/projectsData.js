export const projectsData = [
  {
    id: "rag-pdf-chatbot",
    title: "RAG PDF Chatbot & Context Q&A",
    category: "AI / ML",
    badge: "Generative AI & Vector Search",
    shortDescription: "Semantic search engine performing sub-300ms vector retrieval across 500+ page PDFs with 85% reduced hallucinations.",
    description: "Built a Retrieval-Augmented Generation (RAG) conversational engine allowing natural language querying of complex, un-structured PDF documents. Integrated LangChain text splitters and OpenAI embeddings with a FAISS vector database.",
    features: [
      "Sub-300ms Vector Similarity Search",
      "FAISS Vector Database Indexing",
      "85% Reduction in Model Hallucinations",
      "Interactive Streamlit & LangChain Pipeline"
    ],
    techStack: ["Python", "LangChain", "FAISS", "Streamlit", "OpenAI / LLMs"],
    metrics: { label: "Query Speed", value: "<300ms" },
    githubUrl: "https://github.com/shiveek/RAG-PDF-Chatbot",
    demoUrl: "https://github.com/shiveek/RAG-PDF-Chatbot",
    featured: true,
  },
  {
    id: "employee-attrition",
    title: "Employee Attrition Prediction System",
    category: "Full Stack & ML",
    badge: "Machine Learning & Analytics",
    shortDescription: "Supervised ML web application predicting workforce attrition with 94.2% accuracy and sub-80ms FastAPI response latency.",
    description: "Engineered an end-to-end Machine Learning classification application predicting workforce turnover. Designed high-throughput REST APIs using FastAPI and an interactive React analytics dashboard.",
    features: [
      "94.2% Predictive Accuracy (XGBoost/Random Forest)",
      "Sub-80ms FastAPI Microservice Endpoints",
      "Dynamic React & Charting Analytics Dashboard",
      "35% Efficiency Gain in Attrition Risk Detection"
    ],
    techStack: ["React", "FastAPI", "Python", "Scikit-learn", "MySQL"],
    metrics: { label: "ML Accuracy", value: "94.2%" },
    githubUrl: "https://github.com/shiveek/Employee-Attrition-Prediction",
    demoUrl: "https://github.com/shiveek/Employee-Attrition-Prediction",
    featured: true,
  },
  {
    id: "taskflow",
    title: "TaskFlow — Enterprise Task Management",
    category: "Full Stack",
    badge: "Full Stack Microservice",
    shortDescription: "Multi-tenant task manager with JWT role-based security and custom MySQL query indexing (42% faster execution).",
    description: "Architectural designer and full-stack developer of a multi-user task management application supporting concurrent user sessions and role-based access control (RBAC).",
    features: [
      "Role-Based Access Control (RBAC) & JWT Auth",
      "42% Lower MySQL Query Latency",
      "Modular Drag-and-Drop Task Boards in React",
      "Pydantic Schema Validation & OpenAPI Specs"
    ],
    techStack: ["React", "FastAPI", "MySQL", "JWT Auth", "Python"],
    metrics: { label: "Query Speedup", value: "+42%" },
    githubUrl: "https://github.com/shiveek/TaskFlow",
    demoUrl: "https://github.com/shiveek/TaskFlow",
    featured: true,
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer & ATS Optimizer",
    category: "AI / NLP",
    badge: "NLP & EdTech",
    shortDescription: "ATS keyword parser and skill gap detector powered by NLP & TF-IDF similarity, scoring candidate resumes in <1.2s.",
    description: "Developed an AI-powered resume parsing application that scans, extracts, and matches candidate resumes against target job descriptions using Advanced NLP techniques.",
    features: [
      "Sub-1.2s Multi-format PDF Parsing Speed",
      "TF-IDF Cosine Similarity Matching Engine",
      "40% Average Boost in Candidate ATS Match Score",
      "Streamlit Interactive Web Interface"
    ],
    techStack: ["Python", "FastAPI", "Streamlit", "NLP", "Scikit-learn"],
    metrics: { label: "Parsing Time", value: "<1.2s" },
    githubUrl: "https://github.com/shiveek/AI-Resume-Analyzer",
    demoUrl: "https://github.com/shiveek/AI-Resume-Analyzer",
    featured: true,
  }
];
