import React, { JSX } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

type Position = "left" | "center" | "right";

interface CardStyles {
  left: string;
  top: string;
  rotate: number;
  zIndex: number;
}

interface PersonInfo {
  image: string;
  name: string;
  role: string;
  github: string;
  linkedin: string;
  twitter: string;
}

const StackedCards: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([
    "left",
    "center",
    "right",
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const people: PersonInfo[] = [
    {
      image: "/members/Pritam.jpg",
      name: "Pritam Paul",
      role: "President",
      github: "https://github.com/itspritam008",
      linkedin: "https://www.linkedin.com/in/pritam--paul/",
      twitter: "https://x.com/pritam_pau17578",
    },
    {
      image: "/members/Shibam.jpg",
      name: "Shibam Mandal",
      role: "Vice President",
      github: "https://github.com/mandalfy",
      linkedin: "https://www.linkedin.com/in/mandalfy/",
      twitter: "https://twitter.com/emilyc",
    },
    {
      image: "/members/Barsha.jpg",
      name: "Barsha Mishra",
      role: "Vice President",
      github: "https://github.com/barshamishra19",
      linkedin: "https://www.linkedin.com/in/barsha-mishra-cs/",
      twitter: "https://x.com/mish22272",
    },
  ];

  const rotatePositions = (): void => {
    setPositions((prev) => {
      const newPositions = [...prev];
      const last = newPositions.pop();
      if (last) newPositions.unshift(last);
      return newPositions;
    });
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(rotatePositions, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyles = (position: Position): CardStyles => {
    switch (position) {
      case "left":
        return {
          left: "-20px",
          top: "20px",
          rotate: -10,
          zIndex: 1,
        };
      case "center":
        return {
          left: "0px",
          top: "0px",
          rotate: 0,
          zIndex: 3,
        };
      case "right":
        return {
          left: "20px",
          top: "20px",
          rotate: 10,
          zIndex: 1,
        };
    }
  };

  const renderCard = (position: Position, index: number): JSX.Element => {
    const styles = getCardStyles(position);
    const imageIndex = (currentIndex + index) % 3;
    const person = people[imageIndex];

    return (
      <motion.div
        key={index}
        initial={{
          left: styles.left,
          top: styles.top,
          rotate: styles.rotate,
          zIndex: styles.zIndex,
        }}
        animate={{
          left: styles.left,
          top: styles.top,
          rotate: styles.rotate,
          zIndex: styles.zIndex,
        }}
        transition={{ duration: 0.5 }}
        className={`absolute w-72 sm:w-80 md:w-96 ${position === "center" ? "h-72 sm:h-80 md:h-96" : "h-60 sm:h-72 md:h-80"} rounded-2xl sm:rounded-3xl md:rounded-[40px]`}
      >
        <div
          className={`w-full h-full rounded-2xl sm:rounded-3xl md:rounded-[40px] bg-gradient-to-r 
          ${
            position === "left"
              ? "from-blue-500 to-purple-500"
              : position === "center"
                ? "from-indigo-500 to-purple-500"
                : "from-purple-500 to-pink-500"
          } 
          flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4`}
        >
          {position === "center" && (
            <>
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-[150px] md:h-[150px] bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-2xl md:rounded-[30px] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center text-white px-2">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {person.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80">
                  {person.role}
                </p>
                <div className="flex gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4 justify-center">
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors"
                  >
                    <Github size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors"
                  >
                    <Linkedin
                      size={16}
                      className="sm:w-5 sm:h-5 md:w-5 md:h-5"
                    />
                  </a>
                  <a
                    href={person.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors"
                  >
                    <Twitter
                      size={16}
                      className="sm:w-5 sm:h-5 md:w-5 md:h-5"
                    />
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 mx-auto">
      {positions.map((position, index) => renderCard(position, index))}
    </div>
  );
};

export default StackedCards;
