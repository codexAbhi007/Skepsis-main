import { content } from "@/lib/content"
import { AboutCard } from "../AboutCard"
import { PartyPopper } from "lucide-react"

export function AboutSection() {
     return (
          <section className="container relative py-8 px-4" id="about">
               {/* Heading and Badge */}
               <div className="flex flex-col items-center mb-12 relative">
                    <h2 className="text-5xl font-bold mb-3 capitalize">{content.about.title}</h2>
                    {/* <div className="bg-blue-100 rounded-full px-4 py-2 flex items-center gap-2">
                         <span className="uppercase text-gray-400 text-sm font-medium">{content.about.badge}</span>
                         <PartyPopper className="w-5 h-5 text-yellow-500" />
                    </div> */}
               </div>

               {/* Vertical dotted line */}
               <div className="max-w-6xl mx-auto relative">
                    {/* Top Card */}
                    <div className="flex justify-center mb-8 sm:mb-4">
                         <AboutCard
                              title={content.about.cards[0].title}
                              description={content.about.cards[0].description}
                              className=""
                              image={content.about.cards[0].image}
                         />
                    </div>

                    {/* Middle Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-8 sm:gap-4">
                         <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                              <AboutCard
                                   title={content.about.cards[1].title}
                                   description={content.about.cards[1].description}
                                   className=""
                                   image={content.about.cards[1].image}
                              />
                              <div className="text-2xl text-gray-400 sm:hidden">...</div>
                         </div>
                         <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                              <div className="text-2xl text-gray-400 sm:hidden">...</div>
                              <AboutCard
                                   title={content.about.cards[2].title}
                                   description={content.about.cards[2].description}
                                   className=""
                                   image={content.about.cards[2].image}
                              />
                         </div>
                    </div>

                    {/* Bottom Card */}
                    <div className="flex justify-center">
                         <AboutCard
                              title={content.about.cards[3].title}
                              description={content.about.cards[3].description}
                              className=""
                              image={content.about.cards[3].image}
                         />
                    </div>
               </div>
          </section>
     )
}
