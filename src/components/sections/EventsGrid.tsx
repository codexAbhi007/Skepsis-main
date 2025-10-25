// "use client";

// import { motion } from "framer-motion";
// import { Calendar, MapPin } from "lucide-react";
// import Image from "next/image";

// interface Event {
//   id: number;
//   title: string;
//   date: string;
//   location: string;
//   image: string;
//   size: "small" | "medium" | "large";
// }

// const events: Event[] = [
//   {
//     id: 1,
//     title: "Tech Conference 2024",
//     date: "March 15, 2024",
//     location: "San Francisco, CA",
//     image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
//     size: "large"
//   },
//   {
//     id: 2,
//     title: "Design Workshop",
//     date: "March 20, 2024",
//     location: "New York, NY",
//     image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80",
//     size: "small"
//   },
//   {
//     id: 3,
//     title: "AI Summit",
//     date: "April 5, 2024",
//     location: "London, UK",
//     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
//     size: "medium"
//   },
//   {
//     id: 4,
//     title: "Startup Meetup",
//     date: "April 12, 2024",
//     location: "Berlin, DE",
//     image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
//     size: "small"
//   },
//   {
//     id: 5,
//     title: "Web Dev Conference",
//     date: "May 1, 2024",
//     location: "Tokyo, JP",
//     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
//     size: "large"
//   }
// ];

// const EventCard = ({ event, index }: { event: Event; index: number }) => {
//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     })
//   };

//   const sizeClasses = {
//     small: "col-span-1 row-span-1",
//     medium: "col-span-2 row-span-1",
//     large: "col-span-2 row-span-2"
//   };

//   return (
//     <motion.div
//       custom={index}
//       initial="hidden"
//       animate="visible"
//       variants={variants}
//       className={`${sizeClasses[event.size]} relative group overflow-hidden rounded-2xl`}
//     >
//       <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 z-10" />
//       <Image
//         src={event.image}
//         alt={event.title}
//         fill
//         className="object-cover group-hover:scale-110 transition-transform duration-300"
//       />
//       <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 text-white">
//         <h3 className="text-2xl font-bold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
//           {event.title}
//         </h3>
//         <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="flex items-center gap-2">
//             <Calendar className="w-4 h-4" />
//             <span className="text-sm">{event.date}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin className="w-4 h-4" />
//             <span className="text-sm">{event.location}</span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function EventsGrid() {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-6xl font-bold mb-4">Our Events</h1>
//         <p className="text-xl text-gray-600">+21 Events and more</p>
//       </motion.div>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
//         {events.map((event, index) => (
//           <EventCard key={event.id} event={event} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

interface EventsGridProps {
  images?: {
    src: string;
    alt: string;
  }[];
}

const EventsGrid = ({ images = [] }: EventsGridProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const gridItemVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageStyles = "w-full h-full object-cover rounded-xl hover:opacity-90 transition-opacity duration-300";
  const containerStyles = "bg-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300";

  return (
    <section className="w-full max-w-7xl mx-auto p-4 mt-16" id='events' >
      <div className="grid grid-cols-12 gap-3 relative">
        {/* First row */}
        <motion.div
          className={`col-span-3 aspect-square ${containerStyles}`}
          variants={gridItemVariants}
          initial="initial"
          animate="animate"
        >
          <img
            src={images[0]?.src || "/event.png"}
            alt={images[0]?.alt || "Event 1"}
            className={imageStyles}
          />
        </motion.div>

        <div className="col-span-3 flex flex-col gap-3">
          <motion.span
            className="text-5xl font-bold mb-2"
            variants={gridItemVariants}
            initial="initial"
            animate="animate"
          >
            Our
          </motion.span>
          <motion.div
            className={`flex-1 ${containerStyles}`}
            variants={gridItemVariants}
            initial="initial"
            animate="animate"
          >
            <img
              src={images[1]?.src || "/"}
              alt={images[1]?.alt || "Event 2"}
              className={imageStyles}
            />
          </motion.div>
        </div>

        {/* Custom Toggle Switch */}
        <div className="absolute left-[45%] top-[28%] z-10 transform -translate-y-1/2">
          <motion.button
            className="w-12 h-6 rounded-full bg-gray-200 p-1 flex items-center cursor-pointer"
            onClick={() => setIsToggled(!isToggled)}
            initial={false}
            animate={{
              backgroundColor: isToggled ? '#22c55e' : '#e5e7eb'
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-white"
              initial={false}
              animate={{
                x: isToggled ? 24 : 0
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
        </div>

        <div className="col-span-6 flex flex-col gap-3">
          <motion.span
            className="text-5xl font-bold"
            variants={gridItemVariants}
            initial="initial"
            animate="animate"
          >
            Events
          </motion.span>
          <motion.div
            className={`flex-1 ${containerStyles}`}
            variants={gridItemVariants}
            initial="initial"
            animate="animate"
          >
            <img
              src={images[2]?.src || "/"}
              alt={images[2]?.alt || "Event 3"}
              className={imageStyles}
            />
          </motion.div>
        </div>

        {/* Second row */}
        <motion.div
          className={`col-span-3 aspect-square ${containerStyles}`}
          variants={gridItemVariants}
          initial="initial"
          animate="animate"
        >
          <img
            src={images[3]?.src || "/"}
            alt={images[3]?.alt || "Event 4"}
            className={imageStyles}
          />
        </motion.div>

        <motion.div
          className={`col-span-5 h-full ${containerStyles}`}
          variants={gridItemVariants}
          initial="initial"
          animate="animate"
        >
          <img
            src={images[4]?.src || "/"}
            alt={images[4]?.alt || "Event 5"}
            className={imageStyles}
          />
        </motion.div>

        <motion.div
          className={`col-span-4 h-full ${containerStyles}`}
          variants={gridItemVariants}
          initial="initial"
          animate="animate"
        >
          <img
            src={images[5]?.src || "/event.png"}
            alt={images[5]?.alt || "Event 6"}
            className={imageStyles}
          />
        </motion.div>

        {/* Third row */}
        <div className="col-span-12">
          <motion.p
            className="text-xl font-medium text-gray-900 mt-2"
            variants={gridItemVariants}
            initial="initial"
            animate="animate"
          >
            +21 Events and more
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;