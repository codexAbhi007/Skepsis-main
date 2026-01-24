import { content } from "@/lib/content";

export function AboutSection() {
  const sections = content.about?.sections ?? {};

  return (
    <section id="about" className="container mx-auto px-4 py-12 pt-[6rem]">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {content.about.title}
        </h2>
        {/* <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          {content.about.badge ? content.about.badge : ""}
        </p> */}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Who We Are
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {sections.whoWeAre}
            </p>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              What We Do
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {sections.whatWeDo}
            </p>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {sections.ourVision}
            </p>
          </article>
        </div>

        {/* optional footer CTA row */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/skepsis2024/"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-95 transition"
          >
            Join Community
          </a>
          <a
            href="#events"
            className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            See Events
          </a>
        </div>
      </div>
    </section>
  );
}
