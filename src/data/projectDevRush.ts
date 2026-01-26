export const projectDevRushData = {
  hero: {
    title: "Welcome to Project Dev Rush",
    dateRange: "Starting 1st February 2026",
    countdownMessage: "Next session starting in",
  },
  projectTracks: [
    {
      id: "web-dev",
      title: "AI Meme Generator",
      category: "Track 1",
      description:
        "A Smart Meme Maker that lets you upload any photo and instantly generates one funny top/bottom caption based on what’s happening in the Image",
      features: [
        "Upload Image → Get Meme Caption",
        "Uses Hugging Face BLIP for image understanding",
        "Meme text stays relevant to the photo (no random jokes)",
        
      ],
      bgColor: "bg-blue-600 dark:bg-blue-900",
    },
    {
      id: "ml",
      title: "LocalRAG Assistant",
      category: "Track 2",
      description:
        "A private document Q&A bot that lets you upload PDFs (research papers/contracts), search instantly, and get answers only from your files — with exact page-wise sources",
      features: [
        "Upload PDF → Ask anything → Get cited answers",
        "Zero hallucinations (document-grounded)",
        "Works offline with Ollama + ChromaDB",
        "Remembers your chat context",
      ],
      bgColor: "bg-purple-600 dark:bg-purple-900",
    },
  ],
  sessionTimeline: [
    {
      track: "Web Development Sessions",
      sessions: [
        { date: "1st Feb", time: "7:00 PM", title: "Intro & HTML CSS" },
        { date: "4th Feb", time: "7:00 PM", title: "Javascript Fundamentals" },
        { date: "7th Feb", time: "7:00 PM", title: "React Fundamentals" },
        { date: "8th Feb", time: "7:00 PM", title: "Streamlit & FastAPI" },
        { date: "11th Feb", time: "7:00 PM", title: "Express.js & MongoDB" },
      ],
    },
    {
      track: "Machine Learning Sessions",
      sessions: [
        { date: "15th Feb", time: "7:00 PM", title: "Intro to ML" },
        { date: "18th Feb", time: "7:00 PM", title: "Computer Vision" },
        { date: "21st Feb", time: "7:00 PM", title: "Natural Language Processing" },
        { date: "22nd Feb", time: "7:00 PM", title: "Usage of AI Tools" }
      ],
    },
  ],
  prerequisites: {
    tools: [
      {
        icon: "Code2",
        title: "Visual Studio Code",
        description: "Download and install the code editor",
        link: "https://code.visualstudio.com",
      },
      {
        icon: "Terminal",
        title: "Node.js",
        description: "Download and install Node.js runtime",
        link: "https://nodejs.org",
      },
      {
        icon: "GitBranch",
        title: "Git Bash",
        description: "Download and install Git command line tools",
        link: "https://git-scm.com",
      },
    ],
    accounts: [
      {
        icon: "Github",
        title: "GitHub Account",
        description: "For version control and collaboration",
        link: "https://github.com",
      },
      {
        icon: "Zap",
        title: "Kaggle Account",
        description: "For Machine learning track participants",
        link: "https://kaggle.com",
      },
      {
        icon: "Database",
        title: "MongoDB Atlas",
        description: "Sign up for MongoDB cloud database",
        link: "https://mongodb.com/cloud/atlas",
      },
    ],
  },
  faqs: [
    {
      question: "How to choose a project?",
      answer:
        "You can choose based on your interest and skill level. The Web Development Track is suitable for beginners, while the Machine Learning Track requires basic Python knowledge. Consider your career goals and the technologies you want to learn.",
    },
    {
      question: "Can I pick both projects?",
      answer:
        "Yes, you can pick both projects if you have the time and commitment. However, we recommend focusing on one project to get the maximum learning experience and complete it successfully.",
    },
    {
      question: "I use a different tech stack than the ones taught",
      answer:
        "That's absolutely fine! The core concepts remain the same across different tech stacks. You can apply the same principles using your preferred technology. Feel free to reach out to mentors for guidance.",
    },
  ],
  resources: {
    webDevelopment: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { title: "JavaScript.info", url: "https://javascript.info" },
      { title: "Node.js Official Docs", url: "https://nodejs.org/docs" },
      { title: "React Documentation", url: "https://react.dev" },
      { title: "MongoDB Documentation", url: "https://docs.mongodb.com" },
    ],
    machineLearning: [
      { title: "Scikit-learn Documentation", url: "https://scikit-learn.org" },
      { title: "TensorFlow Guide", url: "https://tensorflow.org" },
      { title: "Kaggle Learn", url: "https://kaggle.com/learn" },
      { title: "Papers with Code", url: "https://paperswithcode.com" },
      { title: "Fast.ai", url: "https://fast.ai" },
    ],
  },
  communities: [
    {
      name: "WhatsApp (PDR)",
      description: "Join The Project Dev Rush Group",
      icon: "MessageCircle",
      link: "https://chat.whatsapp.com/EI7nFtGfbXa3aA5iCf2Mcw?mode=gi_t",
    },
    {
      name: "WhatsApp",
      description: "Join Our Official Community Group",
      icon: "MessageCircle",
      link: "https://chat.whatsapp.com/Im0XRep2Z5VDxdlpec6dWE",
    },
    {
      name: "Discord",
      description: "Join Our Official Discord Server",
      icon: "MessageSquare",
      link: "https://discord.gg/YPUFsMKrQZ",
    },
    {
      name: "Telegram",
      description: "Join Our Official Telegram Channel",
      icon: "Send",
      link: "https://t.me/skepsis2024",
    },
    {
      name: "YouTube",
      description: "Subscribe to our Official Channel",
      icon: "Play",
      link: "https://www.youtube.com/channel/UCTYLfbttnXsN4YQM6PLXwlg",
    },
  ],
};
