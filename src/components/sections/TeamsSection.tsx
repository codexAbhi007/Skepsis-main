import { MemberCard } from "../MemberCard" 

const teamMembers = [
  {
    name: "Prithwish Chaterjee",
    role: "Web Developer",
    description: "A self-proclaimed MERN Stack Developer with a passion for building dynamic web applications. Skilled in JavaScript, React, Node.js, and MongoDB, he thrives on creating user-friendly platforms.",
    linkedin: "https://linkedin.com/johndoe",
    github: "https://github.com/prithwish",
    twitter: "https://twitter.com/prithwish",
    imageUrl: "/users/prithwish.png",
  },
  {
    name: "Manobendra Mandal",
    role: "Web Developer",
    description: "A final year BCA student passionate about programming, web development, and blockchain technologies. Experienced with JavaScript, Python, Solidity, and Web3, focusing on decentralized applications (DApps).",
    linkedin: "https://linkedin.com/janesmith",
    github: "https://github.com/manobendra",
    twitter: "https://twitter.com/manobendra",
    imageUrl: "/manov.jpg",
  },
  {
    name: "Manjeet Sharma",
    role: "Backend Developer",
    description: "Backend Developer with expertise in building scalable systems and shipping multiple projects. Known for handling complex backends and ensuring smooth integrations across various platforms.",
    linkedin: "https://linkedin.com/michaelbrown",
    github: "https://github.com/manjeet",
    twitter: "https://twitter.com/manjeet",
    imageUrl: "/users/manjeet.png",
  },
  {
    name: "Mouli Chakraborty",
    role: "Project Manager",
    description: "Project Manager who excels at leading teams, ensuring efficient collaboration, and overseeing project execution. Focuses on managing timelines and delivering high-quality results with strong leadership.",
    linkedin: "https://linkedin.com/sarahdavis",
    github: "https://github.com/mouli",
    twitter: "https://twitter.com/mouli",
    imageUrl: "/users/mouli.png",
  },
  {
    name: "Jishnu Baruah",
    role: "President",
    description: "BTech AI/ML student passionate about hackathons and solving real-world problems through technology. As the President, he brings strong leadership skills, guiding teams towards innovative solutions.",
    linkedin: "https://linkedin.com/sarahdavis",
    github: "https://github.com/jishnu",
    twitter: "https://twitter.com/jishnu",
    imageUrl: "/users/jishnu.png",
  },
  {
    name: "Raj Sharma",
    role: "Web Dev Helper",
    description: "A Web Development helper with a unique, laid-back approach to problem-solving. Eager to contribute to team projects, Raj is always ready to offer support and collaborate on creating great solutions.",
    linkedin: "https://linkedin.com/sarahdavis",
    github: "https://github.com/rajsharma",
    twitter: "https://twitter.com/rajsharma",
    imageUrl: "/users/raj.png",
  },
  {
    name: "Abhirup Banerjee",
    role: "Blockchain Developer and Researcher",
    description: "BTech student focused on blockchain development and eager to explore innovative technologies. He is passionate about leveraging his skills in emerging fields to contribute to future advancements.",
    linkedin: "https://linkedin.com/sarahdavis",
    github: "https://github.com/abhirup",
    twitter: "https://twitter.com/abhirup",
    imageUrl: "/users/abhirup.png",
  },
  {
    name: "Bidish Chakraborty",
    role: "PR Team",
    description: "PR Team member with a keen interest in hackathons and public relations. Focuses on building relationships and promoting projects, ensuring effective communication with the audience and stakeholders.",
    linkedin: "https://linkedin.com/sarahdavis",
    github: "https://github.com/bidish",
    twitter: "https://twitter.com/bidish",
    imageUrl: "/users/bidish.png",
  },
]


export function TeamsSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
        <div className="relative w-12 h-8">
          <div className="absolute left-0 w-8 h-8 bg-pink-400 rounded-full opacity-75" />
          <div className="absolute right-0 w-8 h-8 bg-blue-400 rounded-full opacity-75 mix-blend-multiply" />
        </div>
      </div>

      <div className="relative  rounded-[48px] my-8  ">
        <MemberCard members={teamMembers} />
      </div>
    </section>
  )
}

